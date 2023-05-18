import { useState } from "react";
import { CasesDetailsTemplate } from "../../../templates/cases-details-template/cases-details-template";
import receiptImage from "../../../assets/icons/receipt.svg";
import { TransactionModal } from "../../../components/modals/transaction-modal/transaction-modal";
import { AppCommentsModal } from "../../../components/modals/app-comments-modal/app-comments-modal";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";
import { CASEDETAILSDATA } from "./case-details-data";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const CaseDetail = () => {
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);

  return (
    <>
      <AppCardWhite>
        <UserDetailCard
          size={55}
          userDetailsClassName="px-5 py-10 items-center"
          userInfoClassName="flex-1 ml-2"
          icon={<ICONSCONSTANT.ArrowUpOutlined />}
          avatarStyle={{ backgroundColor: "#B51629" }}
          heading="Case ID: AB-1-20457496"
          headingClassName="text-base font-medium"
          description="Issue Type: Transaction"
          descriptionClassName="text-xs font-normal text-grey mt-1"
          userPriceClassName="text-2xl font-bold text-secondary"
        />
      </AppCardWhite>
      <CasesDetailsTemplate
        infoCardHeading={"Case Details"}
        caseDetails={CASEDETAILSDATA.caseDetails?.map((caseDetail: any) => caseDetail)}
        problemDetails={CASEDETAILSDATA.problemDetailsData}
        openTransactionModal={() => setShowTransactionModal(true)}
        showAllFunction={() => setShowCommentsModal(true)}
        commentsCardData={CASEDETAILSDATA.commentsCardData}
        confirmationCardHeading={
          "Is your case resolved? If you don't answer, case will be closed after 2 days."
        }
        icon={<ICONSCONSTANT.InfoCircleOutlined />}
        confirmationBtnFunction1={() => console.log("s")}
        confirmationBtnFunction2={() => console.log("sa")}
      />
      {showTransactionModal && (
        <TransactionModal
          isModalOpen={showTransactionModal}
          handleOk={() => setShowTransactionModal?.(false)}
          handleCancel={() => setShowTransactionModal?.(false)}
          heading="Transaction Details"
          avatarClassName="text-2xl bg-primary p-4"
          avatarSize={60}
          headingClassName="my-3 font-semibold text-xl"
          src={receiptImage}
          data={CASEDETAILSDATA.transactionDetailData}
        />
      )}
      {showCommentsModal && (
        <AppCommentsModal
          isModalOpen={showCommentsModal}
          handleOk={() => setShowCommentsModal?.(false)}
          handleCancel={() => setShowCommentsModal?.(false)}
          heading="Case Reopen Reasons"
          data={CASEDETAILSDATA.commentsModalData}
        />
      )}
    </>
  );
};
