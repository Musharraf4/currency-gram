import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BusinessCard } from "./business-card";
import { CARDDATA } from "../card/card-data";
import { useAppSelector } from "../../../store/store";
import { CARDIMPORT } from "./card-imports";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { RequestCard } from "../../../templates/request-card/request-card";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";

export const Card = () => {
  const navigate = useNavigate();
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Request a card");
    pageName("Cards")
  }, []);
  const [isActive, setIsActive] = useState('Virtual card');
  const RequesteCardArray = CARDDATA.RequesteCardFunction(navigate, setIsActive);
  const { auth } = useAppSelector((state) => state);

  return (
    <>
      {!auth.role.includes(CARDIMPORT.USERROLES.ROLEPRIORITY2) &&
        <AppCardWhite cardClassName="px-14 py-16 -mt-16">
          {
            RequesteCardArray.map((item: any) => (
              <RequestCard
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
                icon={item.icon}
                data={item.data}
                textAndButtonTitle={item.title}
                textAndButtonText={item.btnText}
                btnLink={item.btnLink}
                textAndButtontype="primary"
              />
            ))}
        </AppCardWhite>
      }
      {auth.role.includes(CARDIMPORT.USERROLES.ROLEPRIORITY2) &&
        <BusinessCard />
      }
    </>
  );
};
