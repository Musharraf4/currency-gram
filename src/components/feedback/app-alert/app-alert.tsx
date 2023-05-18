import "./app-alert.scss";
import { useAppAlert } from "./use-app-alert";
import { Alert } from "antd";

export const AppAlert = () => {
  const { alert } = useAppAlert();

  return (
    <>
      <Alert
        message={alert?.alertMessage}
        type={alert?.alertType}
        showIcon={alert?.showIcon}
        className="mt-1 mb-1 p-1 md:p-3 w-full md:w-1/2 mx-auto"
      />
    </>
  );
};
