import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { getGiftDetails } from "../../../store/gift/gift-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { GiftDetailsFormTemplate } from "../../../templates/gift-details-form/gift-details-form";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { AppGiftPopover } from "../../../components/data-display/app-gift-popover/app-gift-popover";
import { GIFTDETAILIMPORTS } from "./gift-detail-imports";
import { GIFTDETAILDATA } from "./gift-detail-data";

export const AddGiftDetail = () => {
  const { bannerHeading, pageName } = useAppLayout();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [prevPayMethod, setPrevPayMethod] = useState("Euro");
  const [selectedPayMethod, setSelectedPayMethod] = useState("GBP");
  const changePayMethod = (prevPayMethod: any, selectedPayMethod: any) => {
    setSelectedPayMethod(prevPayMethod);
    setPrevPayMethod(selectedPayMethod);
  };
  const giftDetailsFields = GIFTDETAILDATA.giftDetailsFieldsFuntion(
    prevPayMethod,
    selectedPayMethod,
    changePayMethod
  );
  const { giftDetails } = useAppSelector((state) => state.gift);
  useEffect(() => {
    bannerHeading("Gift Details");
    pageName("Personalized gifts");
  }, []);
  const onFinish = (e: any) => {
    navigate(
      `${GIFTDETAILIMPORTS.MOREPATH}${GIFTDETAILIMPORTS.SLASHPATH}${GIFTDETAILIMPORTS.SELECTGIFTRECIPIENTPATH}`
    );
    dispatch(getGiftDetails({ amount: e?.amount, message: e?.message, ...giftDetails }));
  };

  return (
    <AppCardWhite>
      <GiftDetailsFormTemplate
        popOverContent={AppGiftPopover}
        giftDetailsFields={giftDetailsFields}
        onFinish={onFinish}
        text1={`Total balance`}
        text2={`:6371.3 GBP `}
        text3={`Available`}
        text4={`:6371.3 GBP`}
      />
    </AppCardWhite>
  );
};
