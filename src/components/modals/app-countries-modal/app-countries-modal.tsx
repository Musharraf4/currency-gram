import { Avatar, Button, Input, Modal } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import "./app-countries-modal.scss";
import { AppSwitchControl } from "../../form-elements/app-switch-control/app-switch-control";
export const AppCountriesModal = (props: any) => {
    const {
        isModalOpen,
        handleOk,
        handleCancel,
        submitBtnFunction,
        heading,
        description,
        firstButtonText,
        submitBtnClassName,
        cancelBtnClassName,
        secondButtonText,
        modalWidth,
        subHeading,
        headingClassName,
        subHeadingClassName,
        descriptionClassName,
        midButtonText,
        midBtnClassName,
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
        prefix,
        placeholder,
        inputClass,
        selectSwtich,
        modalHeading,
        countryArray
    } = props;
    console.log(countryArray)
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
                <div>
                    {!!heading && (
                        <AppTitle
                            className={`text-sm font-semibold text-primary-text ${headingClassName}`}
                            title={heading}
                        />
                    )}
                    {!!description && (
                        <AppTitle
                            className={`text-xs font-normal text-primary-text text-[#C5C7D0] ${descriptionClassName}`}
                            title={description}
                        />
                    )}
                    <div>
                        <Input size="large" placeholder={placeholder} prefix={prefix} className={`my-3 ${inputClass}`} />
                    </div>
                    <div className="flex justify-between flex-wrap">
                        <div>
                            <AppTitle
                                className="text-sm font-normal text-[#C5C7D0]"
                                title={modalHeading}
                            />
                        </div>
                        <div>
                            <AppTitle
                                className="text-sm font-normal text-[#C5C7D0]"
                                title={selectSwtich}
                            />
                        </div>
                    </div>
                    <div className="overflow-y-scroll h-40">
                        {countryArray?.map?.((item: any) => (
                            <AppSwitchControl
                                notificationName={item.countryName}
                                notificationClassName={"font-semibold ml-2"}
                                btnIcon={item.countryflag}
                                buttonClassName="flex items-center"
                                switchRowClassName="bg-disabled border-1 border-solid border-disabled rounded-lg p-1 md:mt-6 px-3 items-center"
                            />
                        ))}
                    </div>
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

                    <div className={`mt-8 ${btnWrapperClassName}`}>
                        {!!firstButtonText && (
                            <Button
                                htmlType="submit"
                                className={`bg-primary text-white  ${!!!midButtonText && "w-full"
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

    )
}
