import { Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const CrispInfoCard = (props: any) => {
  const {
    imgSrc,
    infoAbout,
    info,
    infoClassName,
    infoAboutClassName,
    imgContainerClassName,
    imgClassName,
    imgFunction,
    titleContainerClassName,
    imgXs,
    imgMd,
    imgLg,
    infoSx,
    infoMd,
    infoLg,
    nonSx,
    nonMd,
    rowClassName,
  } = props;
  console.log(props);
  return (
    <>
      <div>
        <Row className={rowClassName}>
          <Col xs={imgXs} md={imgMd} lg={imgLg}>
            <div className={imgContainerClassName}>
              <img src={imgSrc} className={imgClassName} alt="" onClick={() => imgFunction?.()} />
            </div>
          </Col>
          <Col xs={infoSx} md={infoMd} lg={infoLg} className={titleContainerClassName}>
            <AppTitle className={infoClassName} title={info} />
          </Col>
          <Col xs={nonSx} md={nonMd}></Col>
        </Row>
        <div className={`${infoAboutClassName}`}>{infoAbout}</div>
      </div>
    </>
  );
};
