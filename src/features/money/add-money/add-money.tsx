import { AddMoneyUsingBankTransfer } from "./add-money-using-bank-transfer";
import { useEffect, useState } from "react";
import { AddMoneyUsingSharedLink } from "./add-money-using-shared-link";
import { AddMoneyUsingCard } from "./add-money-using-card";
import { DynamicTabPanelTemplate } from "../../../templates/dynamic-tab-panel-template/dynamic-tab-panel-template";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { ADDMONEYDATA } from "./add-money-data";

export const AddMoney = () => {
  const [selectedCard, setSelectedCard] = useState<string>("Bank Transfer");
  const addMoneyData = ADDMONEYDATA.addMoneyDataFunction(setSelectedCard);
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading(selectedCard);
    pageName("Add Money");
  }, [selectedCard]);

  const go: any = {
    "Bank Transfer": <AddMoneyUsingBankTransfer />,
    "Debit / Credit Card": <AddMoneyUsingCard />,
    "By Sharing Link": <AddMoneyUsingSharedLink />,
  };
  const renderComponent = (selected: any) => {
    return go?.[selected];
  };
  return (
    <DynamicTabPanelTemplate
      tabCardData={addMoneyData}
      activeCard={selectedCard}
      mainDivClassName="min-h-[70vh]"
      componentToShown={renderComponent?.(selectedCard)}
    />
  );
};
