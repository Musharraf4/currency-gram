import { DynamicTabPanelTemplate } from "../../../templates/dynamic-tab-panel-template/dynamic-tab-panel-template";
import { useAccountSettings } from "./use-account-settings";

export const AccountSettings = () => {
  const { selectedCard, setSelectedCard, accountSettingData, renderComponent } =
    useAccountSettings();
  return (
    <DynamicTabPanelTemplate
      tabCardData={accountSettingData}
      activeCard={selectedCard}
      componentToShown={renderComponent?.(selectedCard)}
    />
  );
};
