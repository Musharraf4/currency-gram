import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { MainCard } from "../../../templates/main-card/main-card";
import { sendMoneyCardsFunction } from "./send-money-data";

export const SendMoney = () => {
  const navigate = useNavigate();
  const sendMoneyCards = sendMoneyCardsFunction(navigate);
  const { bannerHeading, pageName } = useAppLayout();

  useEffect(() => {
    bannerHeading("Send Money");
    pageName("Send Money");
  }, []);

  return (
    <>
      <MainCard primaryCardData={sendMoneyCards} mainDivClassName="pt-24 pb-24 pl-4 pr-4" />
    </>
  );
};
