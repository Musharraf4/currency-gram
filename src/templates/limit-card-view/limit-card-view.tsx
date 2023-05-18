import { Button, Col, Divider, Row } from "antd";
import { MainCard } from "../main-card/main-card";
import { SetLimit } from "../set-limit/set-limit";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppTextAndButton } from "../../skeleton/app-text-and-button/app-text-and-button";
import { cardSettingCardFunction } from "../../features/cards/limit-view/limit-view-data";

export const LimitCardViewTemplate = (props: any) => {
  const {
    LimitCardViewTemplateArray,
    xs, md, lg, sm,
    btnLink,
    LimitCardTextAndBtnClass,
    setIsActive,
    textAndButtonText,
    textAndButtonTitle,
    editFunction,
    showMaindCard,
    hideAppandTextButton
  } = props;
  const cardSettingCard = cardSettingCardFunction(setIsActive);
  return (
    <>
      {/* {!!personalUser.length && */}
      {showMaindCard && <MainCard primaryCardData={cardSettingCard} mainDivClassName="pt-8 pl-4 pr-4" />}
      {/* } */}

      <AppCardWhite cardClassName="p-5 sm:p-14 mt-8">
       {!hideAppandTextButton && <><div className={LimitCardTextAndBtnClass}>
          <AppTextAndButton
            btnLink={btnLink}
            textAndButtontype="primary"
            btnClassName="px-10 mt-3 sm:mt-0"
            textAndButtonText={textAndButtonText}
            textAndButtonTitle={textAndButtonTitle}
            textAndButtonClass="flex items-center justify-between"
            textAndButtonTitleClassName="text-2xl font-semibold"
            textAndButtonfirstCol="sm:text-left text-center"
            textAndButtonsecondCol="sm:text-right text-center"
          />
        </div>

        <Divider /></>}
        <Row gutter={[40, 24]}>
          <>
            {LimitCardViewTemplateArray.map((item: any) => (
              <Col xs={xs} sm={sm} md={md} lg={lg}>
                <SetLimit
                  key={item.id}
                  subArray={item.transactionCardSubArray}
                  SetLimitTitle={item.title}
                  leftAmount={item.leftAmount}
                  amountTitle={item.amountTitle}
                  transactionAmount={item.transactionAmount}
                  SetLimitTitleClassName="text-left text-base sm:text-xl font-semibold mb-4"
                  SetLimitParentClass="flex flex-wrap items-start justify-between bg-[#f5f6f9] flex-1 max-w-full bg-light-grey-color rounded-lg mb-4 p-3"
                  limitChildClass="text-start primary-text-color"
                  amountClassName="mb-2 text-xs"
                  SetLimitLeftAmountClassName="text-xs mt-2"
                  Variant="span"
                />
              </Col>
            ))}
          </>
        </Row>

        <div className="text-end">
          <Button type="primary" onClick={editFunction}> Edit </Button>
        </div>
      </AppCardWhite>
    </>
  );
};
