import { useNavigate } from "react-router-dom";
import { MainCard } from "../../templates/main-card/main-card";
import { helpCardsData } from "./help-data";

export const Help = () => {
  const navigate = useNavigate();
  const helpCards = helpCardsData(navigate);
  return (
    <MainCard
      primaryCardData={helpCards}
      mainDivClassName="min-h-[70vh]"
      rowClassName="pt-8 sm:pt-20 px-4"
    />
  );
};
