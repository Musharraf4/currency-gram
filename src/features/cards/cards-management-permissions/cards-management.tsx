import TeamsActivityPermissionTemplate from "../../../templates/teams-activity-permission/teams-activity-permission";
import { CARDMANAGEMENTDATAPERMISSION } from "./cards-activitity-data";

export const CardsManagement = () => {
  const virtualCardsPermissionsData = CARDMANAGEMENTDATAPERMISSION.virtualCardsPermissionsFunction();
  return (
    <div className="mx-2">
      <TeamsActivityPermissionTemplate
        heading="Cards"
        cardHeading="Additional Information"
        description="Account Holder are only able to review accounts if they have permission to do so"
        subHeadingParagraph="Manage who can see and change settings for requests belonging to other team members"
        accountsPermissionData={virtualCardsPermissionsData}
      />
    </div>
  );
};
