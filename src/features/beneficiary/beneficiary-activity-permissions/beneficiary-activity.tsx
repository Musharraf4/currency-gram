import TeamsActivityPermissionTemplate from "../../../templates/teams-activity-permission/teams-activity-permission";
import { beneficiaryPermissionsFunction } from "./beneficiary-activitity-data";

export const BeneficiaryActivity = () => {
  const beneficiaryPermissionsData = beneficiaryPermissionsFunction();
  return (
    <div className="mx-2">
      <TeamsActivityPermissionTemplate
        heading="Requests"
        cardHeading="Additional Information"
        description="Account Holder are only able to review accounts if they have permission to do so"
        subHeadingParagraph="Manage who can see and change settings for requests belonging to other team members"
        accountsPermissionData={beneficiaryPermissionsData}
      />
    </div>
  );
};
