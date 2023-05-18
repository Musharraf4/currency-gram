import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CARDSETTINGSDATA } from './card-settings-data'
import { CARDSETTINGIMAGES } from "./card-settings-images";
import { CardSettingsTemplate } from "../../../templates/card-settings/card-settings";
import { CARDSETTINGIMPORTS } from "./card-settings-imports";
import { physicalCardArrayFunction, physicalCreditCardButtonFunction } from "./card-settings-data";
import { AppVerifyPinModal } from "../../../components/modals/app-verify-pin-modal/app-verify-pin-modal";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";

export const PhysicalCardSettings = (props: any) => {
  const navigate = useNavigate();
  const { isActive, setIsActive, } = props;
  const [getPin, setGetPin] = useState<any>();
  const [setGetChangePin] = useState<any>();
  const [physicalFreeze, setPhysicalFreeze] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [isPinOpen, setIsPinOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isChnagePin, setIsChnagePin] = useState(false);
  const [hideText, setHideText] = useState(false);


  const physicalCardArray = physicalCardArrayFunction(setIsOtpOpen, navigate, setShowCard, setIsChnagePin);
  const physicalCardSettingsButton = physicalCreditCardButtonFunction(setPhysicalFreeze, setHideText, hideText);
  const ReportIssueCard = CARDSETTINGSDATA.ReportIssueCardFunction(navigate);

  const onConfirmOTP = (e: any) => {
    setIsPinOpen(true)
    setIsOtpOpen?.(false)
  };

  return (
    <>
      <CardSettingsTemplate
        isActive={isActive}
        creditCardSrc={CARDSETTINGIMAGES.creditCard}
        primaryCardData={ReportIssueCard}
        setIsActive={setIsActive}
        creditCardUser="Physical Card User"
        creditCardUserExpDate="05/25"
        creditCardUserNumber="5460 9700 0001 3245"
        cardSettingArray={physicalCardArray}
        buttonsData={physicalCardSettingsButton}
        showCard={showCard}
        isFreeze={physicalFreeze}
        setIsFreeze={setPhysicalFreeze}
        hideText={hideText}
      />
      {isOtpOpen && (
        <AppVerifyOtpInputModal
          isModalOpen={isOtpOpen}
          handleOk={() => setIsOtpOpen?.(false)}
          handleCancel={() => setIsOtpOpen?.(false)}
          sendOTP={(e: any, OTP: any) => {
            onConfirmOTP?.(e);
            setGetPin(OTP)
          }}
        />
      )}
      {isPinOpen && (
        <AppVerifyPinModal
          getPin={getPin}
          isModalOpen={isPinOpen}
          handleOk={() => setIsPinOpen?.(false)}
          handleCancel={() => setIsPinOpen?.(false)}
          pinModalIcon={CARDSETTINGIMAGES.pinIcon}
          sendPin={(e: any) => setIsPinOpen?.(false)}
          isDisabled
        />
      )}
      {isChnagePin && (
        <AppVerifyOtpInputModal
          isModalOpen={isChnagePin}
          handleOk={() => setIsChnagePin?.(false)}
          handleCancel={() => setIsChnagePin?.(false)}
          pinModalIcon={CARDSETTINGIMAGES.pinIcon}
          sendOTP={(e: any, OTP: any) => {
            // onConfirmPIN?.(e);
            setGetChangePin(OTP)
            navigate(`${CARDSETTINGIMPORTS.CARDSPATH}${CARDSETTINGIMPORTS.SLASHPATH}${CARDSETTINGIMPORTS.CHANGECARDPINPATH}`)
          }}
        />
      )}
    </>
  );
};
