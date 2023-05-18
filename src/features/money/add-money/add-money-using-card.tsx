import { Button, Col, Form, Input, Row, Space } from "antd";
import { useState } from "react";
import { PayWithCard } from "../../../templates/pay-with-card/pay-with-card";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AddMoneyDetails } from "./add-money-details";
import { ADDMONEYIMAGES } from "./add-money-images";

// TODO: code will be optimized during backend integration
export const AddMoneyUsingCard = () => {
  const [showComponent, setShowComponent] = useState(true);
  const [showMoneyDetails, setShowMoneyDetails] = useState(false);

  const onFinish = (values: any) => {
    console.log("🚀 ~ file: add-money-using-card.tsx:7 ~ onFinish ~ values:", values);
    setShowComponent(false);
  };

  return (
    <Row justify={"center"} className="px-2">
      <Col md={14} xs={24}>
        {!showMoneyDetails && (
          <>
            {showComponent && !!cardData.length && (
              <div className="max-h-80 overflow-y-auto">
                {cardData?.map((item: any) => {
                  return <PayWithCard item={item} onClick={() => setShowMoneyDetails(true)} />;
                })}
              </div>
            )}

            {showComponent && (
              <div className={`${!!!cardData.length ? "h-2/4 flex items-end" : "mt-4"}`}>
                <Button
                  size="large"
                  onClick={() => setShowComponent(false)}
                  className="bg-primary text-white  w-full"
                >
                  Add Card
                </Button>
              </div>
            )}
            {!showComponent && (
              <>
                <AppTitle
                  title="Enter your card details"
                  className="font-semibold text-xl text-center text-primary-text mb-4"
                />
                <AppTitle
                  title="These should match the information on your card."
                  className=" text-base text-center text-primary-text mb-4"
                />

                <Form onFinish={onFinish}>
                  <Form.Item name={"name"} rules={[{ required: true, message: "Required Field" }]}>
                    <Input size="large" placeholder="Name on card" />
                  </Form.Item>
                  <Form.Item
                    name={"card_number"}
                    rules={[{ required: true, message: "Required Field" }]}
                  >
                    <Input size="large" placeholder="Enter Card Number" type="number" />
                  </Form.Item>
                  <div className="flex" style={{ gap: "20px" }}>
                    <Form.Item
                      name={"expiry_date"}
                      rules={[{ required: true, message: "Required Field" }]}
                      style={{ width: "70%" }}
                    >
                      <Input size="large" placeholder="Expiry Date" type="number" />
                    </Form.Item>
                    <Form.Item
                      name={"cvv"}
                      rules={[{ required: true, message: "" }]}
                      style={{ width: "30%" }}
                    >
                      <Input size="large" placeholder="CVV" type="number" />
                    </Form.Item>
                  </div>
                  <Form.Item
                    name={"post_code"}
                    rules={[{ required: true, message: "Required Field" }]}
                  >
                    <Input size="large" placeholder="Enter Post Code" type="number" />
                  </Form.Item>
                  <Space wrap>
                    <img src={ADDMONEYIMAGES.visaImage} width={30} className="mb-1" alt="" />
                    <img src={ADDMONEYIMAGES.masterCardImage} alt="" />
                  </Space>
                  <Form.Item>
                    <Button
                      size={"large"}
                      htmlType="submit"
                      className=" bg-primary text-white w-full"
                    >
                      Add Card
                    </Button>
                  </Form.Item>
                  <div className="text-center">
                    <AppTitle
                      title="By making a payment, you agree to to our "
                      className=" text-primary-text"
                      Variant="span"
                    />

                    <AppTitle
                      title=" General Terms of Service"
                      className="text-primary cursor-pointer"
                      Variant="span"
                    />
                  </div>
                </Form>
              </>
            )}
          </>
        )}
        {showMoneyDetails && <AddMoneyDetails />}
      </Col>
    </Row>
  );
};

const cardData: any = [
  {
    id: 1,
    account_number: "3212121211",
    payWith: true,
  },
];
