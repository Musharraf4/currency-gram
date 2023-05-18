import { Button, Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { ObjectDetails } from "../../components/data-display/app-object-details/app-object-details";
import { AppButton } from "../../components/buttons/app-button/app-button";

export const AccountDetailsTemplate = (props: any) => {
  const {
    accountInfo,
    totalBalance,
    availableBalance,
    hasPayment,
    formFields,
    firstButtonText,
    onFinish,
    onFinishFailed,
    btnWrapperClassName,
    buttonText,
    submitBtnClassName,
    submitBtnFunction,
    buttons,
  } = props;
  return (
    <>
      <>
        {!!accountInfo?.length &&
          accountInfo?.map((x: any) => (
            <div className="mb-5">
              <ObjectDetails
                detailsToMap={x?.data}
                hasHr={x?.hasHr}
                mainTitle={x?.mainTitle}
                hrClassName={x?.hrClassName}
                imgSrc={x?.imgSrc}
              />
            </div>
          ))}
        {(!!totalBalance || !!availableBalance) && (
          <div className="mt-3">
            <Row className="margin-top-1 ">
              <Col xs={24} lg={12} className="">
                <AppTitle
                  className="font-normal text-sm text-secondary-text"
                  title={"Total Balance "}
                  Variant="span"
                />
                <AppTitle
                  className="font-medium text-sm text-primary"
                  title={totalBalance || "6471.4 GBP"}
                  Variant="span"
                />
              </Col>
              <Col xs={24} lg={12} className="end-text">
                <AppTitle
                  className="font-normal text-sm text-secondary-text"
                  title={" Available Balance  "}
                  Variant="span"
                />
                <AppTitle
                  className="font-medium text-sm text-primary"
                  title={availableBalance || "6471.4 GBP"}
                  Variant="span"
                />
              </Col>
            </Row>
          </div>
        )}
        <div className={`mt-8 ${btnWrapperClassName}`}>
          {!!buttonText && (
            <Button
              className={`mb-3 min-h-[3rem] h-fit w-full ${submitBtnClassName}`}
              onClick={(e: any) => submitBtnFunction?.(e)}
              size={"large"}
              type="primary"
            >
              <AppTitle title={buttonText} />
            </Button>
          )}
          {buttons?.length && <AppButton buttons={buttons} btnWrapperClassName="mt-3 lg:mt-3" />}
        </div>
        {hasPayment && (
          <AppDynamicForm
            firstButtonText={firstButtonText}
            formFields={formFields}
            fieldMd={24}
            fieldXs={24}
            // formStyle={{ maxWidth: 600, margin: "auto" }}
            formClassName="mt-8"
            globalFormItemClassName="mb-0"
            formAutoComplete="off"
            onFinish={(e: any) => onFinish?.(e)}
            onFinishFailed={(e: any) => onFinishFailed(e)}
            fieldsClassName="mb-2 text-start"
            submitBtnClassName="w-full"
            cancelBtnClassName="w-full"
            cancelBtnsize="large"
            submitBtnSize="large"
            btnWrapperClassName="mb-8"
          />
        )}
      </>
    </>
  );
};
