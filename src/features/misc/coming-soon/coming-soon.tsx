import { useNavigate } from "react-router-dom";
import { CommonPageTemplate } from "../../../templates/common-page/common-page";
import comingSoon from "../../../assets/images/misc/un-authorized.svg";
import { commonButtonFunction } from "../../../utils/button-utils";
export const ComingSoon = () => {
  const navigate = useNavigate();
  const comingsoonButton = commonButtonFunction(navigate);
  return (
    <>
      <CommonPageTemplate title="Coming Soon" button={comingsoonButton} imgSrc={comingSoon} />
    </>
  );
};
