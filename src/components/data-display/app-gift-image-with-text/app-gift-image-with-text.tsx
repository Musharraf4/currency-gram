import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { AppTitle } from "../app-title/app-title";
import { Avatar } from "antd";

export const AppGiftImageWithText = (props: any) => {
  const { giftDetails, downloadImage, downloadFunction, editImage, editFunction } = props;
  return (
    <div className="flex justify-center mb-10">
      {giftDetails?.image && (
        <div className=" relative w-56">
          {giftDetails?.image && <img src={giftDetails?.image} className="w-full" alt="gift-img" />}

          <AppTitle
            title={`$${giftDetails?.amount}`}
            className="absolute bottom-4 pl-2 text-white font-bold text-xl"
          />
          <AppTitle
            title={giftDetails?.message}
            className="absolute top-4 pl-2 text-white text-xs"
          />
          {downloadImage && (
            <AppTitle
              title={<ICONSCONSTANT.DownloadOutlined />}
              className="absolute bottom-4 right-4 pl-4 text-lg text-white cursor-pointer"
              onClick={() => downloadFunction?.()}
            />
          )}
          {editImage && (
            <AppTitle
              onClick={() => editFunction?.()}
              className="absolute bottom-4 right-4 pl-4 text-lg text-white cursor-pointer"
              title={<Avatar icon={<ICONSCONSTANT.EditOutlined />} />}
            />
          )}
        </div>
      )}
      {giftDetails?.color && (
        <div className="relative h-[300px]">
          <div
            className={`bg-[${giftDetails?.color}] h-full rounded-2xl relative`}
            style={{ minWidth: "224px", maxWidth: "224px" }}
          >
            <AppTitle
              title={`$${giftDetails?.amount}`}
              className="absolute bottom-4 pl-2 text-white font-bold text-xl"
            />
            <AppTitle
              title={giftDetails?.message}
              className="absolute top-4 pl-2 text-white text-xs"
            />
          </div>
          {downloadImage && (
            <AppTitle
              title={<ICONSCONSTANT.DownloadOutlined />}
              className="absolute bottom-4 right-4 pl-4 text-lg text-white cursor-pointer"
              onClick={() => downloadFunction?.()}
            />
          )}
          {editImage && (
            <AppTitle
              onClick={() => editFunction?.()}
              className="absolute bottom-4 right-4 pl-4 text-lg text-white cursor-pointer"
              title={<Avatar icon={<ICONSCONSTANT.EditOutlined />} />}
            />
          )}
        </div>
      )}
    </div>
  );
};
