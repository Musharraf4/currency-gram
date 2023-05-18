import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { AppBanner } from "../../components/app-banner/app-banner";

export const SpecialLayout = () => {
  const { layout } = useAppSelector((state) => state);
  return (
    <Row className="bg-[url('../src/assets/logo/bg-main.png')] bg-no-repeat bg-right-bottom min-h-screen">
      <Col xs={1}></Col>
      <Col xs={22}>
        {layout.showBanner && (
          <AppBanner navigateFunction={() => {}} imgSrc={""} bannerHeading={layout.bannerHeading} />
        )}
        <Row>
          <Col xs={layout.offsetXs} md={layout.offsetMd}></Col>
          <Col xs={layout.mainXs} md={layout.mainMd} lg={layout.mainLg}>
            <div
              className={`${layout.showBanner && "-mt-16"}`}
              style={{ backgroundImage: `url(${layout?.backgroundImage})` }}
            >
              <div>
                <Outlet />
              </div>
            </div>
          </Col>
          <Col xs={layout.offsetXs} md={layout.offsetMd}></Col>
        </Row>
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
};
