import { Row, Col, Space, Popover } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const GiftDetailsFormTemplate = (props: any) => {
  const { popOverContent, giftDetailsFields, onFinish, text1, text2, text3, text4 } = props;
  return (
    <Row className="py-10 justify-center">
      <Col md={16} sm={20} xs={23} lg={10}>
        <Space wrap className="flex justify-between flex-wrap sm:px-4">
          <Space wrap size={2}>
            <AppTitle title={text1} className="text-xs" />
            <AppTitle title={text2} className="text-xs text-primary" />

            <Popover content={popOverContent} trigger="hover" placement="bottom">
              <div></div>
              <AppTitle
                title={<ICONSCONSTANT.InfoCircleOutlined />}
                className="text-xs text-primary cursor-pointer"
              />
            </Popover>
          </Space>
          <Space wrap size={0}>
            <AppTitle title={text3} className="text-xs" />
            <AppTitle title={text4} className="text-xs text-primary" />
          </Space>
        </Space>
        {/* Form */}
        <AppDynamicForm
          formFields={giftDetailsFields}
          onFinish={(e: any) => onFinish?.(e)}
          firstButtonText="Continue"
          fieldMd={24}
          fieldXs={24}
          formClassName={"mt-5"}
          submitBtnClassName="w-full"
        />
      </Col>
    </Row>
  );
};
