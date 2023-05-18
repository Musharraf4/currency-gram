import { useEffect } from "react";
import { USERROLES } from "../../../constants/roles-constant";
import {
  hideBanner,
  setGrid,
  setGridDefault,
  showBanner,
} from "../../../store/layout/layout-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import BusinessDashboard from "./business-dashboard";
import DelegateMemberDashboard from "./delegate-member-dashboard";
import PersonalDashboard from "./personal-dashboard";

export const Dashboard = () => {
  const { auth } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hideBanner());
    dispatch(setGrid<any>({ offsetXs: 0, offsetMd: 0, offsetLg: 0, mainLg: 24 }));
    return () => {
      dispatch(setGridDefault());
    };
  }, [dispatch]);

  return (
    <div>
      {auth.role.includes(USERROLES.ROLEPRIORITY2) ? (
        <BusinessDashboard />
      ) : auth.role.includes(USERROLES.ROLEPRIORITY5) ? (
        <DelegateMemberDashboard />
      ) : auth.role.includes(USERROLES.ROLEPRIORITY3) ? (
        <PersonalDashboard />
      ) : (
        ""
      )}
    </div>
  );
};
