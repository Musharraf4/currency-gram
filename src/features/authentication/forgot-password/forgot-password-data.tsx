import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { emailFieldRules } from "../../../utils/validations-rules-utils";

export const forgotPasswordFormInputFieldsFuntion = () => [
  {
    fields: [
      {
        id: 1,
        label: "Enter your email",
        size: "large",
        name: "email",
        type: "email",
        fieldType: "input",
        className: "bg-white",
        rules: emailFieldRules?.(),
        suffix: <ICONSCONSTANT.MailOutlined />,
      },
    ],
  },
];

export const forgotPasswordButtonFunction = (setShowForm: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        setShowForm(true);
      },
      // disabled: true,
      btnText: "Reset Password",
      type: "primary",
      // ghost: true,
      className: "w-full",
    },
  ];
};

export const FORGOTPASSWORDDATA = {
  forgotPasswordButtonFunction,
  forgotPasswordFormInputFieldsFuntion,
};
