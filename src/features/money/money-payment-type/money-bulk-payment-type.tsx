import { useEffect } from "react";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { clearCurrentStep } from "../../../store/layout/layout-slice";
import { clearBulkPaymentEditForm } from "../../../store/send-money/send-money-slice";
import { ImportCsvDataTemplate } from "../../../templates/import-csv-data/import-csv-data";
import { SearchableAddTable } from "../../../templates/searchable-add-table/searchable-add-table";
import { SendMoneyForm } from "../../../templates/send-money-form/send-money-form";
import { useMoneyPaymentType } from "./use-money-payment-type";
import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";
import { MONEYPAYMENTTYPEDATA } from "./money-payment-type-data";

export const MoneyBulkPaymentType = () => {
  const {
    onEditSuccess,
    onEditFailed,
    bulkPaymentTableFilterButton,
    layout,
    csvData,
    setCsvData,
    bulkPaymentViewAllTableFilterButton,
    fileUploadSuccess,
    setFileUploadSuccess,
    fileInfo,
    setFileInfo,
    csvErrorData,
    setCsvErrorData,
    dispatch,
    beneficiaryInputData,
    sendMoney,
    isDeleting,
    setIsDeleting,
    onConfirmDelete,
    isAdded,
    setIsAdded,
    onConfirmAdd,
  } = useMoneyPaymentType();

  useEffect(() => {
    return () => {
      dispatch(clearBulkPaymentEditForm());
      dispatch(clearCurrentStep());
    };
  }, []);

  return (
    <>
      {layout.currentStep === 0 ? (
        <ImportCsvDataTemplate
          buttons={bulkPaymentTableFilterButton}
          dataSource={csvErrorData}
          columns={MONEYPAYMENTTYPEDATA.moneyPaymentTypeColumns?.(dispatch, layout, setIsDeleting)}
          csvData={csvData}
          setCsvData={setCsvData}
          filterHeading="Choose File"
          fileUploadSuccess={fileUploadSuccess}
          setFileUploadSuccess={setFileUploadSuccess}
          fileInfo={fileInfo}
          setFileInfo={setFileInfo}
          csvErrorData={csvErrorData}
          setCsvErrorData={setCsvErrorData}
          rowClassName={(record: any, index: any) => "text-danger"}
        />
      ) : layout.currentStep === 1 ? (
        <SearchableAddTable
          dataSource={csvData}
          columns={MONEYPAYMENTTYPEDATA.moneyPaymentTypeColumns?.(dispatch, layout, setIsDeleting)}
          filterHeading="Choose File"
          buttons={bulkPaymentViewAllTableFilterButton}
          headXs={24}
          headLg={8}
          btnXs={24}
          btnLg={12}
          offsetLg={4}
          offsetXs={24}
        />
      ) : (
        <>
          {" "}
          <AppCardWhite cardClassName="pt-2 pb-24 pl-4 pr-4">
            <SendMoneyForm
              FormInputField={beneficiaryInputData}
              initialValues={sendMoney?.bulkPaymentEditForm}
              onFinish={(e: any) => onEditSuccess?.(e)}
              onFinishFailed={(e: any) => onEditFailed(e)}
              firstButtonText="Update"
            />
          </AppCardWhite>
        </>
      )}
      {isDeleting && (
        <AppModal
          isModalOpen={isDeleting}
          handleOk={() => setIsDeleting?.(false)}
          handleCancel={() => setIsDeleting?.(false)}
          submitBtnFunction={(e: any) => onConfirmDelete?.(e)}
          heading="Are you sure you want to delete this record"
          avatarClassName="text-2xl bg-danger p-4"
          avatarSize={60}
          src={COMMONASSETSCONSTANT.wastedImage}
          headingClassName="my-3"
          firstButtonText="Yes"
          secondButtonText="No"
        />
      )}
      {isAdded && (
        <AppModal
          isModalOpen={isAdded}
          handleOk={() => setIsAdded?.(false)}
          handleCancel={() => setIsAdded?.(false)}
          submitBtnFunction={(e: any) => onConfirmAdd?.(e)}
          heading="Beneficiary will be added without the error rows"
          avatarClassName="text-5xl"
          headingClassName="my-3"
          avatarSize={70}
          src={COMMONASSETSCONSTANT.infoAddImage}
          firstButtonText="Add"
          secondButtonText="Cancel"
        />
      )}
    </>
  );
};
