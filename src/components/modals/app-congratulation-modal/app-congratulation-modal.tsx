import { Button, Modal, Image } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";

export const AppCongratulationModal = (props: any) => {
  const {
    isModalOpen,
    handleOk,
    handleCancel,
    submitBtnFunction,
    heading,
    firstButtonText,
    submitBtnClassName,
    modalWidth,
    subHeading,
    headingClassName,
    subHeadingClassName,
    midButtonText,
    btnWrapperClassName,
    closable,
    closeIcon,
    src,
  } = props;
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
        closable={closable ?? true}
        width={modalWidth || "350px"}
        closeIcon={closeIcon}>
        <div>
          <div className="text-center mt-8">
            {!!heading && (
              <AppTitle
                className={`text-center text-primary-text my-3 font-bold text-3xl ${headingClassName}`}
                title={heading}
              />
            )}
            {!!subHeading && (
              <AppTitle
                className={`text-sm text-center font-semibold text-primary-text w-full max-w-sm mx-auto ${subHeadingClassName}`}
                title={subHeading}
              />
            )}
            <div className={`mt-8 ${btnWrapperClassName}`}>
              {!!firstButtonText && (
                <Button
                  htmlType="submit"
                  className={`bg-primary text-white w-48  ${!!!midButtonText}"
                                        } mb-3 ${submitBtnClassName}`}
                  onClick={(e: any) => submitBtnFunction?.(e)}
                  size={"large"}>
                  <AppTitle title={firstButtonText} />
                </Button>
              )}
            </div>
            <div>
              <Image src={src} preview={false} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
