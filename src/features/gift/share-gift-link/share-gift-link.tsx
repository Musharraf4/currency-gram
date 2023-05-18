import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { AppDynamicForm } from "../../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { SHAREGIFTLINKDATA } from "./share-gift-link-data";

export const ShareGiftLink = () => {
  const { bannerHeading, pageName } = useAppLayout();
  const [giftValue, setGiftValue] = useState("abc//abc.com");
  const sharedLinkFieldData = SHAREGIFTLINKDATA.sharedLinkFieldFunction(giftValue);
  const onFinish = (e: any) => {
    console.log(e);
  };
  useEffect(() => {
    bannerHeading("Gift  Details");
    pageName("Personalized gifts");
  }, []);
  return (
    <AppCardWhite>
      <Row justify={"center"} className="py-10 min-h-[70vh] ">
        <Col md={16} sm={20} xs={23} lg={10}>
          <AppDynamicForm
            formFields={sharedLinkFieldData}
            onFinish={(e: any) => onFinish?.(e)}
            firstButtonText="Continue"
            fieldMd={24}
            fieldXs={24}
            formClassName={"mt-5"}
            submitBtnClassName="w-full"
          />
        </Col>
      </Row>
    </AppCardWhite>
  );
};
