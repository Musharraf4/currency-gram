import { ContactTemplate } from "../../../templates/contact/contact";
import { CONTACTUSIMAGES } from "./contact-us-images";
import { useContactUs } from "./use-contact-us";

export const ContactUs = () => {
  const { contactData, contactUsFormInputFields, officeInfoData } = useContactUs();
  return (
    <>
      <ContactTemplate
        contactInfo={contactData}
        coverImageSrc={CONTACTUSIMAGES.contactUsBannerImage}
        formHeading="Get in Touch"
        formTitle="We’d love to hear from you. Please fill out this form."
        formFields={contactUsFormInputFields}
        firstButtonText="Send Message"
        officeHeading="Our locations"
        officeTitle="Visit our branches"
        officeSubTitle="Find out us at these locations"
        officesInfo={officeInfoData}
        mainPageTitle="Contact us"
        mainFeatures="We’d love to hear from you"
        mainFeatures2="Chat to our friendly team"
      />
    </>
  );
};
