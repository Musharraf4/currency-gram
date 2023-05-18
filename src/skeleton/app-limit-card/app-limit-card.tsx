import { AppTitle } from "../../components/data-display/app-title/app-title";

export const AppLimitCard = (props: any) => {
  const {
    limitParentClass,
    limitChildClass,
    limitAmountTitle,
    limitLeftAmount,
    limitTransactionAmount,
    limitLeftAmountClassName,
    Variant,
  } = props;

  return (
    <div className={limitParentClass}>
      <div className={limitChildClass}>
        <AppTitle title={limitAmountTitle} />
        <div className={limitLeftAmountClassName}>
          <AppTitle title={limitLeftAmount} Variant={Variant} />
        </div>
      </div>
      {limitTransactionAmount}
    </div>
  );
};
