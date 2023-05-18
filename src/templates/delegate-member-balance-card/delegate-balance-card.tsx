import { Col, Divider, Row } from "antd";
import { UserDetailCard } from "../../skeleton/user-detail-card/user-detail-card";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { HeadingAndTitle } from "../../skeleton/heading-and-title/heading-and-title";
import "./delegate-balance-card.scss";
import "../../components/app-banner/app-banner.scss"

export const DelegateBalanceCard = (props: any) => {
  const {
    shape,
    styleAppTitle,
    mainAppTitleClass,
    subAppTitleClass,
    balanceCardData,
    userImageClassName,
  } = props;

  return (
    <div>
      <div className="inner-header app-banner-bg-image h-40  bg-primary p-6 mt-2 text-white rounded-lg mb-5">
        <Row className="flex justify-between w-full items-center">
          <Col xs={24} sm={24} md={24} lg={8}>
            <AppTitle title="Current Balance" className="font-semibold text-xl mb-5"></AppTitle>

            <HeadingAndTitle
              title="Pending from Inactive Members :£ 563.62"
              heading="£637.33"
              rowClassName="flex flex-col"
              titleClassName="font-medium text-xs mt-3"
              headingClassName="text-3xl font-semibold"
            />
          </Col>

          <Col
            xs={24}
            md={24}
            lg={12}
            className="flex header-inner-card rounded-lg justify-around mt-3 px-2">
            <Row
              className="w-full flex justify-center items-center"
              // gutter={[0, { xs: 10 }]}
            >
              {balanceCardData?.map((item: any) => {
                return (
                  <>
                    <Col xs={24} sm={6} md={7} lg={7}>
                      <UserDetailCard
                        size={35}
                        userImageClassName={userImageClassName}
                        userImage={item?.icon}
                        heading={item?.heading}
                        shape={shape}
                        avatarStyle={item?.avatarStyle}
                        description={item?.description}
                        userInfoClassName={styleAppTitle}
                        headingClassName={mainAppTitleClass}
                        descriptionClassName={subAppTitleClass}
                      />
                    </Col>
                    {item?.divider && (
                      <Col>
                        <Divider
                          type="vertical"
                          className="bg-light-grey h-14 hidden md:block lg:block"
                        />
                      </Col>
                    )}
                  </>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
