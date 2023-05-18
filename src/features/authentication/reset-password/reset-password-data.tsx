import { RESETPASSWORDIMPORT } from "./reset-password-import";

export const resetPasswordFormInputFieldsFuntion = () => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 2,
          label: "Password",
          name: "password",
          size: "large",
          className: "dynamic-form-input-elegant ",
          rules: RESETPASSWORDIMPORT.passwordFieldRules?.(),
          fieldType: "password",
        },
        {
          id: 3,
          label: "Confirm Password",
          name: "confirmpassword",
          size: "large",
          className: "dynamic-form-input-elegant ",
          rules: RESETPASSWORDIMPORT.confirmPasswordFieldRules?.(),
          fieldType: "password",
        },
      ],
    },
  ];
};

export const RESETPASSWORDDATA = {
  resetPasswordFormInputFieldsFuntion,
};
