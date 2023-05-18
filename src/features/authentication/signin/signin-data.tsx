import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { SIGNINIMPORT } from "./signin-import";

export const signinFormInputFieldsFuntion = () => {
  return [
    {
      id: 1,
      heading: "",
      fields: [
        {
          id: 1,
          label: "Enter your email",
          size: "large",
          name: "email",
          type: "email",
          fieldType: "input",
          rules: SIGNINIMPORT.emailFieldRules?.(),
          suffix: <ICONSCONSTANT.MailOutlined />,
          className: "focus-suffix",
        },
        {
          id: 2,
          label: "Password",
          name: "password",
          size: "large",
          rules: SIGNINIMPORT.loginPasswordFieldRules,
          fieldType: "password",
          className: "danger-suffix focus-suffix",
        },
      ],
    },
  ];
};

export const signinFormStudentInputFieldsFuntion = () => {
  return [
    {
      id: 1,
      heading: "",
      fields: [
        {
          id: 1,
          label: "Enter your email",
          name: "emailStudent",
          size: "large",
          type: "email",
          fieldType: "input",
          rules: SIGNINIMPORT.emailFieldRules?.(),
          suffix: <ICONSCONSTANT.MailOutlined />,
        },
      ],
    },
  ];
};

export const SIGNINDATA = {
  signinFormInputFieldsFuntion,
  signinFormStudentInputFieldsFuntion,
};
