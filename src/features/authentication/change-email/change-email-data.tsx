import { CHANGEEMAILIMPORT } from "./change-email-import";

export const changeEmailFormInputFieldsFuntion = () => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "Current Email",
          size: "large",
          name: "currentEmail",
          type: "email",
          fieldType: "input",
          rules: CHANGEEMAILIMPORT.currentEmailFieldRules,
        },
        {
          id: 2,
          label: "New Email",
          size: "large",
          name: "newEmail",
          type: "email",
          fieldType: "input",
          rules: CHANGEEMAILIMPORT.newEmailFieldRules?.(),
        },
        {
          id: 3,
          label: "Confirm Email",
          size: "large",
          name: "confirmEmail",
          type: "email",
          fieldType: "input",
          rules: CHANGEEMAILIMPORT.confirmEmailFieldRules?.(),
        },
        {
          id: 4,
          label: "Password",
          name: "Password",
          size: "large",
          className: "dynamic-form-input-elegant ",
          rules: CHANGEEMAILIMPORT.loginPasswordFieldRules,
          fieldType: "password",
        },
      ],
    },
  ];
};

export const CHANGEEMAILDATA = {
  changeEmailFormInputFieldsFuntion,
};
