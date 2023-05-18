import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { AppTitle } from "../../data-display/app-title/app-title";
import { ReloadOutlined } from "@ant-design/icons";
export const AppVerifyPinModal = (props: any) => {
    const { isModalOpen, handleOk, handleCancel, sendPin, pinModalIcon, getPin, isDisabled } = props;
    console.log(props);

    const [Pin, setPin] = useState(getPin);
    const [isHidepin, setIsHidepin] = useState(false);
    const [second, setISecond] = useState<number>(6);

    function handleChange(Pin: any) {
        setPin(Pin);
    }
    useEffect(() => {
        const minusSecond =
            setTimeout(() =>
                second === 0 ? null : setISecond(second - 1)
                , 1000);
        return () => clearTimeout(minusSecond)
    }, [second])

    useEffect(() => {
        const hidePinFun =
            setTimeout(() =>
                setIsHidepin(true)
                , 6000);
        return () => clearTimeout(hidePinFun)
    }, [isHidepin])
    console.log(second === 0);

    return (
        <>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                centered
                width="300px">
                <div className="verifyDiv text-center">
                    <div>
                        <img src={pinModalIcon} alt="" />
                    </div>
                    <AppTitle
                        className="text-primary-text text-sm font-medium  my-8"
                        title="PIN for Card Ending 3245"
                    />
                    <div className="pinElements">
                        <div className="pin">
                            <OTPInput
                                onChange={handleChange}
                                value={Pin}
                                inputStyle="inputStyle"
                                className="mx-auto"
                                numInputs={4}
                                separator={"  "}
                                isInputSecure={isHidepin}
                                isDisabled={isDisabled}
                            />
                        </div>

                        {second ?
                            (
                                <AppTitle className="text-primary-text text-sm font-medium mt-4"
                                    title={`Your PIN will be hidden in ${second} seconds`}
                                />
                            ) : (
                                <div className="flex justify-center mt-4" onClick={() => {
                                    setIsHidepin(false);
                                    setISecond(6)
                                }}>
                                    <ReloadOutlined className="text-primary mr-4" />
                                    <AppTitle className="text-primary text-sm font-medium"
                                        title="Show again"
                                    />
                                </div>
                            )
                        }
                    </div>
                    <div>

                    </div>
                    <div className="mt-10">
                        <Button
                            type="primary"
                            onClick={(e: any) => sendPin?.(e)}
                            block
                            disabled={second !== 0}
                        >
                            <AppTitle className="" title="Got It" />
                        </Button>
                        {/* <Button type="text" block className="text-primary mt-2">
                            <AppTitle className="" title="Re-send pin" />
                        </Button> */}
                    </div>
                </div>
            </Modal>
        </>
    )
}
