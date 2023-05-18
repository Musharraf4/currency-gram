import {
  CONFIRMEMAILFIELD,
  CONFIRMPASSWORDFIELD,
  NEWEMAILFIELD,
  PASSWORDFIELD,
} from "../constants/fields-constant";
import {
  atLeastOneLowerCaseAlphabetMessage,
  atLeastOneNumberMessage,
  atLeastOneSpecialCaseLetterMessage,
  atLeastOneUpperCaseAlphabetMessage,
  exactCharactersMessage,
  greaterThanZeroMessage,
  invalidPhonePatternMessage,
  isfieldsMatchMessage,
  maximumCharactersMessage,
  minimumCharactersMessage,
  notAValidEmail,
  onlyAlphabets,
  onlyNumbers,
  requiredFieldMessage,
  selectionRequiredMessage,
} from "../constants/field-error-message-constant";
import {
  ALLCHARACTERSONLYVALIDATION,
  ATLEASTONEDIGITVALIDATION,
  ATLEASTONELOWERCASEVALIDATION,
  ATLEASTONESPECIALCHARACTERVALIDATION,
  ATLEASTONEUPPERCASEVALIDATION,
  GREATERTHANZEROVALIDATION,
  ONLYAPLHABETSWITHNOSPACEATSTART,
  ONLYNUMERICVALUESVALIDATION,
  UKNUMBERVALIDATION,
} from "../constants/validations-constant";

export const validateFile = (file: any, allowedFiles?: any, maxSize?: any, openAlert?: any) => {
  console.log(file);
  if (!file) {
    openAlert(`No file is selected`, "error");
    return false;
  }

  if (!allowedFiles.includes(file.type)) {
    openAlert(`You can only upload ${allowedFiles.join(" , ")} file!`, "error");
    return false;
  }
  if (file.size > maxSize) {
    openAlert(`maximum file size is ${maxSize}`, "error");
    return false;
  }

  return true;
};

export const fieldTrimRequired = (fieldName: any) => {
  return {
    required: true,
    message: requiredFieldMessage?.(fieldName),
    whitespace: true,
  };
};

export const selectFieldTrimRequired = (fieldName: any) => {
  return {
    required: true,
    message: selectionRequiredMessage?.(fieldName),
    whitespace: true,
  };
};
export const notValidEmail = () => {
  return {
    type: "email",
    message: notAValidEmail,
  };
};

export const fieldsminimumCharaters = (minimumCharacter: any) => {
  return {
    min: minimumCharacter,
    message: minimumCharactersMessage?.(minimumCharacter),
  };
};

export const fieldsmaximumCharaters = (maximumCharacter: any) => {
  return {
    max: maximumCharacter,
    message: maximumCharactersMessage?.(maximumCharacter),
  };
};

export const fieldsexactminCharaters = (exactCharacter: any) => {
  return {
    min: exactCharacter,
    message: exactCharactersMessage?.(exactCharacter),
  };
};

export const fieldsexactmaxCharaters = (exactCharacter: any) => {
  return {
    max: exactCharacter,
    message: exactCharactersMessage?.(exactCharacter),
  };
};

export const onlyNumbersAllowed = () => {
  return {
    pattern: ONLYNUMERICVALUESVALIDATION,
    message: onlyNumbers,
  };
};

export const onlyAplahabetsAllowed = () => {
  return {
    pattern: ALLCHARACTERSONLYVALIDATION,
    message: onlyAlphabets,
  };
};

export const onlyTrimAplahabetsAllowed = () => {
  return {
    pattern: ONLYAPLHABETSWITHNOSPACEATSTART,
    message: onlyAlphabets,
  };
};

export const atLeastOneUpperCaseAlphabet = () => {
  return {
    pattern: ATLEASTONEUPPERCASEVALIDATION,
    message: atLeastOneUpperCaseAlphabetMessage,
  };
};
export const atLeastOneLowerCaseAlphabet = () => {
  return {
    pattern: ATLEASTONELOWERCASEVALIDATION,
    message: atLeastOneLowerCaseAlphabetMessage,
  };
};
export const atLeastOneNumber = () => {
  return {
    pattern: ATLEASTONEUPPERCASEVALIDATION,
    message: atLeastOneNumberMessage,
  };
};
export const atLeastOneSpecialCaseLetter = () => {
  return {
    pattern: ATLEASTONESPECIALCHARACTERVALIDATION,
    message: atLeastOneSpecialCaseLetterMessage,
  };
};

export const invalidPhonePattern = () => {
  return {
    pattern: UKNUMBERVALIDATION,
    message: invalidPhonePatternMessage,
  };
};

export const greaterThanZeroPattern = (fieldName: any) => {
  return {
    message: greaterThanZeroMessage?.(fieldName),
    pattern: GREATERTHANZEROVALIDATION,
  };
};
export const isFieldsMatch =
  (fieldName = "password", field1 = PASSWORDFIELD, field2 = CONFIRMPASSWORDFIELD) =>
  ({ getFieldValue }: any) => ({
    validator(_: any, value: any) {
      if (!value || getFieldValue(fieldName) === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(isfieldsMatchMessage?.(field1, field2)));
    },
  });

export const isFieldsNotMatch =
  (fieldName = "password", field1 = PASSWORDFIELD, field2 = CONFIRMPASSWORDFIELD) =>
  ({ getFieldValue }: any) => ({
    validator(_: any, value: any) {
      if (!value || getFieldValue(fieldName) !== value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(isfieldsMatchMessage?.(field1, field2)));
    },
  });
