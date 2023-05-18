import { Avatar } from "antd";
import { AppInput } from "../app-input/app-input";
import replyInput from "../../../assets/icons/reply-input.svg";

export const AppCommentInput = (props: any) => {
  const { imgSrc, placeholder, onChange } = props;
  return (
    <>
      <div className="flex items-center">
        <Avatar src={imgSrc} alt="" shape="square" size="large"></Avatar>
        <AppInput
          placeholder={placeholder}
          inputClassName="mb-0 ml-4"
          onChange={(e: any) => {
            console.log(e?.target?.value);
            console.log(e);
            onChange?.(e);
          }}
          bordered={false}
          suffix={<Avatar src={replyInput} className="p-1"></Avatar>}
        />
      </div>
    </>
  );
};
