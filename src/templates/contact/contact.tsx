import { Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppContactCard } from "../../components/cards/app-contact-card/app-contact-card";
import { InfoFormTemplate } from "../info-form/info-form";

export const ContactTemplate = (props: any) => {
  const {
    contactInfo,
    onSubmitSuccess,
    onSubmitFailed,
    formFields,
    formHeading,
    formTitle,
    firstButtonText,
    officesInfo,
    officeHeading,
    officeTitle,
    officeSubTitle,
    mainFeatures,
    mainFeatures2,
    mainPageTitle,
    coverImageSrc,
  } = props;
  return (
    <div className="mt-6">
      <div className="text-center  mt-2 md:mt-7">
        <Row>
          <Col xs={1} lg={3}></Col>
          <Col xs={22} lg={18}>
            <AppTitle
              title={mainPageTitle}
              className="text-primary  font-medium text-xs text-center bg-primary-hover/[.1] p-2 px-3 rounded-full"
              Variant="span"
            />

            <AppTitle
              title={mainFeatures}
              className="text-3xl text-secondary-text font-semibold mt-1 lg:mt-5 mb-2"
            />
            <AppTitle title={mainFeatures2} className="text-xl text-[#667085] font-normal mb-4" />

            <img src={coverImageSrc} className="w-full my-7" alt={mainFeatures} />
          </Col>
          <Col xs={1} lg={3}></Col>
        </Row>
      </div>
      <div className="my-6 lg:my-16">
        <Row>
          <Col xs={1} lg={3}></Col>
          <Col xs={22} lg={18}>
            <Row gutter={{ md: 24, lg: 32 }}>
              {contactInfo.length &&
                contactInfo.map((contact: any) => (
                  <Col xs={24} md={12} lg={8} className="mb-4 lg:mb-0">
                    <AppContactCard
                      heading={contact.heading}
                      description={contact.description}
                      subtitle={contact.subtitle}
                      imgSrc={contact.imgSrc}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={1} lg={3}></Col>
        </Row>
      </div>
      <div className="text-center my-8">
        <Row>
          <Col xs={1} md={3} lg={8}></Col>
          <Col xs={22} md={18} lg={8}>
            <AppTitle
              title="Contact Us"
              className="text-primary font-semibold text-base my-3 text-center"
            />
            <InfoFormTemplate
              heading={formHeading}
              title={formTitle}
              formFields={formFields}
              onSubmitSuccess={(e: any) => onSubmitSuccess?.(e)}
              onSubmitFailed={(e: any) => onSubmitFailed?.(e)}
              firstButtonText={firstButtonText}
              submitBtnClassName="mt-2 lg:mt-2"
            />
          </Col>
          <Col xs={1} md={3} lg={8}></Col>
        </Row>
      </div>
      <div className="mt-4 mb-10">
        <Row className="bg-smoke-white p-8">
          <Col xs={24} lg={2}></Col>
          <Col xs={22} lg={20}>
            <Row>
              <Col xs={24} lg={5}>
                <AppTitle title={officeHeading} className="text-sm font-medium text-primary mb-4" />
                <AppTitle title={officeTitle} className="text-lg font-medium text-[#111827] mb-4" />
                <AppTitle
                  title={officeSubTitle}
                  className="text-sm font-normal text-[#4B5563] mb-4"
                />
              </Col>
              <Col xs={24} lg={2}></Col>

              <Col xs={24} lg={15}>
                <Row>
                  {officesInfo?.length &&
                    officesInfo?.map((footer: any) => (
                      <Col xs={24} md={12}>
                        <AppTitle
                          title={footer?.heading}
                          className="text-xl font-bold text-[#111827] mb-4"
                        />
                        <AppTitle
                          title={footer?.description}
                          className="text-sm font-normal text-[#4B5563] mb-4"
                        />
                        <AppTitle
                          title={footer?.subtitle}
                          className="text-sm font-normal text-[#4B5563] mb-4"
                        />
                      </Col>
                    ))}
                </Row>
              </Col>
              <Col xs={24} lg={2}></Col>
            </Row>
          </Col>
          <Col xs={24} lg={2}></Col>
        </Row>
      </div>
    </div>
  );
};
