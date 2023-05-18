import { useNavigate } from "react-router-dom";
import { treeData } from "./reassign-role-data";
import { ReassignRoleTemplate } from "../../../templates/reassign-role/reassign-role";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { useEffect } from "react";
import { REASSIGNROLEIMPORT } from "./reassign-role-imports";

export const ReassignRole = () => {
  const navigate = useNavigate();
  const { bannerHeading, pageName } = useAppLayout();
  const sendInviteHandler = (value: string) => {
    console.log(value);
    switch (value) {
      case "Admin":
      case "Preparer":
      case "Payer":
        navigate(
          `${REASSIGNROLEIMPORT.SLASHPATH}${REASSIGNROLEIMPORT.TEAMSMANAGEMENTPATH}${REASSIGNROLEIMPORT.SLASHPATH}${REASSIGNROLEIMPORT.TEAMROLEDETAILSPARAM}${REASSIGNROLEIMPORT.SLASHPATH}${value}`
        );
        break;
    }
  };

  useEffect(() => {
    bannerHeading("Choose Role");
    pageName("Team Management");
  }, []);
  return (
    <div>
      <ReassignRoleTemplate
        avatarChildren="US"
        heading="Usman Saeed"
        description="usman.saeed@ceative.co.uk"
        treeData={treeData}
        sendInviteHandler={sendInviteHandler}
      />
    </div>
  );
};
