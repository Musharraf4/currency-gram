import { Col, Row } from "antd";
import { useState } from "react";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { ActivityTemplate } from "../../../templates/activity/activity";
import { loginActivityDataFunction } from "./login-activity-data";
import removed from "../../../assets/icons/removed.svg";

export const LoginActivity = () => {
  const loginActivityData = loginActivityDataFunction();
  const [isRemove, setIsRemove] = useState(false);
  const onConfirmRemove = (e: any) => {
    setIsRemove(false);
  };
  return (
    <>
      <Row>
        <Col xs={1} lg={4}></Col>
        <Col xs={22} lg={16}>
          <ActivityTemplate
            simpleCardData={loginActivityData}
            mainHeading="Login Activity"
            buttonText="Remove Details From Everywhere"
            btnFunction={(e: any) => setIsRemove(true)}
          />
        </Col>
        <Col xs={1} lg={4}></Col>
      </Row>
      {isRemove && (
        <AppModal
          isModalOpen={isRemove}
          handleOk={() => setIsRemove?.(false)}
          handleCancel={() => setIsRemove?.(false)}
          submitBtnFunction={(e: any) => onConfirmRemove?.(e)}
          heading="Remove details from everywhere"
          subHeading="Are you sure you want to remove details of your Currency Gram account on all devices?"
          description="Note - when you remove details, you’ll be asked to reset your password next time you log in."
          avatarClassName="text-5xl bg-primary p-1"
          descriptionClassName="font-semibold mt-2"
          subHeadingClassName="!font-normal"
          headingClassName="my-3"
          avatarSize={40}
          src={removed}
          firstButtonText="Confirm"
        />
      )}
    </>
  );
};
