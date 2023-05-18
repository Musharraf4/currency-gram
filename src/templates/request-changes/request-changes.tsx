import { Button, Radio, Col, Row } from "antd";
import { SetLimit } from "../set-limit/set-limit";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";

export const RequestChangesTemplate = (props: any) => {
  const {
    RequestChangesTemplateArray,
    title,
    btnChildren,
    btnType,
    radioChildren,
    checked,
    onChange,
    disabled,
    onSubmitSuccess,
  } = props;

  return (
    <>

      <AppCardWhite>
        <AppTitle title={title} className="p-6 font-semibold text-xl bg-slate-100" />
        <Row gutter={[40, 24]} justify={"center"} className="p-10">
          <>
            {RequestChangesTemplateArray.map((item: any) => (
              <Col xs={24} sm={24} md={24} lg={24} className="border-indigo-500 border-b-8">
                <SetLimit
                  key={item.id}
                  subArray={item.transactionCardSubArray}
                  SetLimitTitle={item.title}
                  leftAmount={item.leftAmount}
                  SetLimitAmountTitle={item.amountTitle}
                  SetLimitTransactionAmount={item.transactionAmount}
                  divider={item.divider}
                  SetLimitTitleClassName="text-left text-xl font-semibold mb-4"
                  SetLimitParentClass="flex items-start flex-wrap justify-between flex-1 max-w-full"
                  SetLimitChildClass="text-start primary-text-color"
                  SetLimitAmountClassName="mb-2 text-xs"
                  limitLeftAmountClassName="text-xs mt-2"
                  Variant="span"
                />
              </Col>
            ))}
          </>
          <Button
            disabled={disabled}
            className="w-full h-11 border-none font-medium"
            type={btnType}
            onClick={(e: any) => onSubmitSuccess?.(e)}>
            {btnChildren}
          </Button>
        </Row>
      </AppCardWhite>
      <div className="text-start mt-5">
        <Radio className="text-base rounded-full" checked={checked} onChange={onChange}>
          {radioChildren}
        </Radio>
      </div>

    </>
  );
};
