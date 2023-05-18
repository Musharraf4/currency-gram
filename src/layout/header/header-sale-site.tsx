import { AppBrand } from "../../components/data-display/app-brand/app-brand";
import { HEADERDATA } from "./header-data";
import { NavLink, useNavigate } from "react-router-dom";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { Col, Row } from "antd";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { LOGOCONSTANT } from "../../constants/logo-constant";

export const HeaderSaleSite = () => {
  const navigate = useNavigate();
  const headerAuthButton = HEADERDATA.headerAuthButtonFunction(navigate);
  return (
    <Row className="flex items-center justify-between h-40 lg:h-20">
      <Col xs={1} lg={1}></Col>
      <Col xs={24} lg={4} className="">
        <AppBrand
          brandLogoContainerClassName="max-w-[200px]"
          imageClassName="w-full"
          routelink="/"
          brandSrc={LOGOCONSTANT.fullLogo}
        />
      </Col>
      <Col
        xs={24}
        lg={8}
        className="flex items-center justify-evenly text-center flex-wrap my-2 lg:my-0"
      >
        {!!HEADERDATA?.headerMenuData?.length &&
          HEADERDATA?.headerMenuData?.map((item: any) => (
            <NavLink
              to={item?.path}
              className={`menu-active font-medium text-base ml-3`}
              key={item?.id}
            >
              <AppTitle title={item.title} className="" />
            </NavLink>
          ))}
      </Col>
      <Col xs={24} lg={6} className=" text-center lg:text-end">
        <AppButton buttons={headerAuthButton} btnWrapperClassName="mt-0 lg:mt-0" />
      </Col>
      <Col xs={1} lg={1}></Col>
    </Row>
  );
};
