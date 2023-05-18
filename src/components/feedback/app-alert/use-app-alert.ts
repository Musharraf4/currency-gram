import { useEffect } from "react";
import { hideAlertMessage, showAlertMessage } from "../../../store/alert/alert-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

export const useAppAlert = () => {
  const { alert } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      dispatch(hideAlertMessage());
    }, 3000);
    return () => clearTimeout(alertTimer);
  }, [dispatch]);

  const closeAlert = () => dispatch(hideAlertMessage());

  const openAlert = (alertMessage: string, alertType: any = "error", showIcon: boolean = true) =>
    dispatch(
      showAlertMessage<any>({
        alertMessage,
        alertType,
        showIcon,
      })
    );

  return { openAlert, alert, closeAlert };
};
