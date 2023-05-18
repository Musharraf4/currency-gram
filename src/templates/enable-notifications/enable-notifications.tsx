import { Divider } from "antd";
import { AppSwitchControl } from "../../components/form-elements/app-switch-control/app-switch-control";

export const EnableNotificationsTemplate = (props: any) => {
  const { notificationData, mainBtnIcon, mainNotificationName } = props;
  return (
    <>
      <AppSwitchControl
        notificationName={mainNotificationName}
        notificationClassName={"font-semibold ml-2"}
        btnIcon={mainBtnIcon}
        switchRowClassName="bg-disabled border-1 mb-8 border-solid border-disabled rounded-lg p-1 mx-4 mb-3 mt-2 md:mt-10 px-3 items-center"
      />
      <div className="mt-3 mb-3">
        {notificationData?.length &&
          notificationData?.map?.((noti: any, index: any) => (
            <>
              <AppSwitchControl
                notificationName={noti.name}
                notificationClassName={`!mt-3 !text-base ${noti.notificationClassName}`}
                buttonClassName="mb-2"
              />
              <>
                {noti?.child.length &&
                  noti?.child.map((k: any) => (
                    <AppSwitchControl
                      notificationName={k.name}
                      notificationClassName={`mb-3 mt-3 ${k.notificationClassName}`}
                      buttonClassName="mb-2"
                    />
                  ))}
              </>
              {index !== notificationData.length - 1 && (
                <Divider className="border-primary-text border-solid border-[.5px]"></Divider>
              )}
            </>
          ))}
      </div>
    </>
  );
};
