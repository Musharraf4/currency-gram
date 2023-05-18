import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { Col, Row } from "antd";
import { ReceiptDetailTemplate } from "../../../templates/receipt-detail/receipt-detail";
import { paymentDetails } from "./money-transfer-success-data";
import { GeneratedLinkTemplate } from "../../../templates/generated-link-template/generated-link-template";
import { useNavigate, useParams } from "react-router-dom";
import { SENDMONEYTYPEPARAMSCONSTANTS } from "../../../constants/params-constant";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useEffect } from "react";
import { clearRestrictGoBack, setRestrictGoBack } from "../../../store/layout/layout-slice";
import { useAppDispatch } from "../../../store/store";
import { SENDMONEYPATH } from "../../../constants/routes-constant";

export const MoneyTransferSuccess = () => {
  const { transferType, paymentType } = useParams();
  const { openAlert } = useAppAlert();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setRestrictGoBack());
    return () => {
      dispatch(clearRestrictGoBack());
    };
  }, []);
  return (
    <AppCardWhite cardClassName="pt-20 pb-20">
      <Row>
        <Col xs={2} md={4} lg={8}></Col>
        <Col xs={20} md={16} lg={8}>
          {transferType === SENDMONEYTYPEPARAMSCONSTANTS.link ? (
            <GeneratedLinkTemplate
              title="You're all set to share our link to anyone"
              inputValue="link"
              iconClick={() => {
                navigator.clipboard.writeText("abc");
                openAlert(`text copied`, "success");
              }}
              btnText="Share Link By"
            />
          ) : (
            <ReceiptDetailTemplate
              paymentDetails={paymentDetails}
              onClose={() => navigate(`${SENDMONEYPATH}`)}
              paymentType={paymentType}
            />
          )}
        </Col>
        <Col xs={2} md={4} lg={8}></Col>
      </Row>
    </AppCardWhite>
  );
};
