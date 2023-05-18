import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CARDSETTINGSDATA } from "./card-settings-data";
import { CARDSETTINGIMAGES } from "./card-settings-images";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { AppVerifyOtpInputModal } from "../../../components/modals/app-verify-otp-modal/app-verify-otp-modal";
import { CardSettingsTemplate } from "../../../templates/card-settings/card-settings";

export const VirtualCardSettings = (props: any) => {
  const navigate = useNavigate();
  const { setIsActive, isActive, onCardClick } = props
  const [isAdded, setIsAdded] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [virtualFreeze, setVirtualFreeze] = useState(false);
  const [hideText, setHideText] = useState(false);

  const VirtualCardArray = CARDSETTINGSDATA.virtualCardArrayFunction(navigate)
  const virtualCardSettingsButton = CARDSETTINGSDATA.virtualCreditCardButtonFunction(setVirtualFreeze, setHideText, hideText);


  const onContinueFreez = (e: any) => {
    console.log(e);
    setIsOtpOpen(true)
    setIsAdded(false)
  };
  return (
    <>
      <CardSettingsTemplate
        isActive={isActive}
        setIsActive={setIsActive}
        creditCardSrc={CARDSETTINGIMAGES.creditCard}
        creditCardUser="Virtual Card User"
        creditCardUserExpDate="06/24"
        creditCardUserNumber="5460 9700 0001 3245"
        cardSettingArray={VirtualCardArray}
        buttonsData={virtualCardSettingsButton}
        onCardClick={onCardClick}
        isFreeze={virtualFreeze}
        setIsFreeze={setVirtualFreeze}
        hideText={hideText}
      />
      {isAdded && (
        <AppModal
          isModalOpen={isAdded}
          handleOk={() => setIsAdded?.(false)}
          submitBtnFunction={(e: any) => onContinueFreez?.(e)}
          handleCancel={() => setIsAdded?.(false)}
          heading="Freezing this account will block your card. You can unfreeze it anytime"
          avatarSize={70}
          src={CARDSETTINGIMAGES.dangerIcon}
          firstButtonText="Continue"
          secondButtonText="Cancel"
        />
      )}
      {isOtpOpen && (
        <AppVerifyOtpInputModal
          isModalOpen={isOtpOpen}
          handleOk={() => setIsOtpOpen?.(false)}
          handleCancel={() => setIsOtpOpen?.(false)}
        // sendOTP={(e: any) => onConfirmOTP?.(e)}
        />
      )}
    </>
  );
};
