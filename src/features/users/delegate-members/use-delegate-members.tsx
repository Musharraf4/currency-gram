import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  hideBanner,
  setGrid,
  setGridDefault,
  showBanner,
} from "../../../store/layout/layout-slice";
import { useAppDispatch } from "../../../store/store";
import { delegateMembersDropDownMenuItemFunction } from "./delegate-members-data";

export const useDelegateMembers = () => {
  const delegateMembersDropDownMenuItem = delegateMembersDropDownMenuItemFunction();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const colorPill = (e: any) => {
    // console.log(e);
    if (e === "inActive") return "text-danger bg-background-error";
    if (e === "Active") return "text-success bg-background-success";
  };

  useEffect(() => {
    dispatch(hideBanner());
    dispatch(setGrid<any>({ offsetXs: 0, offsetMd: 0, offsetLg: 0, mainLg: 24 }));
    return () => {
      dispatch(showBanner());
      dispatch(setGridDefault());
    };
  }, []);

  return {
    colorPill,
    navigate,
    delegateMembersDropDownMenuItem,
  };
};
