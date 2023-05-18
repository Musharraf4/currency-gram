import { Avatar } from "antd";
import camera from "../../../assets/icons/camera.svg";
import { AppTitle } from "../../data-display/app-title/app-title";

export const AppProfileImage = (props: any) => {
  const { profileImageSrc, changeCoverPhoto, personName, size } = props;
  return (
    <>
      <div className="text-center relative">
        <Avatar src={profileImageSrc} size={size}>
          {personName?.slice(0, 1)?.toUpperCase()}
        </Avatar>
        <div className="absolute text-primary text-center w-full bottom-0 -right-14">
          <label htmlFor="uploadImage">
            <Avatar
              src={camera}
              size={30}
              className="bg-primary p-1.5 cursor-pointer border-white border-solid border-2"></Avatar>
          </label>
        </div>
        <input type="file" onChange={(e: any) => changeCoverPhoto?.(e)} hidden id="uploadImage" />
      </div>
      {!!personName && (
        <AppTitle
          title={personName}
          className="text-center mt-1 md:mt-2 text-xl font-medium text-primary-text"
        />
      )}
    </>
  );
};
