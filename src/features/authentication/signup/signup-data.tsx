import { AppTitle } from "../../../components/data-display/app-title/app-title";
import thank from "../../../assets/images/auth/thank.png";

import { dayjsFormatDate } from "../../../lib/dayjs-time-format-lib";
import { SIGNUPIMPORT } from "./signup-import";

export const signupDelegateFormInputFieldsFuntion: any = () => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          type: "text",
          name: "firstName",
          label: "First Name",
          fieldType: "input",
          rules: SIGNUPIMPORT.firstNameFieldRules,
        },
        {
          id: 2,
          type: "text",
          name: "lastName",
          label: "Last Name",
          fieldType: "input",
          rules: SIGNUPIMPORT.lastNameFieldRules,
        },
        {
          id: 3,
          label: "Enter your email",
          size: "large",
          name: "email",
          type: "email",
          fieldType: "input",
          rules: SIGNUPIMPORT.emailFieldRules(),
        },
        {
          id: 4,
          type: "text",
          name: "joiningDate",
          label: "Date",
          fieldType: "input",
        },
        {
          id: 6,
          type: "text",
          name: "address",
          label: "Residential Address",
          fieldType: "input",
          rules: SIGNUPIMPORT.addressFieldRules(),
        },
      ],
    },
  ];
};
export const signUpDelegateInitialValueFunction = () => {
  return {
    firstName: "",
    lastName: "",
    email: "",
    joiningDate: dayjsFormatDate(new Date().toDateString(), "DD/MM/YYYY"),
    address: "",
  };
};

export const termsAndConditionData = (
  <>
    <AppTitle
      title={
        <>
          <div className="my-4">
            Acknowledge that the delegate have received the consent of my clients to share their
            personal data (Including but not limited to Contacts Details) with Modular in order to
            initiate and progress their clients application
          </div>
          <div className="my-4">
            Confirm that I have read, understand, accepted and consented to the use of my data
            according to the terms of Currencygram
            <span className="text-primary ml-2">Privacy Policy</span>
          </div>
          <div className="my-4">
            Acknowledge that the delegate have received the consent of my clients to share their
            personal data (Including but not limited to Contacts Details) with Modular in order to
            initiate and progress their clients application
          </div>
        </>
      }
    />
  </>
);

export const termsAndConditionDataButtonFunction = (isButtonDisable: any, changeScreen: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        changeScreen?.();
      },
      disabled: isButtonDisable,
      btnText: "Submit",
      type: "primary",
      className: "w-full sm:w-1/2 lg:w-1/4",
    },
  ];
};

export const thankyouDataFunction = () => {
  return [
    {
      heading: "Thank You",
      description:
        "Thanks, the application has been received and will be reviewed within 5 working days.If we need any more information. We'll be in touch via email.",
      subtitle: "What’s Next?",
      subtitle2:
        "If the application is successful. we'll send the Login details to the provided Email.",
      imgSrc: thank,
      headingClassName: "my-1 lg:my-1 text-center text-delegate-text font-bold text-2xl",
      descriptionClassName: "text-center text-[#8083A3]",
      subtitleClassName: "text-delegate-text font-bold text-xl",
      subtitle2ClassName: "text-delegate-text",
    },
  ];
};

export const thankyouDataButtonFunction = (isButtonDisable?: any, changeScreen?: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        // changeScreen?.();
        console.log("hi");
      },
      // disabled: isButtonDisable,
      btnText: "Next",
      type: "primary",
      // ghost: true,
      className: "w-full sm:w-1/2 lg:w-1/4",
    },
  ];
};
