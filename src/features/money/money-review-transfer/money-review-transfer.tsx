import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { AccountDetailsTemplate } from "../../../templates/account-details/account-details";
import { reviewData } from "./money-review-transfer-data";
import info from "../../../assets/icons/info.svg";
import { setCurrentStep } from "../../../store/layout/layout-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useAppLayout } from "../../../hooks/use-app-layout";

export const MoneyTransferReview = () => {
  const [willPaid, setWillPaid] = useState(false);
  const dispatch = useAppDispatch();
  const { layout } = useAppSelector((state) => state);
  const { bannerHeading } = useAppLayout();
  const onConfirmPaid = (e: any) => {
    console.log("hi");
    dispatch(
      setCurrentStep<any>({
        currentStep: 3,
        previousStep: layout?.currentStep,
      })
    );
  };
  const onConfirmReview = (e: any) => {
    console.log("hi");
    setWillPaid(true);
  };

  useEffect(() => {
    bannerHeading("Review Transfer");
  }, []);

  return (
    <>
      <AppCardWhite cardClassName="pt-4 pb-4">
        <Row>
          <Col xs={2} md={4} lg={8}></Col>
          <Col xs={20} md={16} lg={8}>
            <div className="text-center">
              <AccountDetailsTemplate
                accountInfo={reviewData}
                buttonText="Confirm"
                submitBtnFunction={(e: any) => onConfirmReview?.(e)}
              />
            </div>
          </Col>
          <Col xs={2} md={4} lg={8}></Col>
        </Row>
      </AppCardWhite>
      {willPaid && (
        <AppModal
          isModalOpen={willPaid}
          handleOk={() => setWillPaid?.(false)}
          handleCancel={() => setWillPaid?.(false)}
          submitBtnFunction={(e: any) => onConfirmPaid?.(e)}
          heading="Are you sure ?"
          description="If you’re unsecure, don’t pay them as we may not be able to help you  get your money back."
          avatarClassName="text-5xl bg-primary"
          headingClassName="my-3"
          avatarSize={70}
          src={info}
          firstButtonText="Done"
          secondButtonText="No, Go Back"
        />
      )}
    </>
  );
};
