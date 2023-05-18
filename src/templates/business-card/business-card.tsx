import { MainCard } from "../main-card/main-card";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { RequestSubmitTemplate } from "../request-submit/request-submit";

export const BusinessCardTemplate = (props: any) => {

  const { businessCardSrc, buttons, primaryCardData } = props;

  return (
    <>
      <MainCard primaryCardData={primaryCardData} mainDivClassName="pt-8 pl-4 pr-4" />
      <AppCardWhite cardClassName="px-14 py-16 mt-6">
        <RequestSubmitTemplate
          buttons={buttons}
          imgSrc={businessCardSrc}
          RequestSubmitImageClass="sm:w-48"
          RequestSubmitDividerClass="hidden"
          RequestSubmitTemplateMainDivClass="text-center"
          discription="No team card added or requested"
        />
      </AppCardWhite>
    </>
  );
};
