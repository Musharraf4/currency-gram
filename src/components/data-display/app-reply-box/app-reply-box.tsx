import { Avatar, Dropdown } from "antd";
import { AppTitle } from "../app-title/app-title";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const AppReplyBox = (props: any) => {
  const { imgSrc, replierName, replyTime, items, answer } = props;
  return (
    <>
      <div className="flex my-4">
        <Avatar src={imgSrc} alt="" shape="square" size="large"></Avatar>
        <div className="grow ml-3">
          <div className="bg-secondary-background p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div>
                <AppTitle
                  title={
                    <div>
                      {replierName}{" "}
                      <span className="ml-3 text-xs font-normal text-grey">{replyTime}</span>
                    </div>
                  }
                  className="text-sm font-medium text-secondary-text"
                />
              </div>
              <div>
                <Dropdown trigger={["click"]} menu={{ items }}>
                  <ICONSCONSTANT.EllipsisOutlined />
                </Dropdown>
              </div>
            </div>
            <AppTitle title={answer} className="text-sm font-normal text-secondary-text" />
          </div>
          <div className="flex items-center justify-between mt-1">
            <div>
              <ICONSCONSTANT.CommentOutlined />
              <ICONSCONSTANT.CommentOutlined />
              <ICONSCONSTANT.CommentOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
