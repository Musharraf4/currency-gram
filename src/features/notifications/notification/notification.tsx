import { Avatar, Badge, Button, Dropdown, MenuProps } from "antd";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
// import { notificationHeaderData } from "./notification-data";

export const Notification = (props: any) => {
  const { notificationHeaderData = [], dropDownClassName } = props;
  const notifications = () => {
    const notificationsData: MenuProps["items"] = !!notificationHeaderData?.length
      ? notificationHeaderData?.map((item: any, index: any) => ({
          key: index,
          label: (
            <div key={item.id} className="flex items-center">
              <Avatar src={item?.src} alt="icon Image" size={40} className="bg-primary p-1" />
              <div className="text-start pl-4">
                <div className="margin-none normal text-xs text-primary-text"> {item?.title} </div>
                <div
                  className=" font-normal text-xs text-primary-text"
                  style={{ color: "#374151" }}
                >
                  {item.date}
                </div>
                <Button type="primary" size="small" className="text-xs">
                  Preview
                </Button>
              </div>
            </div>
          ),
        }))
      : [
          {
            key: 1,
            label: (
              <div className="flex h-60 w-48 items-center justify-center">
                <div className="text-center pl-4">
                  <div className="font-semibold text-xs text-center text-primary-text">
                    {" "}
                    No Notifications
                  </div>
                  <div
                    className=" font-normal text-xs text-primary-text"
                    style={{ color: "#374151" }}
                  ></div>
                </div>
              </div>
            ),
          },
        ];
    return notificationsData;
  };
  const items: MenuProps["items"] = notifications();
  console.log(items);

  return (
    <div>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="bottomRight"
        className={`cursor-pointer ${dropDownClassName}`}
      >
        <div onClick={(e) => e.preventDefault()} style={{ marginRight: "15px" }}>
          <Badge count={1} dot={true}>
            <ICONSCONSTANT.BellFilled className="text-2xl" />
          </Badge>
        </div>
      </Dropdown>
    </div>
  );
};
