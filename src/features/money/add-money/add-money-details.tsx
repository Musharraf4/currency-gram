import { useEffect, useState } from "react";
import { CardDetailsCard } from "../../../templates/card-details-card/card-details-card";
import { AppDynamicForm } from "../../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { useNavigate } from "react-router-dom";
import { AppMoneyAddedModal } from "../../../components/modals/app-money-added-modal/app-money-added-modal";
import { ADDMONEYDATA } from "./add-money-data";

export const AddMoneyDetails = () => {
  const navigate = useNavigate();
  const addMoneyField = ADDMONEYDATA.addMoneyFieldFuntion();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (e: any) => {
    console.log(e);
    setIsModalOpen(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <AppDynamicForm formFields={ADDMONEYDATA.totalBalanceField} fieldMd={24} fieldXs={24} />
      <CardDetailsCard />
      <AppDynamicForm
        formFields={addMoneyField}
        onFinish={(e: any) => onFinish?.(e)}
        firstButtonText="Add Money"
        fieldMd={24}
        fieldXs={24}
        formClassName={"mt-5"}
        submitBtnClassName="w-full"
      />

      <AppMoneyAddedModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        loading={loading}
        buttonFunction={() => {
          setIsModalOpen(false);
          navigate("/");
        }}
      />
    </div>
  );
};
