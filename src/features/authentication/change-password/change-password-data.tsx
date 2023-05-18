import { CHANGEPASSWORDIMPORT } from "./change-password-import";

export const changePasswordFormInputFieldsFuntion = () => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "Current Password",
          name: "currentPassword",
          size: "large",
          className: "dynamic-form-input-elegant ",
          rules: CHANGEPASSWORDIMPORT.currentPasswordFieldRules,
          fieldType: "password",
        },
        {
          id: 2,
          label: "New Password",
          name: "newPassword",
          size: "large",
          className: "dynamic-form-input-elegant ",
          rules: CHANGEPASSWORDIMPORT.newPasswordFieldRules,
          fieldType: "password",
        },
        {
          id: 3,
          label: "Confirm Password",
          name: "confirmPassword",
          size: "large",
          className: "dynamic-form-input-elegant ",
          rules: CHANGEPASSWORDIMPORT.changePasswordConfirmPasswordFieldRules,
          fieldType: "password",
        },
      ],
    },
  ];
};

export const CHANGEPASSWORDDATA = {
  changePasswordFormInputFieldsFuntion,
};
