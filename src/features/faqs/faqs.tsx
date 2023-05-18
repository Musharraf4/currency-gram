import { SetStateAction, useEffect, useState } from "react";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { useAppLayout } from "../../hooks/use-app-layout";
import { FAQDetailsTemplate } from "../../templates/faq-details-template/faq-details-template";
import { faqAccordianData } from "./faqs-data";
import "../../components/app-banner/app-banner.scss";

export const FAQs = () => {
  const { bannerHeading, pageName } = useAppLayout();
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    bannerHeading("FAQS");
    pageName("Home");
  }, []);
  const filterSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
  };
  return (
    <AppCardWhite cardClassName="min-h-[70vh] app-banner-bg-image">
      <FAQDetailsTemplate
        mainHeading={"Hi, how can we help you today?"}
        accordianData={faqAccordianData}
        searchValue={searchValue}
        filterSearch={filterSearch}
      />
    </AppCardWhite>
  );
};
