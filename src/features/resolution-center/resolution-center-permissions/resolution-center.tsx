import TeamsActivityPermissionTemplate from "../../../templates/teams-activity-permission/teams-activity-permission";
import { resolutionPermissionsFunction } from "./resolution-activitity-data";

export const ResolutionCenter = () => {
  const resolutionPermissionsData = resolutionPermissionsFunction();
  return (
    <div className="mx-2">
      <TeamsActivityPermissionTemplate
        heading="Resolution center"
        cardHeading="Additional Information"
        description="Account Holder are only able to review Resolution center if they have permission to do so"
        subHeadingParagraph="Manage who can see and change settings for resolution center belonging to other team members"
        accountsPermissionData={resolutionPermissionsData}
      />
    </div>
  );
};
