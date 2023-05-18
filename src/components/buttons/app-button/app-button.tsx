import { Button } from "antd";
import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { AppTitle } from "../../data-display/app-title/app-title";

export const AppButton = (props: any) => {
  const { buttons, btnWrapperClassName } = props;
  const btnWrapperClass = twMergeClass(`mt-4 lg:mt-10 ${btnWrapperClassName}`);
  const btnClass = (x: any) => twMergeClass(`whitespace-normal h-fit ${x?.className}`);
  console.log(props);
  return (
    <div className={btnWrapperClass}>
      {!!buttons?.length &&
        buttons?.map?.((x: any, index: any) => (
          <Button
            key={+(x?.id || 1) + index}
            size={x?.size ?? "large"}
            className={btnClass?.(x)}
            disabled={x?.disabled}
            icon={x?.icon}
            type={x?.type}
            ghost={x?.ghost}
            shape={x?.shape}
            onClick={(e: any) => {
              x?.btnLink?.(e);
            }}
          >
            <AppTitle title={x?.btnText} className={x?.btnClassName} Variant={x?.btnVariant} />
          </Button>
        ))}
    </div>
  );
};
