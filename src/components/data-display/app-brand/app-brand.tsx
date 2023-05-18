import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.svg";

export const AppBrand = (props: any) => {
  const navigate = useNavigate();
  const { brandSrc, brandLogoContainerClassName, routelink, imageClassName, preview } = props;

  return (
    <div
      className={`cursor-pointer  mx-auto ${brandLogoContainerClassName}`}
      onClick={() => navigate(routelink)}
    >
      <Image
        className={`${imageClassName}`}
        src={brandSrc || logo}
        alt={brandSrc || "logo"}
        preview={preview ?? false}
      />
    </div>
  );
};
