import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { hideAlertMessage } from "../../store/alert/alert-slice";

export const useMainLayout = () => {
  const { openDrawer } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(hideAlertMessage());
    return () => {
      dispatch(hideAlertMessage());
    };
  }, [dispatch]);

  return { openDrawer };
};
