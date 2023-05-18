import { Button, Modal } from "antd";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { AppTitle } from "../../data-display/app-title/app-title";
import "./app-verify-otp-modal.scss";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
export const AppVerifyOtpInputModal = (props: any) => {
  const { isModalOpen, handleOk, handleCancel, sendOTP } = props;
  console.log(props);

  const [OTP, setOTP] = useState("");

  function handleChange(OTP: any) {
    setOTP(OTP);
    console.log(OTP);
  }
  // const sendOTP = () => {
  //   console.log(OTP);
  // };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
        width="300px"
      >
        <div className="verifyDiv text-center">
          <Button shape="circle" size="large" className="bg-secondary-background mt-5">
            <ICONSCONSTANT.LockOutlined className="primary-heading" />
          </Button>
          <AppTitle
            className="text-primary-text text-sm font-medium  my-8"
            title="Enter the 4 Digit OTP sent on you Phone"
          />
          <div className="otpElements">
            <div className="otp">
              <OTPInput
                // numInputs="text"
                onChange={handleChange}
                value={OTP}
                inputStyle="inputStyle"
                className="mx-auto"
                numInputs={4}
                separator={"  "}
              />
            </div>
          </div>
          <div className="mt-10">
            <Button
              type="primary"
              onClick={(e: any) => sendOTP?.(e, OTP)}
              block
              disabled={OTP?.length < 4}
            >
              <AppTitle className="" title="Proceed" />
            </Button>

            <Button type="text" block className="text-primary mt-2">
              <AppTitle className="" title="Re-send pin" />
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
