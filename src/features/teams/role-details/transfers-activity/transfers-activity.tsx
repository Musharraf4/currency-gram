import { transfersPermissionsFunction } from "./transfer-activitity-data";
import TeamsActivityPermissionTemplate from "../../../../templates/teams-activity-permission/teams-activity-permission";

export const TransfersActivity = () => {
  const transfersPermissionsData = transfersPermissionsFunction();
  return (
    <div className="mx-2">
      <TeamsActivityPermissionTemplate
        heading="Account Activity"
        cardHeading="Additional Information"
        description="Account Holder are only able to review accounts if they have permission to do so"
        subHeadingParagraph="Manage who can see and change settings for transfers belonging to other team members"
        accountsPermissionData={transfersPermissionsData}
      />
    </div>
  );
};
