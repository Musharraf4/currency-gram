import { Col, Row } from "antd";
import { AccountDetailsTemplate } from "../../../templates/account-details/account-details";
import { paymentApprovalData } from "./requests-details-data";
import { useRequestsDetails } from "./use-requests-details";

export const RequestsDetailsPayment = () => {
  const { onPaymentApprove, paymentApprovalButton } = useRequestsDetails();
  return (
    <>
      <Row>
        <Col xs={2} md={4} lg={8}></Col>
        <Col xs={20} md={16} lg={8}>
          <div className="text-center">
            <AccountDetailsTemplate
              accountInfo={paymentApprovalData}
              // buttonText="Approve Transfer"
              buttons={paymentApprovalButton}
              submitBtnFunction={(e: any) => onPaymentApprove?.(e)}
            />
          </div>
        </Col>
        <Col xs={2} md={4} lg={8}></Col>
      </Row>
    </>
  );
};
