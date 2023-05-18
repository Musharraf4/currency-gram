import { Button, Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppSimpleInfoCard } from "../../components/cards/app-simple-info-card/app-simple-info-card";

export const ActivityTemplate = (props: any) => {
  const {
    mainHeading,
    simpleCardData,
    rowClassName,
    activeCard,
    offsetColXs,
    offColLg,
    cardColXs,
    cardColLg,
    buttonText,
    btnClassName,
    btnFunction,
  } = props;
  console.log({ props });
  return (
    <div>
      <AppTitle
        className="text-xl font-medium text-primary-text px-8 mb-6 mt-2 lg:mt-10"
        title={mainHeading}
      />
      <Row className={`pb-8 ${rowClassName}`}>
        {!!simpleCardData?.length &&
          simpleCardData?.map((tabData: any) => (
            <>
              <Col xs={offsetColXs || 0} lg={offColLg || 0}></Col>
              <Col xs={cardColXs || 24} lg={cardColLg || 24} className={``}>
                <AppTitle
                  title={tabData?.title}
                  className="mt-5 text-xl font-medium text-primary-text px-3"
                />
                {tabData?.child?.length &&
                  tabData?.child?.map?.((child: any) => (
                    <AppSimpleInfoCard
                      setActiveClass={`${
                        activeCard === child?.heading &&
                        "make-active active border-primary border-solid bg-tertiary-background "
                      }`}
                      subtitleColor={
                        child?.subtitle === "Active Now" ? "text-success" : "text-grey"
                      }
                      activeCard={activeCard}
                      heading={child?.heading}
                      description={child?.description}
                      imgSrc={child?.imgSrc}
                      subtitle={child?.subtitle}
                      onCardClick={(e: any) => child?.linkPath?.(e, child)}
                      col1Xs={5}
                      col2Xs={15}
                      col1Sm={5}
                      col2Sm={15}
                      col1Md={3}
                      col2Md={20}
                      col1Lg={5}
                      col2Lg={17}
                      col1Xl={3}
                      col2Xl={20}
                    />
                  ))}
              </Col>
              <Col xs={offsetColXs || 0} lg={offColLg || 0}></Col>
            </>
          ))}
      </Row>
      {!!buttonText && (
        <Button
          className={`mb-3 w-full min-h-[3rem] h-fit whitespace-normal ${btnClassName}`}
          onClick={(e: any) => btnFunction?.(e)}
          size={"large"}
          type="primary"
        >
          <AppTitle title={buttonText} />
        </Button>
      )}
    </div>
  );
};
