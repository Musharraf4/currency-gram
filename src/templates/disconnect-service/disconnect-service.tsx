import { AppButtonControl } from "../../components/buttons/app-button-control/app-button-control";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const DisconnectServiceTemplates = (props: any) => {
  const { disconnectServiceData, mainHeading, mainTitle } = props;
  return (
    <>
      <AppTitle
        title={mainHeading}
        className="text-xl text-primary-text font-semibold mt-1 lg:mt-5 mb-2"
      />
      <AppTitle title={mainTitle} className="text-sm text-primary-text font-normal mb-4" />

      {disconnectServiceData?.length &&
        disconnectServiceData?.map?.((noti: any) => (
          <>
            <AppButtonControl
              fieldName={noti?.name}
              fieldNameClassName={noti?.notificationClassName}
              btnIcon={noti?.icon}
              mainBtnText={noti?.mainBtnText}
            />
            {/* <>
              {noti?.child.length &&
                noti?.child.map((k: any) => <AppSwitchControl notificationName={k.name} />)}
            </>
            <Divider></Divider> */}
          </>
        ))}
    </>
  );
};
