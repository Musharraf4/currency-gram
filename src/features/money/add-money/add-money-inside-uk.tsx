import { useState } from "react";
import { AppShareModal } from "../../../components/modals/app-share-modal/app-share-modal";
import { AddMoneyBankTransferTemplate } from "../../../templates/add-money-bank-transfer-template/add-money-bank-transfer-template";

const accountDetails = [
  { id: 1, title: "Account Holder:", value: "Usman Basit" },
  { id: 2, title: "Email:", value: "usman.b@gmail.com" },
  { id: 3, title: "Sort Code:", value: "654321" },
  { id: 4, title: "Account Number:", value: "87654321" },
  { id: 5, title: "IBAN:", value: "GB82 WEST 1234 5678 7654 32" },
];
export const AddMoneyInsideUK = ({ showComponent, setShowComponent }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {showComponent && (
        <AddMoneyBankTransferTemplate
          showComponent={showComponent}
          setShowComponent={setShowComponent}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          accountDetails={accountDetails}
          title={
            "These are account details used to add or receive Euro from bank accounts inside the UK."
          }
          handleCancel={handleCancel}
          showModal={showModal}
        />
      )}
      <AppShareModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </>
  );
};
