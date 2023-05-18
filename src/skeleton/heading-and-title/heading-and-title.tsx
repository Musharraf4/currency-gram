import { Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const HeadingAndTitle = (props: any) => {
  const {
    heading,
    title,
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
    imgSrcClassName,
    imgSrc,
    imgWrapperClassName,
  } = props;
  return (
    <Row className={`${rowClassName}`}>
      <Col xs={headingXs} md={headingMd} className={headingColClassName}>
        <AppTitle title={heading} className={`${headingClassName}`} Variant={headingVariant} />
      </Col>
      <Col xs={titleXs} md={titleMd} className={titleColClassName}>
        {!!imgSrc && (
          <div className={imgWrapperClassName}>
            <img src={imgSrc} alt={title} className={imgSrcClassName} />
          </div>
        )}
        <AppTitle title={title} className={`${titleClassName}`} Variant={titleVariant} />
      </Col>
    </Row>
  );
};
