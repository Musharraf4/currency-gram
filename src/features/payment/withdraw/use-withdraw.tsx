import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppLayout } from "../../../hooks/use-app-layout";

export const useWithdraw = () => {
  const navigate = useNavigate();
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Withdrawal");
    pageName("Single Payment");
  }, []);
  return {
    navigate,
  };
};
