import { Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppTabsCard } from "../../components/cards/app-tabs-card/app-tabs.card";
import { UserDetailCard } from "../../skeleton/user-detail-card/user-detail-card";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const UserRoleCardTemplate = (props: any) => {
  const {
    size,
    avatarChildren,
    heading,
    description,
    mainDivClassName,
    rowClassName,
    offsetColXs,
    offColLg,
    cardColXs,
    cardColLg,
    tabCardData,
  } = props;
  return (
    <div>
      <AppCardWhite>
        <UserDetailCard
          size={size}
          avatarChildren={avatarChildren}
          userImageClassName="bg-[#38414F]"
          heading={heading}
          headingClassName="text-base font-medium"
          description={description}
          descriptionClassName="text-xs text-primary-text font-normal"
          userDetailsClassName="items-center p-5"
          userInfoClassName="ml-2 flex-1"
          userPrice={
            <div className="bg-primary text-white mt-2 py-3 px-5 rounded-lg">
              <ICONSCONSTANT.CreditCardOutlined className="mr-2" /> Order card
            </div>
          }
        />
      </AppCardWhite>

      <AppCardWhite cardClassName={mainDivClassName}>
        <Row justify={"center"}>
          <Col lg={9} className="">
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
                            setActiveClass={`${""}`}
                            heading={child?.heading}
                            description={child?.description}
                            imgSrc={child?.imgSrc}
                            onCardClick={(e: any) => child?.linkPath?.(e, child)}
                          />
                        ))}
                    </Col>
                  </>
                ))}
            </Row>
          </Col>
        </Row>
      </AppCardWhite>
    </div>
  );
};
