import { Col, Image } from "antd";
import React from "react";
import NoUserImg from "../../assets/images/teams/no-active-user.svg";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const EmptyListTemplate = (props: any) => {
  const { buttonData, title } = props;
  return (
    <div>
      <Col className=" text-center py-52">
        <Image height={220} preview={false} src={NoUserImg} />
        <AppTitle className="mt-5 text-base font-semibold"  title={title} />
        <Col className="flex justify-center">
          <AppButton buttons={buttonData} />
        </Col>
      </Col>
    </div>
  );
};
