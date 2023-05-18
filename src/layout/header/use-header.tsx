import { useState } from "react";
import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { HEADERDATA } from "./header-data";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { USERROLES } from "../../constants/roles-constant";
import { useAppAlert } from "../../components/feedback/app-alert/use-app-alert";
import { useLogoutMutation } from "../../services/auth/auth-endpoints";
import { asyncApiRequest } from "../../utils/api-utils";

export const useHeader = () => {
  const { openDrawer } = useAppSelector((state) => state.layout);
  const { auth } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { personalDetails } = useAppSelector((state) => state);
  const { layout } = useAppSelector((state) => state);
  const { alert } = useAppSelector((state) => state);
  const { openAlert } = useAppAlert();
  const headerCommunityButton = HEADERDATA.headerCommunityButtonFunction();
  const [isLogged, setIsLogged] = useState();

  const [logoutTrigger, logoutStatus] = useLogoutMutation();

  const signoutSubmitHandlerSuccess = async (values: any) => {
    await asyncApiRequest(logoutTrigger({ body: null }), openAlert);
  };

  const headerDropdownBusiness: MenuProps["items"] = HEADERDATA.headerDropdownBusinessFunction(
    navigate,
    signoutSubmitHandlerSuccess
  );
  const headerDropdownPersonal: MenuProps["items"] = HEADERDATA.headerDropdownPersonalFunction(
    navigate,
    signoutSubmitHandlerSuccess
  );
  const headerDropdownDelegate: MenuProps["items"] = HEADERDATA.headerDropdownDelegateFunction(
    navigate,
    signoutSubmitHandlerSuccess
  );
  const headerDropdownCommunity: MenuProps["items"] = HEADERDATA.headerDropdownCommunityFunction(
    dispatch,
    signoutSubmitHandlerSuccess
  );

  const headerDropdown = (authUser: any) => {
    if (authUser.includes(USERROLES.ROLEPRIORITY2)) return headerDropdownBusiness;
    if (authUser.includes(USERROLES.ROLEPRIORITY3)) return headerDropdownPersonal;
    if (authUser.includes(USERROLES.ROLEPRIORITY5)) return headerDropdownDelegate;
  };

  return {
    openDrawer,
    auth,
    dispatch,
    headerDropdown,
    layout,
    openAlert,
    personalDetails,
    alert,
    headerCommunityButton,
    isLogged,
    setIsLogged,
    headerDropdownCommunity,
  };
};
