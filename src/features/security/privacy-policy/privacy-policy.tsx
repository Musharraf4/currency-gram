import { Col, Row } from "antd";
import { AppTitle } from "../../../components/data-display/app-title/app-title";

export const PrivacyPolicy = () => {
  return (
    <>
      <Row>
        <Col xs={1} lg={4}></Col>
        <Col xs={22} lg={16}>
          <AppTitle
            title="Before you go, tell us why you’re leaving"
            className="text-xl font-medium text-primary-text"
          />
          <AppTitle
            title="1. YOUR AGREEMENT"
            className="text-xl font-medium text-primary-text mt-4"
          />
          <AppTitle
            title={
              <div>
                By using this Site, you agree to be bound by, and to comply with, these Terms and
                Conditions. If you do not agree to these Terms and Conditions, please do not use
                this site.
                <div className="mt-4">
                  PLEASE NOTE: We reserve the right, at our sole discretion,to change, modify or
                  otherwise alter these Terms and Conditions at any time. Unless otherwise
                  indicated, amendments will become effective immediately. Please review these Terms
                  and Conditions periodically. Your continued use of the Site following the posting
                  of changes and/or modifications will constitute your acceptance of the revised
                  Terms and Conditions and the reasonableness of these standards for notice of
                  changes. For your information, this page was last updated as of the date at the
                  top of these terms and conditions.
                </div>
              </div>
            }
            className="text-sm font-normal text-primary-text mt-4"
          />
          <AppTitle title="2. PRIVACY" className="text-xl font-medium text-primary-text  mt-4" />
          <AppTitle
            title="Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices."
            className="text-sm font-normal text-primary-text  mt-4"
          />
          <AppTitle title="3. PRIVACY" className="text-xl font-medium text-primary-text  mt-4" />
          <AppTitle
            title="Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices."
            className="text-sm font-normal text-primary-text  mt-4"
          />
          <AppTitle title="4. PRIVACY" className="text-xl font-medium text-primary-text  mt-4" />
          <AppTitle
            title="Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices."
            className="text-sm font-normal text-primary-text  mt-4"
          />
        </Col>
        <Col xs={1} lg={4}></Col>
      </Row>
    </>
  );
};
