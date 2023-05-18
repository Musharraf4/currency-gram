import { Button, Divider } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const RequestSubmitTemplate = (props: any) => {
  const {
    variantOne,
    variantTwo,
    titleOne,
    titleTwo,
    buttons,
    imgSrc,
    discription,
    RequestSubmitImageClass,
    RequestSubmitTemplateMainDivClass,
    RequestSubmitDividerClass,
  } = props;
  return (
    <>
      <div className={`w-full max-w-xl mx-auto ${RequestSubmitTemplateMainDivClass}`}>
        <div>
          <img alt="check mark" src={imgSrc} className={RequestSubmitImageClass} />
        </div>
        <div className="mt-5">
          <AppTitle Variant={variantOne} title={titleOne} className="text-4xl font-semibold mb-4" />
          <AppTitle
            Variant={variantTwo}
            title={titleTwo}
            className="text-[#24c121] text-4xl font-semibold mb-4"
          />
        </div>
        <Divider className={RequestSubmitDividerClass} />
        <div>
          <AppTitle title={discription} className="mb-6 text-base font-normal text-[#374151]" />
        </div>
        {!!buttons?.length &&
          buttons?.map?.((x: any) => (
            <Button
              size={x?.size}
              className={x?.className}
              disabled={x?.disabled}
              icon={x?.icon}
              type={x?.type}
              ghost={x?.ghost}
              onClick={(e: any) => {
                x?.btnLink?.(e);
              }}
            >
              <AppTitle title={x?.btnText} className={x?.btnClassName} Variant={x?.btnVariant} />
            </Button>
          ))}
      </div>
    </>
  );
};
