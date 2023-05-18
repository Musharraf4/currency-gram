import { useAppSelector } from "../../store/store";
import { Col, Divider, QRCode, Row, Switch } from "antd";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { TermsTemplate } from "../terms/terms";
import { ConditionData } from "../../components/data-display/condition-data/condition-data";
import { twMergeClass } from "../../lib/tw-merge-override-class-lib";
import { AppButtonLoader } from "../../components/feedback/app-button-loader/app-button-loader";

export const AuthWrapperTemplate = (props: any) => {
  const {
    formFields,
    leftTitleOrange,
    leftTitle,
    leftTitle2,
    showForm = true,
    formSubmitButtonText,
    formContainerClassName,
    formText,
    onFinish,
    onFinishFailed,
    setFormFields,
    showLeft,
    showMiddle,
    col1Xs,
    col1Xl,
    col2Xs,
    col2Xl,
    col3Xs,
    col3Xl,
    formLg,
    switchText,
    secondButtonText,
    cancelBtnFunction,
    NoAccountTitle,
    makeAccountTitle,
    makeAccountRoute,
    qrValue,
    globalClassName,
    navigation,
    noFormButton,
    noFormHeading,
    noFormData,
    goBackTitle,
    goBackImgSrc,
    col1Md,
    col2Md,
    col3Md,
    col1Lg,
    col2Lg,
    col3Lg,
    initialValues,
    statusLoading,
    submitBtnDisable,
    loaderText,
    onValuesChange,
  } = props;

  const { auth } = useAppSelector((state) => state);
  const formContainerClass = twMergeClass(
    `mb-2 h-fit pb-2 md:pb-8 pt-2 md:pt-8 pl-2 pr-2 ${formContainerClassName}`
  );
  return (
    <>
      <Row>
        <Col xs={24} md={3}></Col>
        <Col xs={24} md={21}>
          {!!goBackTitle && (
            <ConditionData
              navigateFunction={() => navigation?.()}
              imgSrc={goBackImgSrc}
              bannerHeading={goBackTitle}
            />
          )}
        </Col>
      </Row>
      <Row className="items-center justify-center h-[65vh]">
        <Col xs={col1Xs ?? 1} md={col1Md ?? 3} lg={col1Lg ?? 3} xl={col1Xl ?? 3}></Col>
        <Col xs={col2Xs ?? 22} md={col2Md ?? 18} lg={col2Lg ?? 18} xl={col2Xl ?? 18}>
          <AppCardWhite cardClassName="pb-2 pt-2 mb-2 md:mb-8 ">
            <Row>
              {(showLeft ?? true) && (
                <Col className="flex justify-center items-center" xs={24} lg={11}>
                  <div className="pt-2 md:pt-16 pb-2 md:pb-8 pl-2 pr-2 center-text mx-auto">
                    <div>
                      <QRCode value={qrValue} className="mx-auto mb-4" />
                    </div>
                    <AppTitle
                      className="text-xl lg:text-2xl text-primary-text font-medium mt-16 text-center  mx-auto"
                      title={leftTitle}
                      Variant="span"
                    />
                    <AppTitle
                      className="text-primary text-xl lg:text-2xl  font-medium mt-16 text-center "
                      title={leftTitleOrange}
                      Variant="span"
                    />
                    <AppTitle
                      className="text-xl lg:text-2xl text-primary-text font-medium mt-16 text-center  mx-auto"
                      title={leftTitle2}
                      Variant="span"
                    />
                  </div>
                </Col>
              )}
              {(showMiddle ?? true) && (
                <Col xs={24} lg={1} className="flex">
                  <Divider
                    type="vertical"
                    orientation="center"
                    className="mx-auto h-4/5 mt-9 hidden lg:block"
                  />
                  <Divider orientation="center" className="mx-auto block lg:hidden" />
                </Col>
              )}
              <Col xs={24} lg={formLg ?? 11} className={formContainerClass}>
                <>
                  {showForm ? (
                    <>
                      <AppTitle
                        className="text-center text-2xl text-primary-text font-semibold"
                        title={formText}
                      />
                      {!!switchText && (
                        <div className="text-center mt-8 mb-4">
                          <AppTitle Variant="span" className="text-sm" title={switchText} />
                          <span className="ml-2">
                            <Switch size={"small"} onChange={(e: any) => setFormFields?.(e)} />
                          </span>
                        </div>
                      )}
                      <div>
                        <AppDynamicForm
                          formName="auth"
                          formFields={formFields}
                          initialValues={initialValues}
                          onValuesChange={(e: any, f: any) => onValuesChange?.(e, f)}
                          firstButtonText={
                            statusLoading ? (
                              <AppButtonLoader loaderText={loaderText} />
                            ) : (
                              formSubmitButtonText
                            )
                          }
                          submitBtnDisable={submitBtnDisable}
                          secondButtonText={secondButtonText}
                          fieldMd={24}
                          fieldXs={24}
                          formClassName="mt-8"
                          formAutoComplete="off"
                          onFinish={(e: any) => onFinish?.(e)}
                          onFinishFailed={(e: any) => onFinishFailed?.(e)}
                          fieldsClassName="mb-8 text-start"
                          submitBtnClassName="w-full"
                          cancelBtnClassName="w-full"
                          btnWrapperClassName="mb-8"
                          globalClassName={(globalClassName ?? true) && "bg-white"}
                          cancelBtnFunction={(e: any) => cancelBtnFunction?.(e)}
                        />
                      </div>
                      {(!!NoAccountTitle || !!makeAccountTitle) && (
                        <div className="text-center">
                          <AppTitle
                            className="text-primary-text mt-16 text-center  mx-auto"
                            title={NoAccountTitle}
                            Variant="span"
                          />
                          <AppTitle
                            className="text-primary  font-medium mt-16 text-center cursor-pointer ml-1 "
                            title={makeAccountTitle}
                            onClick={(e: any) => makeAccountRoute?.(e)}
                            Variant="span"
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <TermsTemplate
                        heading={noFormHeading}
                        data={noFormData}
                        button={noFormButton}
                        cardClassName="shadow-none p-0 m-0"
                        headingClassName="mt-0 mb-6"
                      />
                    </>
                  )}
                </>
              </Col>
            </Row>
          </AppCardWhite>
        </Col>
        <Col xs={col3Xs ?? 1} md={col3Md ?? 3} lg={col3Lg ?? 18} xl={col3Xl ?? 3}></Col>
      </Row>
    </>
  );
};
