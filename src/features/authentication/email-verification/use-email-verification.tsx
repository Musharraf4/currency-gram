import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useAppDispatch, useAppSelector } from "../../../store/store";

const THREE_DAYS_IN_MS = 60000;
const NOW_IN_MS = new Date().getTime();
console.log({ NOW_IN_MS, THREE_DAYS_IN_MS });
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

export const useEmailVerification = () => {
  const { alert } = useAppSelector((state) => state);
  const { auth } = useAppSelector((state) => state);
  const [timer, setTimer] = useState();
  const [currentAuthCase, setcurrentAuthCase] = useState<any>({});
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { openAlert } = useAppAlert();

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const user = searchParams.get("user");

  console.log({ user, code, auth });

  // const {days, hours, minutes, seconds} = useCountdown(dateTimeAfterThreeDays);
  // console.log( {days, hours, minutes, seconds})

  const sendEmailAgain = (
    e: any,
    seconds: any,
    setMinutes: any,
    functionTimer: any,
    email: any
  ) => {
    console.log({ e, seconds, setMinutes, functionTimer, email });
    console.log("hi");
    if (seconds > 0) return;

    const userCredentials = {
      email,
    };
  };

  useEffect(() => {
    if (code && user) {
      const getParams = {
        code,
        userId: user,
      };
    }
  }, []);

  const allAuthCases = [
    {
      authMessage: "Your email address is verified successfully.",
      imgSrc: "../../assets/images/global/expire-token.png",
      mainHeading: `You have successfully verified your email!`,
      mainTitle: ``,
      subTitle: "",
      email: "",
      resetPass: true,
      showBtn: false,
      accessDenied: false,
      sendEmail: true,
    },
    {
      authMessage: "Invalid code provided, please request a code again.",
      imgSrc: "../../assets/images/global/expire-token.png",
      mainHeading: "Oops!",
      mainTitle: `Your link has expired!`,
      subTitle: "",
      email: "",
      resetPass: true,
      showBtn: false,
      accessDenied: false,
      sendEmail: true,
    },
    {
      authMessage: "Invalid token",
      imgSrc: "../../assets/images/global/access-denied.png",
      mainHeading: "Access Denied",
      mainTitle: `Sorry! There was some authentication issue noted.`,
      subTitle: "",
      email: "",
      showBtn: false,
      accessDenied: true,
      sendEmail: false,
    },
    {
      authMessage: "please verifiy your email",
      imgSrc: "../../../assets/images/auth/verify-email-signup.png",
      mainHeading: "Let’s Get You Verified",
      mainTitle: `A verification link has been sent to your email account.`,
      subTitle: `Please click on that link to verify your email address to proceed further.`,
      email: "",
      showBtn: false,
      accessDenied: false,
      sendEmail: true,
    },
    {
      authMessage: "Password has been changed",
      imgSrc: "../../../assets/images/global/success-verified.png",
      mainHeading: "",
      mainTitle: `Your password has been reset successfully! You can now`,
      subTitle: "login with your new password.",
      email: "",
      showBtn: true,
      btnLink: `signin`,
      btnText: `BACK TO SIGN IN`,
      accessDenied: false,
      sendEmail: false,
    },
  ];

  const e = allAuthCases.find((x: any) => x.authMessage === auth.emailVerified);
  console.log(e);

  return {
    timer,
    setTimer,
    alert,
    auth,
    navigate,
    currentAuthCase,
    code,
    user,
    sendEmailAgain,
  };
};
