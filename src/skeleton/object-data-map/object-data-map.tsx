import { HeadingAndTitle } from "../heading-and-title/heading-and-title";

export const ObjectDataMap = (props: any) => {
  const {
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
    headingColClassName,
    titleColClassName,
    imgSrc,
    imgWrapperClassName,
    imgSrcClassName,
  } = props;

  return (
    <div>
      {Object?.entries?.(objectData || {})?.map(([heading, title]: any) => (
        <>
          <HeadingAndTitle
            key={heading}
            heading={heading}
            title={title}
            rowClassName={rowClassName}
            headingXs={headingXs}
            headingMd={headingMd}
            titleXs={titleXs}
            titleMd={titleMd}
            headingClassName={headingClassName}
            titleClassName={titleClassName}
            headingVariant={headingVariant}
            titleVariant={titleVariant}
            imgWrapperClassName={imgWrapperClassName}
            imgSrc={imgSrc}
            imgSrcClassName={imgSrcClassName}
            headingColClassName={headingColClassName}
            titleColClassName={titleColClassName}
          />
        </>
      ))}
    </div>
  );
};
