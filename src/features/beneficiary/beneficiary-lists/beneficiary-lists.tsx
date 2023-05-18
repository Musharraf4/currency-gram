import { useAppLayout } from "../../../hooks/use-app-layout";
import { useEffect, useState } from "react";

import { NavigatabelCardWithTable } from "../../../templates/navigatable-card-with-table.tsx/navigatable-card-with-table";
import { useNavigate } from "react-router-dom";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { BENEFICIARYLISTSDATA } from "./beneficiary-lists-data";
import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";

export const BeneficiaryLists = () => {
  const { bannerHeading, pageName } = useAppLayout();
  const [isDeleting, setIsDeleting] = useState(false);
  const { openAlert } = useAppAlert();
  const navigate = useNavigate();
  const onConfirmDelete = (e: any) => {
    // console.log(e);
    setIsDeleting(false);
    openAlert("Record Deleted", "error");
  };

  useEffect(() => {
    bannerHeading("Add Beneficiary");
    pageName("Beneficiary");
  }, []);

  const singleAndBulkBeneficiaryCard =
    BENEFICIARYLISTSDATA.singleAndBulkBeneficiaryCardFunction(navigate);

  return (
    <>
      <NavigatabelCardWithTable
        primaryCardData={singleAndBulkBeneficiaryCard}
        dataSource={BENEFICIARYLISTSDATA.dataSource}
        columns={BENEFICIARYLISTSDATA.addBeneficiaryColumns?.(navigate, setIsDeleting)}
        inputPlaceholder=" Name, @username, email, mobile"
        inputXs={24}
        selectXs={24}
        inputMd={8}
        selectMd={6}
        offsetMd={10}
        offsetXl={13}
        selectXl={3}
        select={true}
      />
      {isDeleting && (
        <AppModal
          isModalOpen={isDeleting}
          handleOk={() => setIsDeleting?.(false)}
          handleCancel={() => setIsDeleting?.(false)}
          submitBtnFunction={(e: any) => onConfirmDelete?.(e)}
          heading="Are you sure you want to delete this record"
          avatarClassName="text-2xl bg-danger p-4"
          avatarSize={60}
          headingClassName="my-3"
          src={COMMONASSETSCONSTANT.wastedImage}
          firstButtonText="Yes"
          secondButtonText="No"
        />
      )}
    </>
  );
};
