import { Navigate } from "react-router-dom";
import { LOCALSTORAGEAUTHUSERINFO } from "../constants/browser-storage-constant";
import { getDataFromLocalStorage } from "../utils/browser-storage-utils";

export const PublicRoutesGuard: React.FC<any> = (props: any) => {
  const auth = getDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);
  // in case of sale site     <Navigate to="/home" /> else    <Navigate to="/" />
  return !auth?.token ? <>{props.children}</> : <Navigate to="/dashboard" />;
  // uncomment it if backend does not work
  // return <>{props.children}</>
};
