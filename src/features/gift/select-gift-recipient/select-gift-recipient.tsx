import { Row, Col } from "antd";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppSelectRecipientCard } from "../../../components/cards/app-select-recipient-card/app-select-recipient-card";
import infoAdd from "../../../assets/icons/info-icon.svg";
import { useAppSelector } from "../../../store/store";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { AppGiftImageWithText } from "../../../components/data-display/app-gift-image-with-text/app-gift-image-with-text";
import { RecipientListTemplate } from "../../../templates/recipient-list-template/recipient-list-template";
import { AppButton } from "../../../components/buttons/app-button/app-button";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { AppCalendarModal } from "../../../components/modals/app-calendar-modal/app-calendar-modal";
import { SELECTGIFTRECIPIENTIMPORTS } from "./select-gift-recipient-imports";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

// TODO: disable/hide buttons until any recipient is selected

export const SelectGiftRecipient = () => {
  const { bannerHeading, pageName } = useAppLayout();
  const navigate = useNavigate();
  const { giftDetails } = useAppSelector((state) => state.gift);
  const [showComponent, setShowComponent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [showSendGiftModal, setShowSendGiftModal] = useState(false);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const editFunction = () => {
    navigate(
      `${SELECTGIFTRECIPIENTIMPORTS.MOREPATH}${SELECTGIFTRECIPIENTIMPORTS.SLASHPATH}${SELECTGIFTRECIPIENTIMPORTS.ADDGIFTDETAILPATH}`
    );
  };
  useEffect(() => {
    bannerHeading("Select a recipient");
    pageName("Personalized gifts");
  }, [bannerHeading]);
  return (
    <AppCardWhite cardClassName="py-10">
      <Row justify={"center"}>
        <Col md={16} sm={20} xs={23} lg={10}>
          {/* show selected gift card and details page*/}
          {!showComponent && (
            <>
              <AppGiftImageWithText
                giftDetails={giftDetails}
                editImage
                editFunction={editFunction}
              />
              <AppSelectRecipientCard
                onClick={() => setShowComponent(true)}
                heading="Select Recipient"
                subHeading={"Choose who to send it to"}
                icon={<ICONSCONSTANT.UserOutlined />}
              />
              <AppTitle
                title="You can also send gift via link(URL) to Currency Gram user or non Currency Gram user by"
                className="text-center text-xs font-medium my-6 text-primary-text"
              />
              <div className="text-center">
                <AppTitle
                  title="clicking here"
                  Variant="span"
                  className="text-primary cursor-pointer  font-semibold"
                  onClick={() =>
                    navigate(
                      `${SELECTGIFTRECIPIENTIMPORTS.MOREPATH}${SELECTGIFTRECIPIENTIMPORTS.SLASHPATH}${SELECTGIFTRECIPIENTIMPORTS.SHAREDGIFTCARDLINK}`
                    )
                  }
                />
              </div>

              {/* {!!recipientList && <> */}
              <AppButton
                buttons={[
                  {
                    btnLink: () => setShowSendGiftModal(true),
                    size: "large",
                    htmlType: "submit",
                    className: " bg-primary text-white w-full mb-5 ",
                    btnText: "Send Gift Now",
                  },
                  {
                    btnLink: () => setIsModalOpen(true),
                    size: "large",
                    htmlType: "submit",
                    className: "text-primary cursor-pointer border-none w-full",
                    btnText: "Schedule for later",
                  },
                ]}
                btnWrapperClassName="lg:mt-8"
              />
              {/* </>
              } */}
              <AppCalendarModal
                date={date}
                setDate={setDate}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
              />
            </>
          )}

          {/* show recipients list */}
          {showComponent && (
            <RecipientListTemplate
              setShowComponent={setShowComponent}
              rowSelection={rowSelection}
            />
          )}
        </Col>
      </Row>
      {showSendGiftModal && (
        <AppModal
          isModalOpen={showSendGiftModal}
          handleOk={() => setShowSendGiftModal?.(false)}
          handleCancel={() => setShowSendGiftModal?.(false)}
          // submitBtnFunction={(e: any) => onConfirmAdd?.(e)}
          heading="Total deduction from your account: £24
          Each recipient get: £12"
          subHeading="Are you sure you want to send gifts?"
          avatarClassName="text-5xl bg-primary p-2"
          headingClassName="my-3"
          subHeadingClassName="text-xs font-normal "
          avatarSize={70}
          src={infoAdd}
          firstButtonText="Confirm"
          secondButtonText="Cancel"
        />
      )}
    </AppCardWhite>
  );
};
