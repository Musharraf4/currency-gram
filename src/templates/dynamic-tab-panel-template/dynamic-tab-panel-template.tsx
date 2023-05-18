import { Col, Divider, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppTabsCard } from "../../components/cards/app-tabs-card/app-tabs.card";
import { twMergeClass } from "../../lib/tw-merge-override-class-lib";

export const DynamicTabPanelTemplate = (props: any) => {
  const {
    tabCardData,
    mainDivClassName,
    rowClassName,
    activeCard,
    offsetColXs,
    offColLg,
    cardColXs,
    cardColLg,
    componentToShown,
    dynamicComponentClassName,
  } = props;
  // console.log({ props });
  const dynamicComponentClass = twMergeClass(`mt-2 lg:mt-20 ${dynamicComponentClassName}`);
  const mainDivClass = twMergeClass(`pb-10 ${mainDivClassName}`);

  return (
    <AppCardWhite cardClassName={mainDivClass}>
      <Row className="">
        <Col xs={24} lg={8} className="">
          <Row className={`py-8 ${rowClassName}`}>
            {!!tabCardData?.length &&
              tabCardData?.map((tabData: any) => (
                <>
                  <Col xs={offsetColXs || 0} lg={offColLg || 0}></Col>
                  <Col xs={cardColXs || 24} lg={cardColLg || 24} className={``}>
                    <AppTitle
                      title={tabData?.title}
                      className="my-5 text-xl font-semibold text-primary-text px-3"
                    />
                    {tabData?.child?.length &&
                      tabData?.child?.map?.((child: any) => (
                        <AppTabsCard
                          setActiveClass={`${
                            activeCard === child?.heading &&
                            "make-activ active border-primary border-solid bg-tertiary-background "
                          }`}
                          activeCard={activeCard}
                          heading={child?.heading}
                          description={child?.description}
                          imgSrc={child?.imgSrc}
                          size={child?.size}
                          onCardClick={(e: any) => child?.linkPath?.(e, child)}
                        />
                      ))}
                  </Col>
                  <Col xs={offsetColXs || 0} lg={offColLg || 0}></Col>
                </>
              ))}
          </Row>
        </Col>
        <Col xs={24} lg={1} className="flex">
          <Divider
            type="vertical"
            orientation="center"
            className="mx-auto h-4/5 mt-9 hidden lg:block"
          />
          <Divider orientation="center" className="mx-auto block lg:hidden" />
        </Col>
        <Col lg={15} xs={24} className={dynamicComponentClass}>
          {componentToShown}
        </Col>
      </Row>
    </AppCardWhite>
  );
};
