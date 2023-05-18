import { CONTACTUSDATA } from "./contact-us-data";

export const useContactUs = () => {
  const contactData = CONTACTUSDATA.contactDataFunction();
  const contactUsFormInputFields = CONTACTUSDATA.contactUsFormInputFieldsFuntion();
  const officeInfoData = CONTACTUSDATA.officeInfoDataFunction();
  return {
    contactData,
    contactUsFormInputFields,
    officeInfoData,
  };
};
