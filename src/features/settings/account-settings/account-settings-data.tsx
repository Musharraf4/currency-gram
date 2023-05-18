import changePassword from "../../../assets/icons/change-password.svg";
import emailSettings from "../../../assets/icons/email-settings.svg";
import link from "../../../assets/icons/link.svg";
import tfa from "../../../assets/icons/tfa.svg";
import del from "../../../assets/icons/del.svg";
import logOut from "../../../assets/icons/log-out.svg";
import PrivacyPolicy from "../../../assets/icons/privacy-policy.svg";
import Bell from "../../../assets/icons/bell.svg";

export const accountSettingDataFunction = (TFAStatus: any, setSelectedCard: any) => [
  {
    title: "Notification",
    child: [
      {
        heading: "Notifications",
        imgSrc: Bell,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
  {
    title: "Security",
    child: [
      {
        heading: "Change Password",
        imgSrc: changePassword,
        description: "***********",
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "Email Settings",
        imgSrc: emailSettings,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "Two Factor Authentication",
        imgSrc: tfa,
        description: `Status : ${TFAStatus}`,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "Connected Services",
        imgSrc: link,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "Login Activity",
        imgSrc: logOut,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
  {
    title: "Account Actions",
    child: [
      {
        heading: "Close Account",
        imgSrc: del,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
  {
    title: "Privacy",
    child: [
      {
        heading: "Privacy Policy",
        imgSrc: PrivacyPolicy,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
];
