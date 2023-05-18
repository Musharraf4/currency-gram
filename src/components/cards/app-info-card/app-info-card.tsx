import { AppButton } from "../../buttons/app-button/app-button";
import { AppTitle } from "../../data-display/app-title/app-title";

export const AppInfoCard = (props: any) => {
  const { buttonText, buttonFunction, heading, dataToDisplay } = props;

  return (
    <div className="text-primary-text min-h-[30vh]">
      <AppTitle title={heading} className="font-semibold text-base text-secondary-text" />
      {dataToDisplay?.map((item: any) => {
        return (
          <div className="flex justify-between text-primary-text" key={item?.key}>
            <AppTitle Variant="span" title={item?.key} className="font-medium " />
            <AppTitle Variant="span" title={item?.value} className={item?.valueClassName} />
          </div>
        );
      })}

      {!!buttonText && (
        <center>
          <AppButton
            buttons={[
              {
                size: "large",
                className: " bg-primary text-white w-10/12 mt-14",
                btnLink: buttonFunction,
                btnText: buttonText,
              },
            ]}
          />
        </center>
      )}
    </div>
  );
};
