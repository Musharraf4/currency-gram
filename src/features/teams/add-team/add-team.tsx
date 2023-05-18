import { useEffect, useState } from "react";
import {
  RequestPhysicalFormFieldsInputFunction,
  treeData,
} from "./add-team-data";
import { useNavigate } from "react-router-dom";
import { AddTeamTemplate } from "../../../templates/add-team/add-team";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { ADDTEAMIMPORTS } from "./add-team-imports";

export const AddTeam = () => {
  const SendInviteFormFieldsInput = RequestPhysicalFormFieldsInputFunction();
  const [banner, setBanner] = useState("Choose Role");
  const [sendInvite, setSendInvite] = useState(false);

  const navigate = useNavigate();
  const { bannerHeading, pageName } = useAppLayout();
  const { openAlert } = useAppAlert();

  useEffect(() => {
    bannerHeading(banner);
    pageName("Team Management");
  }, [banner]);

  const sendInviteHandler = (value: string) => {
    // console.log(value);

    switch (value) {
      case "viewer":
      case "preparer":
      case "payer":
      case "admin":
        setSendInvite(true);
        setBanner(value);
        break;

      default:
        navigate(
          `${ADDTEAMIMPORTS.SLASHPATH}${ADDTEAMIMPORTS.TEAMSMANAGEMENTPATH}${ADDTEAMIMPORTS.SLASHPATH}${ADDTEAMIMPORTS.TEAMROLEDETAILSPARAM}${ADDTEAMIMPORTS.SLASHPATH}${value}`
        );
    }
  };

  const onFinish = (e: any) => {
    console.log(e);
    openAlert(`Invite send to ${e?.email}`, "success");
  };
  const onFinishFailed = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <AddTeamTemplate
        treeData={treeData}
        sendInviteHandler={sendInviteHandler}
        sendInvite={sendInvite}
        SendInviteFormFieldsInput={SendInviteFormFieldsInput}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      />
    </>
  );
};
