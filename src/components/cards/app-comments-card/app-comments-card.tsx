import { AppTitle } from "../../data-display/app-title/app-title";

export const AppCommentsCard = (props: any) => {
  const { showAllFunction, data } = props;
  return (
    <>
      <div className="flex justify-between ">
        <AppTitle title={data?.heading} className="font-semibold text-base text-secondary-text" />
        {data?.showModalText && (
          <AppTitle
            title={data?.modalText}
            onClick={() => showAllFunction?.()}
            className="font-medium text-xs text-primary cursor-pointer underline"
          />
        )}
      </div>
      <AppTitle title={data?.date} className="font-medium mt-3" />
      <AppTitle title={data?.comment} className="text-xs mt-1" />
    </>
  );
};
