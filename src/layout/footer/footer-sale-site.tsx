import { Avatar, Button, Col, Divider, Input, Row } from "antd";
import { AppBrand } from "../../components/data-display/app-brand/app-brand";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { footerData, socialIcon } from "./footer-data";
import shoot from "../../assets/sales-site/icons/shoot.png";
import { COMMUNITYPATH } from "../../constants/sales-site-routes-constant";
import { useNavigate } from "react-router-dom";
import { LOGOCONSTANT } from "../../constants/logo-constant";

export const FooterSaleSite = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="bg-smoke-white p-8">
        <Col xs={24} lg={2}></Col>
        <Col xs={22} lg={20}>
          <Row>
            <Col xs={24} lg={5}>
              <AppBrand
                brandLogoContainerClassName="max-w-[200px] mb-4"
                imageClassName="w-full"
                routelink="/"
                brandSrc={LOGOCONSTANT.fullLogo}
              />
              <AppTitle
                title="A Single App For Hassle-Free Monetary Solutions.A Single App For Hassle-Free Monetary Solutions."
                className="text-base font-normal text-[#4B5563] mb-4"
              />
              <div className="mb-4">
                {!!socialIcon?.length &&
                  socialIcon?.map((icon: any) => (
                    <Avatar
                      key={icon?.heading}
                      src={icon?.userImage}
                      alt={icon?.heading}
                      icon={icon?.icon}
                      size={32}
                      className={`bg-[#232D57] p-1.5 mr-4 ${icon?.userImageClassName}`}
                      style={icon?.avatarStyle}
                    >
                      {icon?.avatarChildren}
                    </Avatar>
                  ))}
              </div>
            </Col>
            <Col xs={24} lg={2}></Col>

            <Col xs={24} lg={10}>
              <Row>
                {!!footerData?.length &&
                  footerData?.map((footer: any) => (
                    <Col xs={24} md={12}>
                      <AppTitle
                        key={footer.title}
                        title={footer.title}
                        className="text-xl font-bold text-[#111827] mb-4"
                      />

                      {footer?.subItems?.length &&
                        footer?.subItems.map((subItem: any) => (
                          <AppTitle
                            key={subItem}
                            title={subItem}
                            className="text-sm font-normal text-[#4B5563] mb-4"
                          />
                        ))}
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col xs={24} lg={2}></Col>

            <Col xs={24} lg={5}>
              <AppTitle
                title="Newsletter"
                className="text-xl font-bold text-[#111827] mb-4 text-start"
              />
              <AppTitle
                title="Subscribe to our newsletter"
                className="text-start text-sm font-medium text-[#4B5563] mb-4"
              />
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Your email address"
                  suffix={
                    <Avatar
                      src={shoot}
                      alt="search"
                      size={32}
                      className={`bg-transparent border-solid border-grey p-1.5 mr-4`}
                    >
                      S
                    </Avatar>
                  }
                  className="rounded-full bg-white pl-5 py-2.5 px-2.5 dynamic-form-input-elegant border-0"
                />
              </div>
              <Button
                size={"large"}
                type={"primary"}
                onClick={(e: any) => {
                  navigate(`${COMMUNITYPATH}`);
                }}
              >
                <AppTitle title="Join Community" />
              </Button>
            </Col>
          </Row>
          <Divider className="border-[.5px] border-primary-text border-solid"></Divider>
          <Row>
            <Col xs={24} lg={12}>
              <div className="flex items-center ">
                <AppTitle
                  title="Terms of Use"
                  className="text-sm font-medium text-[#4B5563] mb-4"
                />
                <AppTitle
                  title="Privacy Policy"
                  className="text-sm font-medium text-[#4B5563] mb-4 ml-10"
                />
              </div>
            </Col>
            <Col xs={24} lg={12} className="text-start lg:text-end">
              <AppTitle
                title="© 2023 Copyrights Currencygram. All rights are reserved."
                className="text-sm font-medium text-[#4B5563] mb-4"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={2}></Col>
      </Row>
    </>
  );
};
