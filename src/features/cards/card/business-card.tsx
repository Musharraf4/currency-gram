import { Col, Row, TabsProps } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CARDIMAGES } from "./card-images";
import { CARDIMPORT } from "./card-imports";
import { CARDDATA } from "../card/card-data";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { TeamCardTemplate } from "../../../templates/team-card/team-card";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { BusinessCardSettings } from "../card-settings/business-card-settings";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { BusinessCardTemplate } from "../../../templates/business-card/business-card";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { TabsSwitch } from "../../../components/navigations/app-tabs-switch/app-tabs-switch";
import { SelectTeamMembersTemplate } from "../../../templates/select-team-members-template/select-team-members-template";

export const BusinessCard = () => {
  const navigate = useNavigate()
  const { bannerHeading, pageName } = useAppLayout();
  const [isActive, setIsActive] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [showCradSetting, setShowCradSetting] = useState(false);

  const BusinessCardArray = CARDDATA.BusinessCardFunction(navigate);
  const teamCardArray = CARDDATA.TeamCardArrayFunction(setViewModal, navigate);
  const businessCardButtonArray = CARDDATA.businessCardButtonFunction(setIsActive);
  const ButtonFunction = CARDDATA.ButtonFunction(setShowCradSetting);


  const { openAlert } = useAppAlert();
  const resendInvitaion = () => {
    setViewModal?.(false)
    openAlert('Info: Invitation sent successfully!', 'info')
  }

  useEffect(() => {
    bannerHeading(isActive ? "Select Team Members" : "Business card");
    pageName("Card Control")
  }, [bannerHeading, isActive, pageName]);


  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Physical`,
      children: (
        <>
          <SelectTeamMembersTemplate
            TeamMembersArray={CARDDATA.PhysicalMembersArray}
            btnChildren="Create Physical Card"
            btnLink={() => navigate(`${CARDIMPORT.CARDSPATH}${CARDIMPORT.SLASHPATH}${CARDIMPORT.ADDCARDPARAM}${CARDIMPORT.SLASHPATH}${CARDIMPORT.CARDTYPEPARAMSCONSTANTS.physical}`)}
          />
        </>
      ),
    },
    {
      key: "2",
      label: `Virtual`,
      children: (
        <SelectTeamMembersTemplate
          TeamMembersArray={CARDDATA.VirtualMembersArray}
          btnChildren="Create Virtual Card"
          btnLink={() => navigate(`${CARDIMPORT.CARDSPATH}${CARDIMPORT.SLASHPATH}${CARDIMPORT.ADDCARDPARAM}${CARDIMPORT.SLASHPATH}${CARDIMPORT.CARDTYPEPARAMSCONSTANTS.virtual}`)}
        />
      ),
    },
  ];
  return (
    <>

      {!isActive && <BusinessCardTemplate
        primaryCardData={BusinessCardArray}
        businessCardSrc={CARDIMAGES.teamCardMember}
        buttons={businessCardButtonArray}
      />}
      {!showCradSetting && <TeamCardTemplate
        teamCardArray={teamCardArray}
        btnText=" Request team cards"
        textAndButtonTitle="Team Cards"
        textAndButtonText="Card Settings"
        btnIcon={<ICONSCONSTANT.SettingOutlined />}
        btnLink={() => setShowCradSetting(true)}
      />
      }
      {showCradSetting && (
        <AppCardWhite cardClassName="p-5 sm:px-14 py-16 mt-6">
          <Row justify={"center"} className="py-10">
            <Col md={16} sm={20} xs={24} lg={10}>
              <BusinessCardSettings
                buttons={ButtonFunction}
                title="Set default Settings"
              />
            </Col>
          </Row>
        </AppCardWhite>
      )}
      {viewModal && (
        <AppModal
          isModalOpen={viewModal}
          handleOk={() => setViewModal?.(false)}
          handleCancel={() => setViewModal?.(false)}
          submitBtnFunction={() => resendInvitaion()}
          heading="This card is not claimed yet Ask the card owner to open Currency Gram app and finish their onboarding."
          avatarClassName="text-2xl p-4"
          avatarSize={100}
          src={CARDIMAGES.roundAlertIcon}
          firstButtonText="Resend Invite"
          submitBtnClassName="text-sm"
          cancelBtnClassName="text-sm"
          secondButtonText="Not Now"
        />
      )}
      {isActive && <AppCardWhite cardClassName="p-5 sm:px-14 py-16 mt-6">
        <TabsSwitch defaultActiveKey="1" items={items} size="small" />
      </AppCardWhite>}
    </>
  );
};
