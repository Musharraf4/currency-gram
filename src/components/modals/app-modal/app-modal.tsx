import { Avatar, Button, Divider, Modal } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import "./app-modal.scss";
import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";

export const AppModal = (props: any) => {
  const {
    isModalOpen,
    handleOk,
    handleCancel,
    avatarClassName,
    submitBtnFunction,
    avatarStyle,
    src,
    heading,
    description,
    icon,
    firstButtonText,
    submitBtnClassName,
    cancelBtnClassName,
    secondButtonText,
    avatarSize,
    modalWidth,
    subHeading,
    headingClassName,
    subHeadingClassName,
    descriptionClassName,
    midButtonText,
    midBtnClassName,
    dividerText,
    dividerClassName,
    mainTitle,
    mainTitleIcon,
    mainTitleSrc,
    mainTitleAvatarStyle,
    mainTitleAvatarClassName,
    mainTitleAvatarSize,
    mainTitleClassName,
    btnWrapperClassName,
    cancelBtnFunction,
    midBtnFunction,
    closable,
    closeIcon,
  } = props;
  const btnWrapperClass = twMergeClass(`mt-8 ${btnWrapperClassName}`);
  return (
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
          <Avatar
            src={src}
            icon={icon}
            size={avatarSize}
            className={avatarClassName}
            style={avatarStyle}
          />
          {!!heading && (
            <AppTitle
              className={`text-sm text-center font-semibold text-primary-text ${headingClassName}`}
              title={heading}
            />
          )}
          {!!dividerText && (
            <Divider className={`${dividerClassName}`} plain>
              <AppTitle title={dividerText} className="text-sm text-light-grey" />
            </Divider>
          )}
          {!!subHeading && (
            <AppTitle
              className={`text-sm text-center font-semibold text-primary-text ${subHeadingClassName}`}
              title={subHeading}
            />
          )}
          {!!mainTitle && (
            <div className="flex items-center justify-center">
              <Avatar
                src={mainTitleSrc}
                icon={mainTitleIcon}
                size={mainTitleAvatarSize}
                className={mainTitleAvatarClassName}
                style={mainTitleAvatarStyle}
              />
              <AppTitle
                className={`text-xs font-normal text-primary-text ml-2 ${mainTitleClassName}`}
                title={mainTitle}
              />
            </div>
          )}
          {!!description && (
            <AppTitle
              className={`text-xs font-normal text-primary-text ${descriptionClassName}`}
              title={description}
            />
          )}
          <div className={btnWrapperClass}>
            {!!firstButtonText && (
              <Button
                htmlType="submit"
                className={`bg-primary text-white  ${
                  !!!midButtonText && "w-full"
                } mb-3 ${submitBtnClassName}`}
                onClick={(e: any) => submitBtnFunction?.(e)}
                size={"large"}>
                <AppTitle title={firstButtonText} />
              </Button>
            )}
            {!!midButtonText && (
              <Button
                htmlType="button"
                type="primary"
                ghost
                className={`text-primary ml-2 ${midBtnClassName}`}
                size={"large"}
                onClick={(e: any) => midBtnFunction?.(e)}>
                <AppTitle title={midButtonText} />
              </Button>
            )}
            {!!secondButtonText && (
              <Button
                htmlType="button"
                type="text"
                className={`text-primary w-full ${cancelBtnClassName}`}
                size={"large"}
                onClick={(e: any) => cancelBtnFunction?.(e)}>
                <AppTitle title={secondButtonText} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
