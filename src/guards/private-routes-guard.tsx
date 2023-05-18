import { Navigate } from "react-router-dom";
import { LOCALSTORAGEAUTHUSERINFO } from "../constants/browser-storage-constant";
import { HOMEPATH, UNAUTHORIZEDPATH } from "../constants/routes-constant";
import { getDataFromLocalStorage } from "../utils/browser-storage-utils";

export const PrivateRoutesGuard: React.FC<any> = (props: any) => {
  const { allowedRoles } = props;
  const auth = getDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);

  // const  { auth } = useAppSelector(state => state)
  // in case of sale site     <Navigate to="/home" /> else    <Navigate to="/authentication/signin" />

  return !auth?.token ? (
    <Navigate to={HOMEPATH} />
  ) : auth?.role?.find((role: any) => allowedRoles?.includes(role)) ? (
    <> {props.children} </>
  ) : (
    <>
      {" "}
      <Navigate to={UNAUTHORIZEDPATH} />{" "}
    </>
  );
  // return <>{props.children}</>;
};
