import {
  BUSINESSINFOFIELD,
  BUSINESSNAMEFIELD,
  BUSINESSSECTORNAMEFIELD,
  BUSINESSTYPEFIELD,
  CHARITYNAMEFIELD,
  CITYFIELD,
  COMPANYREGISTRATIONNUMBERFIELD,
  COUNTRYFIELD,
  CURRENCYFIELD,
  CURRENTEMAILFIELD,
  DATEOFBIRTHFIELD,
  DATEOFINCORPORATIONFIELD,
  NAMEFIELD,
  PHONENUMBERFIELD,
  POSTCODEFIELD,
  ROLEFIELD,
} from "../constants/fields-constant";
import {
  ACCOUNTNOFIELD,
  ADDRESSFIELD,
  CONFIRMEMAILFIELD,
  CONFIRMPASSWORDFIELD,
  CURRENTPASSWORDFIELD,
  EMAILFIELD,
  FIRSTNAMEFIELD,
  LASTNAMEFIELD,
  NEWEMAILFIELD,
  NEWPASSWORDFIELD,
  NICKNAMEFIELD,
  OLDPASSWORDFIELD,
  PASSWORDFIELD,
  SORTCODEFIELD,
} from "../constants/fields-constant";
import {
  MAXIMUMADDRESSLENGTH,
  MAXIMUMBUSINESSINFORMATIONLENGTH,
  MAXIMUMBUSINESSNAMELENGTH,
  MAXIMUMBUSINESSSECTORNAMELENGTH,
  MAXIMUMCHARITYNAMELENGTH,
  MAXIMUMCITYLENGTH,
  MAXIMUMNAMELENGTH,
  MAXIMUMPASSWORDLENGTHVALIDATION,
  MAXIMUMPHONENUMBERLENGTH,
  MINIMUMACCOUNTNUMBERLENGTH,
  MINIMUMNAMELENGTH,
  MINIMUMPASSWORDLENGTHVALIDATION,
  MINIMUMSORTNUMBERLENGTH,
} from "../constants/validations-constant";
import {
  atLeastOneLowerCaseAlphabet,
  atLeastOneNumber,
  atLeastOneSpecialCaseLetter,
  atLeastOneUpperCaseAlphabet,
  fieldTrimRequired,
  fieldsexactmaxCharaters,
  fieldsexactminCharaters,
  fieldsmaximumCharaters,
  fieldsminimumCharaters,
  isFieldsMatch,
  isFieldsNotMatch,
  notValidEmail,
  onlyTrimAplahabetsAllowed,
  invalidPhonePattern,
  selectFieldTrimRequired,
  greaterThanZeroPattern,
} from "./validations-utils";

export const nameFieldRules = (nameType = FIRSTNAMEFIELD) => {
  return [
    fieldTrimRequired?.(nameType),
    onlyTrimAplahabetsAllowed(),
    fieldsminimumCharaters(MINIMUMNAMELENGTH),
    fieldsmaximumCharaters(MAXIMUMNAMELENGTH),
  ];
};

export const firstNameFieldRules = nameFieldRules(FIRSTNAMEFIELD);
export const lastNameFieldRules = nameFieldRules(LASTNAMEFIELD);
export const nickNameFieldRules = nameFieldRules(NICKNAMEFIELD);
export const onlyNameFieldRules = nameFieldRules(NAMEFIELD);

export const emailFieldRules = (emailField = EMAILFIELD) => {
  return [fieldTrimRequired?.(emailField), notValidEmail()];
};

export const optionalEmailFieldRules = () => {
  return [notValidEmail()];
};
export const currentEmailFieldRules = emailFieldRules?.(CURRENTEMAILFIELD);
// export const currentEmailFieldRules = emailFieldRules?.();
export const newEmailFieldRules = (
  fieldName = "newEmail",
  email1 = CURRENTEMAILFIELD,
  email2 = NEWEMAILFIELD
) => {
  return [
    fieldTrimRequired?.(email1),
    notValidEmail(),
    isFieldsNotMatch?.(fieldName, email1, email2),
  ];
};
export const confirmEmailFieldRules = (
  fieldName = "newEmail",
  email1 = NEWEMAILFIELD,
  email2 = CONFIRMEMAILFIELD
) => {
  return [fieldTrimRequired?.(email1), notValidEmail(), isFieldsMatch?.(fieldName, email1, email2)];
};

export const requiredpasswordFieldRules = (passwordType = PASSWORDFIELD) => {
  return [fieldTrimRequired?.(passwordType)];
};

export const loginPasswordFieldRules = requiredpasswordFieldRules?.();
export const oldPasswordFieldRules = requiredpasswordFieldRules?.(OLDPASSWORDFIELD);
export const currentPasswordFieldRules = requiredpasswordFieldRules?.(CURRENTPASSWORDFIELD);

export const passwordFieldRules = (passwordType = PASSWORDFIELD) => {
  return [
    fieldTrimRequired?.(passwordType),
    fieldsminimumCharaters?.(MINIMUMPASSWORDLENGTHVALIDATION),
    atLeastOneUpperCaseAlphabet?.(),
    atLeastOneLowerCaseAlphabet?.(),
    atLeastOneNumber?.(),
    atLeastOneSpecialCaseLetter?.(),
    fieldsmaximumCharaters?.(MAXIMUMPASSWORDLENGTHVALIDATION),
  ];
};

export const newPasswordFieldRules = passwordFieldRules(NEWPASSWORDFIELD);

export const confirmPasswordFieldRules = (
  fieldName = "password",
  password = PASSWORDFIELD,
  confirmPassword = CONFIRMPASSWORDFIELD
) => {
  return [
    fieldTrimRequired?.(confirmPassword),
    isFieldsMatch?.(fieldName, password, confirmPassword),
  ];
};

export const changePasswordConfirmPasswordFieldRules = confirmPasswordFieldRules(
  "newPassword",
  NEWPASSWORDFIELD,
  CONFIRMPASSWORDFIELD
);
export const addressFieldRules = () => {
  return [fieldTrimRequired?.(ADDRESSFIELD), fieldsmaximumCharaters?.(MAXIMUMADDRESSLENGTH)];
};

export const postCodeFieldRules = () => {
  return [selectFieldTrimRequired?.(POSTCODEFIELD)];
};
export const countryFieldRules = () => {
  return [selectFieldTrimRequired?.(COUNTRYFIELD)];
};

export const cityFieldRules = () => {
  return [fieldTrimRequired?.(CITYFIELD), fieldsmaximumCharaters?.(MAXIMUMCITYLENGTH)];
};
export const phoneNumberFieldRules = () => {
  return [
    fieldTrimRequired?.(PHONENUMBERFIELD),
    fieldsmaximumCharaters?.(MAXIMUMPHONENUMBERLENGTH),
    invalidPhonePattern?.(),
  ];
};

export const accountNoFieldRules = () => {
  return [
    fieldTrimRequired?.(ACCOUNTNOFIELD),
    fieldsexactminCharaters?.(MINIMUMACCOUNTNUMBERLENGTH),
    fieldsexactmaxCharaters?.(MINIMUMACCOUNTNUMBERLENGTH),
  ];
};

export const sortCodeFieldRules = () => {
  return [
    fieldTrimRequired?.(SORTCODEFIELD),
    fieldsexactminCharaters?.(MINIMUMSORTNUMBERLENGTH),
    fieldsexactmaxCharaters?.(MINIMUMSORTNUMBERLENGTH),
  ];
};

export const businessNameFieldRules = () => {
  return [
    fieldTrimRequired?.(BUSINESSNAMEFIELD),
    fieldsmaximumCharaters?.(MAXIMUMBUSINESSNAMELENGTH),
  ];
};

export const businessSectorNameFieldRules = () => {
  return [
    fieldTrimRequired?.(BUSINESSSECTORNAMEFIELD),
    fieldsmaximumCharaters?.(MAXIMUMBUSINESSSECTORNAMELENGTH),
  ];
};

export const businessInformationFieldRules = () => {
  return [
    fieldTrimRequired?.(BUSINESSINFOFIELD),
    fieldsmaximumCharaters?.(MAXIMUMBUSINESSINFORMATIONLENGTH),
  ];
};

export const dateOfBirthFieldRules = (fieldType = DATEOFBIRTHFIELD) => {
  return [fieldTrimRequired?.(fieldType)];
};

export const dateOfIncorporationFieldRules = (fieldType = DATEOFINCORPORATIONFIELD) => {
  return [fieldTrimRequired?.(fieldType)];
};

export const businessTypeFieldRules = () => {
  return [selectFieldTrimRequired?.(BUSINESSTYPEFIELD)];
};

export const roleFieldRules = (fieldType = ROLEFIELD) => {
  return [fieldTrimRequired?.(fieldType)];
};

export const companyRegistrationNumberFieldRules = (fieldType = COMPANYREGISTRATIONNUMBERFIELD) => {
  return [fieldTrimRequired?.(fieldType)];
};

export const optionalPhoneNumberFieldRules = () => {
  return [
    // fieldTrimRequired?.(PHONENUMBERFIELD),
    fieldsmaximumCharaters?.(MAXIMUMPHONENUMBERLENGTH),
    invalidPhonePattern?.(),
  ];
};

export const businessOrCharityNameFieldRules = (fieldName: any) => {
  return [
    fieldTrimRequired?.(fieldName ? CHARITYNAMEFIELD : BUSINESSNAMEFIELD),
    fieldsmaximumCharaters?.(fieldName ? MAXIMUMCHARITYNAMELENGTH : MAXIMUMBUSINESSNAMELENGTH),
  ];
};

export const businessOrCharityNameSelectFieldRules = (fieldName: any) => {
  return [selectFieldTrimRequired?.(fieldName ? CHARITYNAMEFIELD : BUSINESSNAMEFIELD)];
};

export const currencyFieldRules = (fieldType = CURRENCYFIELD) => {
  return [fieldTrimRequired?.(fieldType)];
};
export const amountFieldRules = (fieldName: string) => {
  return [fieldTrimRequired?.(fieldName), greaterThanZeroPattern?.(fieldName)];
};
