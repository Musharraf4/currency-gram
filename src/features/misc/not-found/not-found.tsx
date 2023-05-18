import { useNavigate } from "react-router-dom";
import { CommonPageTemplate } from "../../../templates/common-page/common-page";

import notFound from "../../../assets/images/misc/404.svg";
import { commonButtonFunction } from "../../../utils/button-utils";

export const NotFound = () => {
  const navigate = useNavigate();
  const comingsoonButton = commonButtonFunction(navigate);
  return (
    <>
      <CommonPageTemplate
        title="I think you are lost. But we got your back."
        button={comingsoonButton}
        imgSrc={notFound}
      />
    </>
  );
};
