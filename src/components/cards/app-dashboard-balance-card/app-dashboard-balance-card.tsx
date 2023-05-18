import { Col, Row, TreeSelect } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import useBalanceCard from "./use-dashboard-balance-card";
import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";
import { HeadingAndTitle } from "../../../skeleton/heading-and-title/heading-and-title";
import "./app-dashboard-balance-card.scss";
import { AppDropdownIcon } from "../../dropdowns/app-icon-dropdown/app-icon-dropdown";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const BalanceCard = (props: any) => {
  const {
    imageAppTitleClass,
    iconSend,
    iconReceive,
    filterBalanceCard,
    title,
    shape,
    subTitle,
    classNameSend,
    classNameReceive,
    subTitleClassRecevied,
    styleAppTitle,
    subTitleRecevied,
    titleRecevied,
    mainAppTitleClass,
    subAppTitleClass,
  } = props;
  const { handleCurrencyChange, currencyName, currency } = useBalanceCard();
  return (
    <div className="inner-header app-banner-bg-image bg-primary p-6 mt-2 text-white rounded-lg">
      <Row className="flex justify-between w-full items-center">
        <Col xs={24} sm={24} md={24} lg={6}>
          <AppTitle title="Current Balance" className="font-semibold text-xl mb-5"></AppTitle>

          <Row className="flex justify-between">
            <AppTitle title="£637.33" className="text-3xl font-semibold"></AppTitle>
            <TreeSelect
              value={currency}
              treeData={currencyName}
              treeDefaultExpandAll
              className="w-28"
              onChange={handleCurrencyChange}
            />
          </Row>
          <Col className="flex justify-between mt-4" sm={24} md={24}>
            <HeadingAndTitle
              title="Sort Code:31510604"
              heading="Account no:31510604"
              rowClassName="flex justify-between w-full"
              titleClassName="ml-1 font-medium text-xs"
              headingClassName="font-medium text-xs"
            />
          </Col>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={10}
          className="flex header-inner-card h-32 rounded-lg justify-around mt-3 pl-4">
          <div className={imageAppTitleClass}>
            <Row className="w-full items-center" gutter={[0, { xs: 10 }]}>
              <Col xs={24} md={12} lg={12}>
                <UserDetailCard
                  size={35}
                  userImageClassName="hidden sm:block"
                  icon={iconSend}
                  heading={title}
                  shape={shape}
                  description={subTitle}
                  avatarStyle={classNameSend}
                  userInfoClassName={styleAppTitle}
                  headingClassName={mainAppTitleClass}
                  descriptionClassName={subAppTitleClass}
                  userDetailsClassName=""
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <UserDetailCard
                  size={35}
                  shape={shape}
                  userImageClassName="hidden sm:block"
                  heading={titleRecevied}
                  icon={iconReceive}
                  avatarStyle={classNameReceive}
                  description={subTitleRecevied}
                  headingClassName={mainAppTitleClass}
                  descriptionClassName={subTitleClassRecevied}
                  userInfoClassName={styleAppTitle}
                />
              </Col>
            </Row>
          </div>

          <AppDropdownIcon
          items={filterBalanceCard}
          className="border-none bg-transparent p-1"
          title={<ICONSCONSTANT.MoreOutlined className="text-xl font-bold text-white" />}
        />
        </Col>
      </Row>
    </div>
  );
};