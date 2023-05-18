import { teamsPermissionsFunction } from "./teams-activitity-data";
import TeamsActivityPermissionTemplate from "../../../../templates/teams-activity-permission/teams-activity-permission";

export const TeamsManagement = () => {
  const teamsPermissionsData = teamsPermissionsFunction();
  return (
    <div className="mx-2">
      <TeamsActivityPermissionTemplate
        heading="Teams"
        cardHeading="Additional Information"
        description="Account Holder are only able to review accounts if they have permission to do so"
        subHeadingParagraph="Manage who can see and change settings for requests belonging to other team members"
        accountsPermissionData={teamsPermissionsData}
      />
    </div>
  );
};