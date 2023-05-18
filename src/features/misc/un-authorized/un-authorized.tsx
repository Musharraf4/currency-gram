import { useNavigate } from "react-router-dom";
import { CommonPageTemplate } from "../../../templates/common-page/common-page";
import comingSoon from "../../../assets/images/misc/un-authorized.svg";
import { commonButtonFunction } from "../../../utils/button-utils";
export const UnAuthorized = () => {
  const navigate = useNavigate();

  const comingsoonButton = commonButtonFunction(navigate);
  return (
    <>
      <CommonPageTemplate
        title="You do not have the permission to access this page"
        button={comingsoonButton}
        imgSrc={comingSoon}
      />
    </>
  );
};
