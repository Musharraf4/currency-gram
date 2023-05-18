import { LoadingOutlined } from "@ant-design/icons";
import { Space, Avatar } from "antd";
// import upload from "antd/es/upload";
import { AppTitle } from "../../data-display/app-title/app-title";
import upload from "../../../assets/images/gift/upload-image.svg";

export const uploadCard = (imageUrl?: any, loading?: any) => (
  <div>
    <div
      className="bg-light-grey rounded-2xl h-80 cursor-pointer flex"
      style={{ minWidth: "224px", maxWidth: "224px" }}
    >
      <Space size={5} direction="vertical" className="flex items-center justify-center w-full">
        {!imageUrl && !loading && (
          <>
            <Avatar src={upload} size={60} />
            <AppTitle title="Upload Image" Variant="span" className="text-primary-text" />
          </>
        )}
        {loading && <LoadingOutlined />}
        {imageUrl && !loading && (
          <>
            <Avatar src={imageUrl} className="w-full h-full" shape="square" />
          </>
        )}
      </Space>
    </div>
  </div>
);
