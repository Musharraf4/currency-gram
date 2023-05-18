import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useAppDispatch, useAppSelector } from "../../../store/store";

export const SentEmail = (props: any) => {
  const { mainHeading, subHeading, mainTitle, subTitle, containerClassName, email, showHeader } =
    props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { openAlert } = useAppAlert();
  const { auth } = useAppSelector((state) => state);
  console.log(auth.userEmail);

  useEffect(() => {
    if (!!!auth.userEmail) navigate("/not-found");
  }, []);

  const sendEmailAgain = (
    e: any,
    seconds: any,
    setMinutes: any,
    functionTimer: any,
    email: any
  ) => {
    if (seconds > 0) return;
    console.log({ e, seconds, setMinutes, functionTimer, email });

    const userCredentials = {
      email: auth.userEmail,
    };
  };

  return (
    <>
      hi
      {/* <SentEmailTemplate
                // mainHeading={mainHeading}
                subHeading={subHeading}
                // mainTitle={mainTitle}
                // subTitle={subTitle}
                email={email}
                // containerClassName={containerClassName}
                // showHeader={showHeader}
                mainHeading={`Let's Get you Verified`}
                mainTitle='A verification link has been sent to your email account.'
                subTitle='Please click on that link to reset your email address to proceed further.'
                containerClassName='min-height-60vh'
                showHeader={true}
                resetLinkFunction={(d:any, f:any, h:any, i:any, u:any)=>{console.log('hi'); sendEmailAgain?.(d,f, h , i , u)}}
            /> */}
    </>
  );
};
