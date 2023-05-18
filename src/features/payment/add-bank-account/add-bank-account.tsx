import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WITHDRAWALAMOUNTPATH } from "../../../constants/routes-constant";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { SendMoneyForm } from "../../../templates/send-money-form/send-money-form";
import { ADDBANKACCOUNTDATA } from "./add-bank-account-data";

export const AddBankAccount = () => {
  const [showField, setShowField] = useState(false);
  const navigate = useNavigate();
  const addBankAccountFormInputFields = ADDBANKACCOUNTDATA.addBankAccountFormInputFieldsFunction(
    showField,
    setShowField
  );
  const onAddBankAccountSuccess = (e: any) => {
    console.log(e);
    navigate(`${WITHDRAWALAMOUNTPATH}`);
  };
  const onAddBankAccountFailed = (e: any) => {
    console.log(e);
  };
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Add Bank Account");
    pageName("Single Payment");
  }, []);

  return (
    <SendMoneyForm
      FormInputField={addBankAccountFormInputFields}
      onFinish={(e: any) => onAddBankAccountSuccess?.(e)}
      onFinishFailed={(e: any) => onAddBankAccountFailed?.(e)}
      firstButtonText="Add New Account"
      secondButtonText="Cancel"
    />
  );
};
