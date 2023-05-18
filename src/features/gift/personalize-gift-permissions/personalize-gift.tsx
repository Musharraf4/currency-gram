import { personalizePermissionsFunction } from "./personalize-activitity-data";
import TeamsActivityPermissionTemplate from "../../../templates/teams-activity-permission/teams-activity-permission";

export const PersonalizeGift = () => {
  const personalizePermissionsData = personalizePermissionsFunction();
  return (
    <div className="mx-2">
      <TeamsActivityPermissionTemplate
        heading="Personalized gifts"
        subHeadingParagraph="Manage who can see and change settings for personalized gifts belonging to other team members"
        cardHeading="Additional Information"
        description="Account Holder are only able to review Personalized gifts details if they have permission to do so"
        accountsPermissionData={personalizePermissionsData}
      />
    </div>
  );
};