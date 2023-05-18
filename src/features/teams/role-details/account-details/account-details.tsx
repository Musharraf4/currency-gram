import { accountDetailsPermissions } from "./account-details-activitity-data";
import TeamsActivityPermissionTemplate from "../../../../templates/teams-activity-permission/teams-activity-permission";

export const AccountDetails = () => {
  const accountDetailsPermissionsData = accountDetailsPermissions();
  return (
    <div className="mx-2">
      <TeamsActivityPermissionTemplate
        heading="Account details"
        subHeadingParagraph="Manage who can see and change settings for account details belonging to other team members"
        cardHeading="Additional Information"
        description="Account Holder are only able to review Account Details if they have permission to do so"
        accountsPermissionData={accountDetailsPermissionsData}
      />
    </div>
  );
};