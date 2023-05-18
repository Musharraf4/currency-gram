import { requestsPermissions } from "./requests-activitity-data";
import TeamsActivityPermissionTemplate from "../../../../templates/teams-activity-permission/teams-activity-permission";

export const RequestsActivity = () => {
  const requestsPermissionsData = requestsPermissions();
  return (
    <div className="mx-2">
      <TeamsActivityPermissionTemplate
        heading="Requests"
        subHeadingParagraph="Manage who can see and change settings for requests belonging to other team members"
        cardHeading="Additional Information"
        description="Account Holder are only able to review accounts if they have permission to do so"
        accountsPermissionData={requestsPermissionsData}
      />
    </div>
  );
};