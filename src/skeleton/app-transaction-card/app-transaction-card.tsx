import { AppLimitCard } from "../app-limit-card/app-limit-card";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const AppTransactionCard = (props: any) => {
  const {
    subArray,
    transactionCardTitle,
    TransactionCardTitleClassName,
    Variant,
    limitParentClass,
    limitChildClass,
    limitLeftAmountClassName,
  } = props;

  return (
    <>
      <AppTitle title={transactionCardTitle} className={TransactionCardTitleClassName} />
      {subArray?.map((data: any) => (
        <AppLimitCard
          Variant={Variant}
          limitParentClass={limitParentClass}
          limitChildClass={limitChildClass}
          limitAmountTitle={data.amountTitle}
          limitLeftAmount={data.leftAmount}
          limitLeftAmountClassName={limitLeftAmountClassName}
          limitTransactionAmount={data.transactionAmount}
        />
      ))}
    </>
  );
};
