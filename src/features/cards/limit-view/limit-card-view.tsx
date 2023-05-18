import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LIMITVIEWDATA } from "./limit-view-data";
import { useAppSelector } from "../../../store/store";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { USERROLES } from "../../../constants/roles-constant";
import { MainCard } from "../../../templates/main-card/main-card";
import { LimitCardViewTemplate } from "../../../templates/limit-card-view/limit-card-view";
import { CARDTYPEPARAMSCONSTANTS, PERSONALTEAMSPARAMSCONSTANT } from "../../../constants/params-constant";
import { CARDSPATH, INCREASELIMITVIEWPARAM, SLASHPATH, UPSERTLIMITPARAM } from "../../../constants/routes-constant";

export const CardLimitView = () => {
  const navigate = useNavigate();
  const [isCard, setIsCard] = useState("Personal card")
  const { bannerHeading, pageName } = useAppLayout();
  const cardSettingCard = LIMITVIEWDATA.cardSettingCardFunction(setIsCard);
  const { auth } = useAppSelector((state) => state);
  useEffect(() => {
    bannerHeading("Set Limits");
    pageName("Cards")
  }, [bannerHeading, pageName]);

  const { cardType } = useParams()
  console.log(cardType)

  const navigateFunction = (path: string) => {
    navigate(path);
  }

  return (
    <>
      {auth.role.includes(USERROLES.ROLEPRIORITY2) &&
        <>
          {/* business */}
          <MainCard primaryCardData={cardSettingCard} mainDivClassName="pt-8 pl-4 pr-4" activeCard={isCard} />
          {cardType === 'physical' && <LimitCardViewTemplate
            LimitCardViewTemplateArray={isCard === 'Personal card' ? LIMITVIEWDATA.personalCardLimitViewArray : LIMITVIEWDATA.teamCardLimitViewArray}
            textAndButtonText={"Request"}
            textAndButtonTitle={'Personal'}
            hideAppandTextButton={isCard === 'Personal card' ? false : true}
            btnLink={() => navigateFunction(`${CARDSPATH}${SLASHPATH}${INCREASELIMITVIEWPARAM}${SLASHPATH}${PERSONALTEAMSPARAMSCONSTANT.personal}`)}
            editFunction={() => navigateFunction(`${CARDSPATH}${SLASHPATH}${UPSERTLIMITPARAM}${SLASHPATH}${CARDTYPEPARAMSCONSTANTS.physical}`)}
            xs={24} md={12} lg={12}
          />}
          {cardType === 'virtual' && <LimitCardViewTemplate
            LimitCardViewTemplateArray={isCard === 'Personal card' ? LIMITVIEWDATA.personalCardLimitViewArray : LIMITVIEWDATA.teamCardLimitViewArray}
            textAndButtonText={"Request"}
            textAndButtonTitle={'Personal'}
            hideAppandTextButton={isCard === 'Personal card' ? false : true}
            btnLink={() => navigateFunction(`${CARDSPATH}${SLASHPATH}${INCREASELIMITVIEWPARAM}${SLASHPATH}${PERSONALTEAMSPARAMSCONSTANT.personal}`)}
            editFunction={() => navigateFunction(`${CARDSPATH}${SLASHPATH}${UPSERTLIMITPARAM}${SLASHPATH}${CARDTYPEPARAMSCONSTANTS.virtual}`)}
            xs={24} md={12} lg={12}
          />}
        </>}

      {/*  Personal */}
      {!auth.role.includes(USERROLES.ROLEPRIORITY2) &&
        <>
          {cardType === 'physical' && <LimitCardViewTemplate
            LimitCardViewTemplateArray={LIMITVIEWDATA.physicalCardLimitViewArray}
            textAndButtonTitle="Physical"
            textAndButtonText="Request"
            xs={24} md={12} lg={12}
            btnLink={() => navigateFunction(`${CARDSPATH}${SLASHPATH}${INCREASELIMITVIEWPARAM}${SLASHPATH}${CARDTYPEPARAMSCONSTANTS.physical}`)}
            editFunction={() => navigateFunction(`${CARDSPATH}${SLASHPATH}${UPSERTLIMITPARAM}${SLASHPATH}${CARDTYPEPARAMSCONSTANTS.physical}`)}
          />}
          {cardType === 'virtual' && <LimitCardViewTemplate
            LimitCardViewTemplateArray={LIMITVIEWDATA.virtualCardLimitViewArray}
            textAndButtonText="Request"
            textAndButtonTitle="Virtual"
            btnLink={() => navigateFunction(`${CARDSPATH}${SLASHPATH}${INCREASELIMITVIEWPARAM}${SLASHPATH}${CARDTYPEPARAMSCONSTANTS.virtual}`)}
            editFunction={() => navigateFunction(`${CARDSPATH}${SLASHPATH}${UPSERTLIMITPARAM}${SLASHPATH}${CARDTYPEPARAMSCONSTANTS.virtual}`)}
            xs={24} md={12} lg={12}
          />}

        </>}

    </>
  );
};
