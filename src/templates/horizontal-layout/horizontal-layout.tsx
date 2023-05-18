import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppColumnChildrenCard } from "../../components/cards/app-column-children-card/app-column-children-card";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const HorizontalLayoutTemplate = (props: any) => {
  const { data, button, contactText, linkText, imageWrapperClassName } = props;
  console.log(props);
  return (
    <>
      {!!data?.length &&
        data?.map((singleData: any) => (
          <>
            <AppColumnChildrenCard
              heading={singleData?.heading}
              headingClassName={`font-medium mt-2 mb-2 lg:mb-6 text-xl lg:mt-20 ${singleData?.headingClassName}`}
              descriptionClassName={`mb-2 lg:mb-10 text-sm w-full ${singleData?.descriptionClassName}`}
              subtitleClassName={`${singleData?.subtitleClassName}`}
              subtitle2ClassName={` ${singleData?.subtitle2ClassName}`}
              description={singleData?.description}
              subtitle={singleData?.subtitle}
              subtitle2={singleData?.subtitle2}
              extraChild={singleData?.extraChild}
              imgSrc={singleData?.imgSrc}
              imageWrapperClassName={imageWrapperClassName}
              setPositionClass={singleData?.setPositionClass}
            />
          </>
        ))}
      <AppButton buttons={button} btnWrapperClassName="text-center lg:mt-4" />
      {!!contactText && (
        <AppTitle
          title={
            <div>
              {contactText} <span className="font-normal text-info">{linkText}</span>
            </div>
          }
          className="font-light text-base text-delegate-text text-center mt-6"
        />
      )}
    </>
  );
};
