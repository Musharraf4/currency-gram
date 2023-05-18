import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { TitledObjectDataMap } from "../../../skeleton/titled-object-data-map/titled-object-data-map";

export const ObjectDetails = (props: any) => {
  const {
    detailsToMap,
    hasHr,
    mainTitle,
    hrClassName,
    mainclassName,
    mainTitleClassName,
    imgSrcClassName,
    imgWrapperClassName,
    imgSrc,
  } = props;
  const mainClass = twMergeClass(
    `bg-tertiary-background shadow-xl rounded-lg pl-2 pr-2 pt-2 pb-2 ${mainclassName}`
  );
  const mainTitleClass = twMergeClass(
    `text-secondary-text text-base font-semibold mt-2 mb-2 ${mainTitleClassName}`
  );
  const imgWrapperClass = twMergeClass(`max-w-sm  ${imgWrapperClassName}`);
  const imgSrcClass = twMergeClass(`w-full ${imgSrcClassName}`);
  return (
    <div className={mainClass}>
      <TitledObjectDataMap
        mainTitle={mainTitle}
        mainTitleClassName={mainTitleClass}
        objectData={detailsToMap}
        headingXs={24}
        titleXs={24}
        headingMd={12}
        titleMd={12}
        rowClassName="mb-3 items-center"
        headingClassName="text-secondary-text font-semibold text-sm"
        titleClassName="text-secondary-text font-normal text-sm"
        headingColClassName="text-start"
        titleColClassName="text-end"
        hasHr={hasHr ?? true}
        hrClassName={`border-white border-1 mb-2 ${hrClassName}`}
        imgWrapperClassName={imgWrapperClass}
        imgSrc={imgSrc}
        imgSrcClassName={imgSrcClass}
      />
    </div>
  );
};
