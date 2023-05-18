import { Avatar, Col, Image, Row, Switch } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const ChildrenDetailCardSkeleton = (props: any) => {
  const {
    heading,
    description,
    userImage,
    userImageClassName,
    descriptionClassName,
    headingClassName,
    userDetailsClassName,
    userInfoClassName,
    imageDivClassName,
    onCardClick,
    col1Xs,
    col2Xs,
    col1Lg,
    col2Lg,
    children,
    offsetLg,
    offsetXs,
    subtitleClassName,
    subtitle,
    subtitle2ClassName,
    subtitle2,
    offsetMidLg,
    offsetMidXs,
    imageWrapperClassName,
  } = props;

  // console.log(props);

  return (
    <>
      <Row className={`${userDetailsClassName}`} onClick={(e: any) => onCardClick?.(e)}>
        <Col xs={offsetXs} lg={offsetLg}></Col>
        {!!userImage && (
          <Col xs={col1Xs} lg={col1Lg} className={`${imageDivClassName}`}>
            <div className={imageWrapperClassName}>
              <img src={userImage} alt={heading} className={`${userImageClassName}`} />
            </div>
          </Col>
        )}
        <Col xs={offsetMidXs} lg={offsetMidLg}></Col>

        <Col xs={col2Xs} lg={col2Lg} className={`${userInfoClassName}`}>
          <AppTitle className={headingClassName} title={heading} />
          {!!description && <AppTitle className={descriptionClassName} title={description} />}
          {!!subtitle && <AppTitle className={subtitleClassName} title={subtitle} />}
          {children}
          {!!subtitle2 && <AppTitle className={subtitle2ClassName} title={subtitle2} />}
        </Col>
        <Col xs={offsetXs} lg={offsetLg}></Col>
      </Row>
    </>
  );
};
