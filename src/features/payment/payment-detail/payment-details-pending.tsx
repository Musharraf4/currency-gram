import { Col, Row } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { useAppDispatch } from "../../../store/store";
import { ReceiptDetailTemplate } from "../../../templates/receipt-detail/receipt-detail";
import { paymentDetails } from "./payment-detail-data";

export const PaymentDetailsPending = () => {
  const { transferType, paymentType } = useParams();
  const { bannerHeading } = useAppLayout();
  const { openAlert } = useAppAlert();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    bannerHeading("Payment Details");
  }, []);
  return (
    <AppCardWhite cardClassName="pt-20 pb-20">
      <Row>
        <Col xs={2} md={4} lg={8}></Col>
        <Col xs={20} md={16} lg={8}>
          <ReceiptDetailTemplate
            paymentDetails={paymentDetails}
            // onClose={() => navigate(`${SENDMONEYPATH}`)}
            // paymentType={paymentType}
          />
        </Col>
        <Col xs={2} md={4} lg={8}></Col>
      </Row>
    </AppCardWhite>
  );
};
