import { useState } from "react";
import GBPICON from "../../../assets/images/dashboard/gbp-icon.png";
import EUROICON from "../../../assets/images/dashboard/flag-for-european-union.svg";

const currencyName = [
  {
    title: (
      <div className="flex items-center justify-between w-full">
        <img src={GBPICON} alt="icons" />
        <span className="ml-1">GBP</span>
      </div>
    ),
    value: "GBP",
  },
  {
    title: (
      <div className="flex items-center justify-between w-full">
        <img src={EUROICON} alt="icons" />
        <span className="ml-1">EURO</span>
      </div>
    ),
    value: "EURO",
  },
];

const filterSelectBalance = (
  <div className="p-0 m-0">
    <p className="cursor-pointer bg-poper">Last 7 days</p>
    <p className="cursor-pointer bg-poper">This Month</p>
    <p className="cursor-pointer bg-poper">Last Month</p>
  </div>
);

const useBalanceCard = () => {
  const [currency, setCurrency] = useState(currencyName[0]);

  const handleCurrencyChange = (value: any) => {
    // console.log(value);
    setCurrency(value);
  };

  return { filterSelectBalance, currencyName, handleCurrencyChange, currency };
};

export default useBalanceCard;
