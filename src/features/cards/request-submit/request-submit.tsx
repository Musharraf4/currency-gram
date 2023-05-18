import { REQUESTSUBMITDATA } from "./request-submit-data";
import { REQUESTSUBMITIMAGES } from "./request-submit-image"
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { RequestSubmitTemplate } from "../../../templates/request-submit/request-submit";

export const RequestSubmit = () => {
  const requestSubmitButtons = REQUESTSUBMITDATA.requestSubmitButtonFunction();
  return (
    <>
      <AppCardWhite cardClassName="p-5 sm:p-14 mt-8 ">
        <RequestSubmitTemplate
          variantOne="span"
          variantTwo="span"
          avatarSize="large"
          titleTwo=" Submitted"
          buttons={requestSubmitButtons}
          titleOne="Your request has been"
          imgSrc={REQUESTSUBMITIMAGES.checkMark}
          RequestSubmitImageClass="sm:w-12"
          // ImgWidth={60}
          discription="It will be reviewed and processed within 24 hours. You will be notified immediately. In case of any errors, one of our team member will be in touch to proceed with your application."
        />
      </AppCardWhite>
    </>
  );
};
