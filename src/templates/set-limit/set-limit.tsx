import { AppTransactionCard } from "../../skeleton/app-transaction-card/app-transaction-card";

export const SetLimit = (props: any) => {
  const {
    SetLimitTitleClassName,
    SetLimitParentClass,
    SetLimitChildClass,
    SetLimitAmountClassName,
    SetLimitLeftAmountClassName,
    Variant,
    SetLimitTitle,
    leftAmount,
    SetLimitAmountTitle,
    SetLimitTransactionAmount,
    subArray,
    SetLimitAmount,
    
  } = props;

  return (
    <div>
      <AppTransactionCard
        subArray={subArray}
        Variant={Variant}
        leftAmount={leftAmount}
        amountTitle={SetLimitAmountTitle}
        limitChildClass={SetLimitChildClass}
        amountClassName={SetLimitAmountClassName}
        limitParentClass={SetLimitParentClass}
        transactionAmount={SetLimitTransactionAmount}
        transactionCardTitle={SetLimitTitle}
        limitTransactionAmount={SetLimitAmount}
        limitLeftAmountClassName={SetLimitLeftAmountClassName}
        TransactionCardTitleClassName={SetLimitTitleClassName}
      />
    </div>
  );
};
