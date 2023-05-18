import { useState } from "react";
import { AppTitle } from "../../data-display/app-title/app-title";
import { Button } from "antd";
import { AppModal } from "../../modals/app-modal/app-modal";
import dangerIcon from "../../../assets/icons/danger-icon.svg"
import { AppVerifyOtpInputModal } from "../../modals/app-verify-otp-modal/app-verify-otp-modal";

export const AppCreditCard = (props: any) => {
  const {
    isFreeze,
    setIsFreeze,
    creditCardSrc,
    creditCardMainDetailClass,
    creditCardMainImagelClass,
    creditCardUserClassName,
    creditCardUserDateClassName,
    creditCardUserAccountNumberClass,
    buttons,
    creditCardImageClass,
    creditCardUser,
    creditCardUserExpDate,
    creditCardUserNumber,
    btnMainDivClassName,
    hideText
  } = props;
  // const physicalCardSettingsButton = physicalCreditCardButtonFunction(setIsFreeze);

  const [freezOTP, setFreezOTP] = useState(false);
  const onContinueFreez = (e: any) => {
    console.log(e);
    setIsFreeze?.(false)
    setFreezOTP(true)
  };

  const onConfirmFreezOTP = (e: any) => {
    setFreezOTP?.(false)
  }
  // const hideText: any = ''
  return (
    <div className={creditCardMainDetailClass}>
      <div className={creditCardMainImagelClass}>
        <img src={creditCardSrc} className={creditCardImageClass} />
        {
          <>
            {/* <div className={`${hideText === 'hide'} backdrop: blur(4px)`}> */}

            {hideText && <><AppTitle title={creditCardUser} Variant="span" className={creditCardUserClassName} />

              <AppTitle title={creditCardUserExpDate} Variant="span" className={creditCardUserDateClassName} />
              <AppTitle title={creditCardUserNumber} className={creditCardUserAccountNumberClass} /></>
            }
            {/* </div> */}
          </>
        }
      </div>
      <div className={btnMainDivClassName}>
        {!!buttons?.length &&
          buttons?.map?.((x: any) => (
            <Button
              size={x?.size}
              className={x?.className}
              disabled={x?.disabled}
              icon={x?.icon}
              type={x?.type}
              ghost={x?.ghost}
              onClick={(e: any) => {
                x?.btnLink?.(e);
              }}>
              <AppTitle title={x?.btnText} className={x?.btnClassName} Variant={x?.btnVariant} />
            </Button>
          ))}
      </div>
      {isFreeze && (
        <AppModal
          isModalOpen={isFreeze}
          handleOk={() => setIsFreeze?.(false)}
          submitBtnFunction={(e: any) => onContinueFreez?.(e)}
          handleCancel={() => setIsFreeze?.(false)}
          heading="Freezing this account will block your card. You can unfreeze it anytime"
          avatarSize={70}
          src={dangerIcon}
          firstButtonText="Continue"
          secondButtonText="Cancel"
        />
      )}
      {freezOTP && (
        <AppVerifyOtpInputModal
          isModalOpen={freezOTP}
          handleOk={() => setFreezOTP?.(false)}
          handleCancel={() => setFreezOTP?.(false)}
          sendOTP={(e: any, OTP: any) => {
            onConfirmFreezOTP?.(e);
          }}
        />
      )}
    </div>
  );
};
