import { Col, Modal, Row } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import fb from "../../../assets/images/add-money/fb.svg";
import twitter from "../../../assets/images/add-money/twitter.svg";
import insta from "../../../assets/images/add-money/insta.svg";
import linkedin from "../../../assets/images/add-money/linkedin.svg";
import skype from "../../../assets/images/add-money/skype.svg";
import gmail from "../../../assets/images/add-money/gmail.svg";
import whatsapp from "../../../assets/images/add-money/whatsapp.svg";
import snapchat from "../../../assets/images/add-money/snapchat.svg";

export const AppShareModal = (props: any) => {
  const { isModalOpen, handleCancel } = props;
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      centered
      closable={false}
      width={400}
    >
      <AppTitle
        Variant="span"
        title="Share By"
        className="text-secondary-text text-base font-medium"
      />
      <Row className="my-3 items-center justify-around">
        <Col>
          <img src={fb} className="cursor-pointer" alt="fb" />
        </Col>
        <Col>
          <img src={twitter} className="cursor-pointer" alt="twitter" />
        </Col>
        <Col>
          <img src={insta} className="cursor-pointer" alt="insta" />
        </Col>
        <Col>
          <img src={linkedin} className="cursor-pointer" alt="linkdin" />
        </Col>
      </Row>
      <Row className="ml-3 items-center justify-around">
        <Col>
          <img src={skype} className="cursor-pointer" alt="skype" />
        </Col>
        <Col>
          <img src={gmail} className="mt-2 ml-3 cursor-pointer" alt="gmail" />
        </Col>
        <Col>
          <img src={whatsapp} className="ml-1 cursor-pointer" alt="wa" />
        </Col>
        <Col>
          <img src={snapchat} className="cursor-pointer" alt="snap" />
        </Col>
      </Row>
    </Modal>
  );
};
