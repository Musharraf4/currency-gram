import { CONFIRMPASSWORDFIELD, PASSWORDFIELD, PHONENUMBERFIELD } from "./fields-constant";

export const requiredFieldMessage = (fieldName: any) => `${fieldName} is required`;
export const selectionRequiredMessage = (fieldName: any) => `Please select value`;
export const greaterThanZeroMessage = (fieldName: any) =>
  `${fieldName} should be greater than zero`;
export const minimumCharactersMessage = (char: any) => `The mimimum length is  ${char} character`;
export const maximumCharactersMessage = (char: any) =>
  `The maximum length is upto ${char} character`;
export const exactCharactersMessage = (char: any) =>
  `Number of characters should be equal to ${char} character`;
export const onlyNumbers = "only numbers are allowed";
export const onlyAlphabets = "only charaters are allowed";
export const notAValidEmail = "Please enter a valid email";
export const atLeastOneUpperCaseAlphabetMessage = (fieldName = PASSWORDFIELD) =>
  `${fieldName} must contain atleast one upper case letter`;
export const atLeastOneLowerCaseAlphabetMessage = (fieldName = PASSWORDFIELD) =>
  `${fieldName} must contain atleast one lower case letter`;
export const atLeastOneNumberMessage = (fieldName = PASSWORDFIELD) =>
  `${fieldName} must contain atleast one number`;
export const atLeastOneSpecialCaseLetterMessage = (fieldName = PASSWORDFIELD) =>
  `${fieldName} must contain atleast one special case letter`;

export const isfieldsMatchMessage = (field1 = PASSWORDFIELD, field2 = CONFIRMPASSWORDFIELD) =>
  `The ${field1} and ${field2} do not match`;

export const invalidPhonePatternMessage = (fieldName = PHONENUMBERFIELD) =>
  `${fieldName} is of invalid format`;
