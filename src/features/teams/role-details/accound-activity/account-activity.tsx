import { accountsPermissionSwitch } from "./account-activity-data";
import TeamsActivityPermissionTemplate from "../../../../templates/teams-activity-permission/teams-activity-permission";

export const AccountActivity = () => {
  const accountsPermissionData = accountsPermissionSwitch();
  return (
    <div className="mx-2">
      <TeamsActivityPermissionTemplate
        heading="Account Activity"
        subHeadingParagraph="Manage who can see and change settings of accounts"
        cardHeading="Additional Information"
        description="Account Holder are only able to review accounts if they have permission to do so"
        accountsPermissionData={accountsPermissionData}
      />
    </div>
  );
};
