import { useEffect, useState } from "react";
import { AccountActivity } from "./accound-activity/account-activity";
import { TransfersActivity } from "./transfers-activity/transfers-activity";
import { RequestsActivity } from "./requests-activity/requests-activity";
import { BeneficiaryActivity } from "../../beneficiary/beneficiary-activity-permissions/beneficiary-activity";
import { CardsManagement } from "../../cards/cards-management-permissions/cards-management";
import {TeamsManagement} from "./teams-management/teams-management";
import { PersonalizeGift } from "../../gift/personalize-gift-permissions/personalize-gift";
import { ResolutionCenter } from "../../resolution-center/resolution-center-permissions/resolution-center";
import { AccountDetails } from "./account-details/account-details";
import { rolePermissionDataFunction } from "./role-details-data";
import { DynamicTabPanelTemplate } from "../../../templates/dynamic-tab-panel-template/dynamic-tab-panel-template";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { useParams } from "react-router-dom";

export const RoleDetails = () => {
  const [selectedCard, setSelectedCard] = useState("Account");

  const rolePermissionData = rolePermissionDataFunction(setSelectedCard);

  const { bannerHeading, pageName } = useAppLayout();
  const { role } = useParams();
  console.log(role);

  useEffect(() => {
    bannerHeading(role);
    pageName("Team Management");
  }, [role]);

  const go: any = {
    Account: <AccountActivity />,
    Transfers: <TransfersActivity />,
    Requests: <RequestsActivity />,
    Cards: <CardsManagement />,
    Teams: <TeamsManagement />,
    "Beneficiary Management": <BeneficiaryActivity />,
    "Personalized gift": <PersonalizeGift />,
    "Resolution Center": <ResolutionCenter />,
    "Account Details": <AccountDetails />,
  };

  const renderComponent = (selected: any) => {
    return go?.[selected];
  };

  return (
    <DynamicTabPanelTemplate
      tabCardData={rolePermissionData}
      activeCard={selectedCard}
      componentToShown={renderComponent?.(selectedCard)}
    />
  );
};
