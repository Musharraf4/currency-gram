import { GLOBALSERVERREQUESTPENDINGSTATEMESSAGE } from "../../../constants/views-constant";
import { Spin } from "antd";

export const AppLoader = (props: any) => {
  const { message } = props;
  return (
    <div className="h-screen items-center flex justify-center">
      <Spin
        tip={message || GLOBALSERVERREQUESTPENDINGSTATEMESSAGE}
        size="large"
        className="text-xl text-primary font-semibold"
      />
    </div>
  );
};
