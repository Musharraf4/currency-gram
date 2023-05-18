import { AppTitle } from "../../components/data-display/app-title/app-title";
import { ObjectDataMap } from "../object-data-map/object-data-map";

export const TitledObjectDataMap = (props: any) => {
  const {
    mainTitle,
    mainTitleClassName,
    objectData,
    rowClassName,
    headingXs,
    headingMd,
    titleXs,
    titleMd,
    headingClassName,
    titleClassName,
    headingVariant,
    titleVariant,
    hasHr,
    headingColClassName,
    titleColClassName,
    hrClassName,
    mainIconClassName,
    mainIcon,
    headerClassName,
    imgSrc,
    imgWrapperClassName,
    imgSrcClassName,
  } = props;
  return (
    <>
      <div className={headerClassName}>
        <div>{mainIcon}</div>
        <AppTitle title={mainTitle} className={`${mainTitleClassName}`} Variant={titleVariant} />
      </div>
      {hasHr && <hr className={`border-solid ${hrClassName}`} />}
      <ObjectDataMap
        objectData={objectData}
        rowClassName={rowClassName}
        headingXs={headingXs}
        headingMd={headingMd}
        titleXs={titleXs}
        titleMd={titleMd}
        headingClassName={headingClassName}
        titleClassName={titleClassName}
        headingVariant={headingVariant}
        titleVariant={titleVariant}
        headingColClassName={headingColClassName}
        titleColClassName={titleColClassName}
        imgWrapperClassName={imgWrapperClassName}
        imgSrc={imgSrc}
        imgSrcClassName={imgSrcClassName}
      />
    </>
  );
};
