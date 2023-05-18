import { Checkbox } from "antd";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { ConditionData } from "../../components/data-display/condition-data/condition-data";
import { twMergeClass } from "../../lib/tw-merge-override-class-lib";

export const TermsTemplate = (props: any) => {
  const {
    mainTitle,
    navigation,
    imgSrc,
    heading,
    data,
    onCheckboxChange,
    checkboxLabel,
    button,
    checked,
    cardClassName,
    headingClassName,
  } = props;
  console.log(props);
  const cardClass = twMergeClass(`px-16 py-8 mt-6 ${cardClassName}`);
  const headingClass = twMergeClass(
    `font-bold text-2xl text-delegate-text my-6 ${headingClassName}`
  );
  return (
    <>
      {!!mainTitle && (
        <ConditionData
          navigateFunction={() => navigation?.()}
          imgSrc={imgSrc}
          bannerHeading={mainTitle}
        />
      )}
      <AppCardWhite cardClassName={cardClass}>
        <AppTitle title={heading} className={headingClass} />
        <AppTitle title={data} className="delegate-text font-normal text-base " />
        {!!checkboxLabel && (
          <Checkbox
            onChange={(e: any) => onCheckboxChange?.(e)}
            className="text-primary-text text-sm font-normal my-5"
            checked={checked}>
            {checkboxLabel}
          </Checkbox>
        )}
        <AppButton buttons={button} btnWrapperClassName="text-center" />
      </AppCardWhite>
    </>
  );
};
