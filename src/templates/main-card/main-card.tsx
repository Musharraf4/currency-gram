import { AppPrimaryCard } from "../../components/cards/app-primary-card/app-primary-card";
import { Col, Row } from "antd";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";

export const MainCard = (props: any) => {
  const { primaryCardData, mainDivClassName, rowClassName, activeCard } = props;
  console.log(props);
  return (
    <AppCardWhite cardClassName={mainDivClassName}>
      <Row className={`${rowClassName}`}>
        {primaryCardData?.length &&
          primaryCardData?.map((cardData: any) => (
            <>
              <Col xs={0} lg={1}></Col>
              <Col xs={24} lg={10} className={`mb-8`}>
                <AppPrimaryCard
                  setActiveClass={`${activeCard === cardData.heading && "make-active active"}`}
                  activeCard={activeCard}
                  heading={cardData?.heading}
                  description={cardData?.description}
                  imgSrc={cardData?.imgSrc}
                  onCardClick={cardData?.linkPath}
                />
              </Col>
              <Col xs={0} lg={1}></Col>
            </>
          ))}
      </Row>
    </AppCardWhite>
  );
};
