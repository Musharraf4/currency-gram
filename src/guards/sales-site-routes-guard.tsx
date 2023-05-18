export const SalesSiteRoutesGuard: React.FC<any> = (props: any) => {
  // console.log(props);
  // const { auth } = useAppSelector((state) => state);
  // const auth = getDataFromLocalStorage(LOCALSTORAGEAUTHUSERINFO);
  // in case of sale site     <Navigate to="/home" /> else    <Navigate to="/" />
  return <>{props.children}</>;
  // uncomment it if backend does not work
  // return <>{props.children}</>
};
