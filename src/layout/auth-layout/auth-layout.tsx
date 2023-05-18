import { Outlet } from "react-router-dom";
import { AppBrand } from "../../components/data-display/app-brand/app-brand";
import FullLogo from "../../assets/logo/full-logo.svg";
import authRight from "../../assets/images/auth/auth-right.svg";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { AppAlert } from "../../components/feedback/app-alert/app-alert";
import { Col, Row } from "antd";
import { useEffect } from "react";
import { hideAlertMessage } from "../../store/alert/alert-slice";
import { useAppAlert } from "../../components/feedback/app-alert/use-app-alert";

export const AuthLayout = () => {
  const { alert } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { closeAlert } = useAppAlert();

  useEffect(() => {
    dispatch(hideAlertMessage());
    return () => {
      closeAlert();
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col bg-[url('../src/assets/images/auth/bg-auth-dot.png')] bg-no-repeat bg-left-bottom relative">
      <div className="mb-2 mt-4 md:mt-8 h-16 md:h-20 sticky w-full top-0 z-50">
        <AppBrand
          brandLogoContainerClassName="ml-4 lg:ml-16 h-full max-w-[200px]"
          imageClassName="w-full"
          routelink="/home"
          brandSrc={FullLogo}
        />
      </div>
      <Row>
        <Col xs={24} md={8}></Col>
        <Col xs={24} md={8} className="text-center">
          {alert.showAlert && <AppAlert />}
        </Col>
        <Col xs={24} md={8}></Col>
      </Row>
      <div className="grow">
        <Outlet />
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 -z-50">
        <div className="mr-8 float-right mb-1 mt-5">
          <img src={authRight} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
