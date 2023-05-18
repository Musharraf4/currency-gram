import { Col, Row } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { AppBanner } from "../../components/app-banner/app-banner";
import { setCurrentStep } from "../../store/layout/layout-slice";
import { COMMONASSETSCONSTANT } from "../../constants/common-assets-constant";

export const BodyMainLayout = () => {
  const { layout } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const th = (b: any) => {
    if (!!b) {
      const newb = b - 1;
      dispatch(
        setCurrentStep<any>({
          currentStep: layout.previousStep,
          previousStep: layout.previousStep > 0 ? layout.previousStep - 1 : 0,
        })
      );
      return;
    }
    const nav: any = layout.restrictGoBack ? "#" : -1;
    navigate?.(nav);
  };

  return (
    <>
      <Row>
        <Col xs={1}></Col>
        <Col xs={22}>
          {layout.showBanner && (
            <AppBanner
              navigateFunction={() => th?.(layout.currentStep)}
              imgSrc={COMMONASSETSCONSTANT.goBackImage}
              bannerHeading={layout.bannerHeading}
            />
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
    </>
  );
};
