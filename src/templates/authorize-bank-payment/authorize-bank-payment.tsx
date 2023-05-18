import { Avatar, Button, Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const AuthorizeBankPaymentTemplate = (props: any) => {
  const {
    mainHeading,
    senderName,
    senderImage,
    senderId,
    isSinglePayment,
    receiverImage,
    receiverName,
    receiverId,
    isPaymentSchedule,
    formFields,
    totalpayment,
    totalPersons,
    setIsOtpOpen,
    onFinish,
    onFinishFailed,
  } = props;

  return (
    <>
      <div className="pt-4 pb-4  mx-auto text-center">
        <AppTitle
          className="font-semibold text-xl text-primary-text mb-8"
          title={mainHeading || "Authorize Online Banking Payment to"}
        />
        <Row className="mb-8 items-center justify-space-between">
          <Col xs={24} sm={11}>
            <div>
              <Avatar src={senderImage || ""} alt={senderName} size="large">
                {senderName?.slice(0, 1)?.toUpperCase()}
              </Avatar>
            </div>
            <AppTitle
              className="font-medium text-sm text-primary-text my-1"
              title={senderName || "David Miller"}
            />
            <AppTitle
              className="font-medium text-xs text-dull-grey"
              title={senderId || "xx-xx-xx-x-x-x-xx"}
            />
          </Col>
          <Col xs={24} sm={2}>
            <ICONSCONSTANT.ArrowRightOutlined className="text-primary text-xl hidden sm:block" />
            <ICONSCONSTANT.ArrowDownOutlined className="text-primary text-xl sm:hidden" />
          </Col>
          <Col xs={24} sm={11}>
            {isSinglePayment ? (
              <>
                <div>
                  <Avatar src={receiverImage || ""} alt={receiverName} size="large">
                    {receiverName?.slice(0, 1)?.toUpperCase()}
                  </Avatar>
                </div>
                <AppTitle
                  className="font-medium text-sm text-primary-text my-1"
                  title={receiverName || "David Miller"}
                />
                <AppTitle
                  className="font-medium text-xs text-dull-grey"
                  title={receiverId || "xx-xx-xx-x-x-x-xx"}
                />
              </>
            ) : (
              <>
                <Avatar.Group>
                  <Avatar src="https://joeschmoe.io/api/v1/random" size="large" />
                  <Avatar style={{ backgroundColor: "#f56a00" }} size="large">
                    K
                  </Avatar>
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    size="large"
                    icon={<ICONSCONSTANT.UserOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1890ff" }}
                    size="large"
                    icon={<ICONSCONSTANT.AntDesignOutlined />}
                  />
                </Avatar.Group>
                <AppTitle
                  className="font-medium text-sm text-primary-text"
                  title={"Bulk Payment"}
                />
              </>
            )}
          </Col>
        </Row>

        <AppTitle
          className="font-medium text-4xl mb-1 text-primary-text mt-8"
          title={`$${totalpayment || "300"}`}
        />
        {!!!isSinglePayment && (
          <AppTitle
            className="font-medium text-sm text-primary-text mb-6"
            title={`Total Payment: ${totalPersons || "2"}`}
          />
        )}
        {isPaymentSchedule && (
          <AppDynamicForm
            formFields={formFields}
            firstButtonText="Confirm Payment"
            secondButtonText="Cancel"
            submitBtnClassName="w-full"
            cancelBtnClassName="w-full"
            onFinish={(e: any) => onFinish?.(e)}
            onFinishFailed={(e: any) => onFinishFailed?.(e)}
          />
        )}
        {!!!isPaymentSchedule && (
          <div className="mb-4 mt-4">
            <Button
              type="primary"
              onClick={() => {
                console.log("hi");
                setIsOtpOpen?.(true);
              }}
              block
              className="h-fit"
              size="large"
            >
              Confirm Payment
            </Button>

            <Button type="text" block className="h-fit bg-white text-primary mt-4">
              Cancel
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
