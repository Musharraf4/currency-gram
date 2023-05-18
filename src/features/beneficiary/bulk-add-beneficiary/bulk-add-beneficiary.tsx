import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { ImportCsvDataTemplate } from "../../../templates/import-csv-data/import-csv-data";
import { SearchableAddTable } from "../../../templates/searchable-add-table/searchable-add-table";
import { SendMoneyForm } from "../../../templates/send-money-form/send-money-form";

import { useBulkAddBeneficiary } from "./use-bulk-add-beneficiary";
import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";
import { BULKADDBENEFICIARYDATA } from "./bulk-add-beneficiary-data";

export const BulkAddBeneficiary = () => {
  const {
    layout,
    bulkbeneficiaryTableFilterButton,
    csvErrorData,
    beneficiary,
    dispatch,
    setIsDeleting,
    csvData,
    bulkbeneficiaryViewAllTableFilterButton,
    setCsvData,
    fileInfo,
    setFileInfo,
    beneficiaryInputData,
    onEditSuccess,
    onEditFailed,
    fileUploadSuccess,
    setFileUploadSuccess,
    setCsvErrorData,
    isDeleting,
    isAdded,
    setIsAdded,
    onConfirmDelete,
    onConfirmAdd,
  } = useBulkAddBeneficiary();

  return (
    <>
      {layout.currentStep === 0 ? (
        <ImportCsvDataTemplate
          buttons={bulkbeneficiaryTableFilterButton}
          dataSource={csvErrorData}
          csvFileInfoState={beneficiary}
          columns={BULKADDBENEFICIARYDATA.bulkAddBeneficiarycolumns?.(
            dispatch,
            layout,
            setIsDeleting
          )}
          filterHeading="Choose File"
          csvData={csvData}
          setCsvData={setCsvData}
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
          columns={BULKADDBENEFICIARYDATA.bulkAddBeneficiarycolumns?.(
            dispatch,
            layout,
            setIsDeleting
          )}
          filterHeading="Choose File"
          buttons={bulkbeneficiaryViewAllTableFilterButton}
          headXs={24}
          btnXs={24}
          offsetXs={24}
          offsetLg={4}
          headLg={8}
          btnLg={12}
        />
      ) : (
        <>
          {" "}
          <AppCardWhite cardClassName="pt-2 pb-24 pl-4 pr-4">
            <SendMoneyForm
              FormInputField={beneficiaryInputData}
              initialValues={beneficiary.bulkBeneficiaryEditForm}
              onFinish={(e: any) => onEditSuccess?.(e)}
              onFinishFailed={(e: any) => onEditFailed?.(e)}
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
          headingClassName="my-3"
          avatarSize={60}
          src={COMMONASSETSCONSTANT.wastedImage}
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
