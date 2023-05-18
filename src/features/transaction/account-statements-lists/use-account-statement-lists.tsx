import { useNavigate } from "react-router-dom";
import { accountStatementTableColums } from "./account-statements-data";

const useAccountStatementLists = () => {
    const navigate = useNavigate();
    const accountStatementHeader = accountStatementTableColums(navigate);
  const colorPill = (e: any) => {
    // console.log(e);
    if (e === "Rent") return "text-white text-center rounded-2xl w-9 bg-[#EF476F]";
    if (e === "Business") return "text-white text-center rounded-2xl w-16 bg-[#117E4D]";
    if (e === "Groceries") return "text-white text-center rounded-2xl w-16 bg-[#DDAD3E]";
    if (e === "Sales") return "text-white text-center rounded-2xl w-10 bg-[#06D6A0]";
    if (e === "Cash Gift") return "text-white text-center rounded-2xl w-16 bg-[#6ACDFD]";
  };
  return {accountStatementHeader,navigate,colorPill};
};

export default useAccountStatementLists;
