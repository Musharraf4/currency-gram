import { useEffect, useState } from "react";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { DynamicTabPanelTemplate } from "../../../templates/dynamic-tab-panel-template/dynamic-tab-panel-template";
import { ChangeEmail } from "../../authentication/change-email/change-email";
import { ChangePassword } from "../../authentication/change-password/change-password";
import { TwoFactorAuthentication } from "../../authentication/two-factor-authentication/two-factor-authentication";
import { NotificationsSettings } from "../../notifications/notifications-settings/notifications-settings";
import { CloseAccount } from "../../security/close-account/close-account";
import { ConnectedServices } from "../../security/connected-services/connected-services";
import { LoginActivity } from "../../security/login-activity/login-activity";
import { PrivacyPolicy } from "../../security/privacy-policy/privacy-policy";
import { accountSettingDataFunction } from "./account-settings-data";

export const useAccountSettings = () => {
  const [selectedCard, setSelectedCard] = useState("Notifications");
  const [TFAStatus, setTFAStatus] = useState("ON");
  const accountSettingData = accountSettingDataFunction(TFAStatus, setSelectedCard);
  const { bannerHeading, pageName } = useAppLayout();
  const go: any = {
    Notifications: <NotificationsSettings />,
    "Change Password": <ChangePassword />,
    "Email Settings": <ChangeEmail />,
    "Connected Services": <ConnectedServices />,
    "Login Activity": <LoginActivity />,
    "Privacy Policy": <PrivacyPolicy />,
    "Two Factor Authentication": <TwoFactorAuthentication />,
    "Close Account": <CloseAccount />,
  };
  const renderComponent = (selected: any) => {
    // console.log(selected);
    return go?.[selected];
  };
  useEffect(() => {
    bannerHeading("Settings");
    pageName("Privacy & Security");
  }, []);
  return {
    selectedCard,
    setSelectedCard,
    accountSettingData,
    renderComponent,
  };
};
