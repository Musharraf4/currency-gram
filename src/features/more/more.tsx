import { useNavigate } from "react-router-dom";
import { moreCards2Data, moreCardsData } from "./more-data";
import { MainCard } from "../../templates/main-card/main-card";
import { useEffect } from "react";
import { useAppSelector } from "../../store/store";
import { USERROLES } from "../../constants/roles-constant";
import { useAppLayout } from "../../hooks/use-app-layout";

export const More = () => {
  const navigate = useNavigate();
  const moreCards = moreCardsData(navigate);
  const moreCards2 = moreCards2Data(navigate);
  const { bannerHeading, pageName } = useAppLayout();

  useEffect(() => {
    bannerHeading("Help Squad");
    pageName("More Options");
  }, []);
  const { auth } = useAppSelector((state) => state);
  return (
    <MainCard
      primaryCardData={auth.role.includes(USERROLES.ROLEPRIORITY2) ? moreCards : moreCards2}
      mainDivClassName="min-h-[70vh]"
      rowClassName="pt-8 sm:pt-20 px-4"
    />
  );
};
