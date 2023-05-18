import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppAlert } from "./components/feedback/app-alert/use-app-alert";
import { SIGNINPATH } from "./constants/routes-constant";
// import { useNavigate } from "react-router-dom";

import Routing from "./routes/routes";
// import { setLoginSuccess } from "./store/auth/auth-slice";
import { setReferenceData } from "./store/reference-data/reference-data-slice";
import { useAppDispatch, useAppSelector } from "./store/store";
import { getDataFromLocalStorage } from "./utils/browser-storage-utils";
import { setLoginSuccess } from "./store/auth/auth-slice";
import {
  LOCALSTORAGEAUTHUSERINFO,
  LOCALSTORAGEREFERENCEDATA,
  LOCALSTORAGEUSERLOGGEDINTIME,
} from "./constants/browser-storage-constant";
import { hideAlertMessage } from "./store/alert/alert-slice";
// import { myUserProfileDataThunk } from "./store/personal-user/personal-user-thunk-actions";

const isAuth = getDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);

const data: any = {
  token: isAuth?.token,
  user: isAuth?.user,
  role: isAuth?.role,
};

// console.log(data)
const referenceData = getDataFromLocalStorage(LOCALSTORAGEREFERENCEDATA);

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { alert } = useAppSelector((state) => state);
  const { openAlert } = useAppAlert();

  useEffect(() => {
    if (!!isAuth?.token) {
      dispatch(setLoginSuccess(data));
    }
  }, []);

  // useEffect(() => {
  //   if (alert?.showAlert) {
  //     const alertTimer = setTimeout(() => {
  //       dispatch(hideAlertMessage());
  //     }, 3000);
  //     return () => clearTimeout(alertTimer);
  //   }
  // }, [dispatch]);

  // console.log(isAuth);
  // useEffect(() => {
  //   console.log(!!isAuth?.token);
  //   navigate(!!isAuth?.token ? "/dashboard" : "/home");
  // }, [isAuth?.token]);
  // useEffect(() => {

  //   if (!!isAuth?.token) {
  // personal details api call
  //     dispatch(myPersonalDetailsThunk({ axiosInstance, openAlert }))
  //   }
  // }, [])

  // useEffect(() => {
  //   if (!!referenceData) {
  //     dispatch(setReferenceData(referenceData))
  //     return
  //   }
  //   dispatch(referenceDataThunk({ axiosInstance , openAlert }))
  // }, [])

  return <Routing />;
}

export default App;
