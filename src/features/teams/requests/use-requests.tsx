import { useEffect, useState } from "react";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useNavigate } from "react-router-dom";
import { MOREPATH, REQUESTSPATH, SLASHPATH } from "../../../constants/routes-constant";
import { requestPendingFunction, requestsButtonFunction } from "./requests-data";
import { useAppLayout } from "../../../hooks/use-app-layout";

export const useRequests = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const navigate = useNavigate();
  const { openAlert } = useAppAlert();
  const { bannerHeading, pageName } = useAppLayout();

  useEffect(() => {
    bannerHeading("Approval Requests");
    pageName("Approval Requests");
  }, []);

  const scenerioToggle = (e: any, scenerio: any) => {
    console.log(e);
    e.stopPropagation();
  };
  const onConfirm = (e: any) => {
    console.log("confirm", e);
  };
  const onConfirmOTP = (e: any) => {
    // dispatch(changeEmailThunk({ body, navigate, axiosInstance, openAlert }));
    // openAlert("Email Change Successfully", "success");
    setIsOtpOpen(false);
  };
  const onRowClick = () => {
    navigate(`${MOREPATH}${SLASHPATH}${REQUESTSPATH}${SLASHPATH}345`);
  };
  const requestPending = requestPendingFunction();
  const requestsButton = requestsButtonFunction(scenerioToggle);
  return {
    scenerioToggle,
    isApproved,
    setIsApproved,
    onConfirm,
    onConfirmOTP,
    isOtpOpen,
    setIsOtpOpen,
    onRowClick,
    requestPending,
    requestsButton,
  };
};
