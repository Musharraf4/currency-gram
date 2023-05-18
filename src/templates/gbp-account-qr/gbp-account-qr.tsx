import { Button, Col, QRCode, Row } from "antd";
import { useState } from "react";
import { useAppAlert } from "../../components/feedback/app-alert/use-app-alert";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppShareModal } from "../../components/modals/app-share-modal/app-share-modal";
import { GeneratedLinkTemplate } from "../generated-link-template/generated-link-template";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const GBPAccountQRTemplate = ({ setShowComponent }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { openAlert } = useAppAlert();
  return (
    <>
      <Row justify={"space-between"}>
        <Col>
          <Button className="border-none" onClick={() => setShowComponent(true)}>
            <ICONSCONSTANT.ArrowLeftOutlined />
          </Button>
        </Col>
        <Col>
          <Button className="px-3 bg-primary-background border-none">
            <ICONSCONSTANT.DownloadOutlined />
          </Button>
        </Col>
      </Row>
      <AppTitle
        title="GBP Account QR"
        className="text-primary-text font-semibold secondary-heading text-center text-2xl my-4"
      />

      <Row justify={"center"}>
        <Col md={12} xs={24}>
          <QRCode value="https://ant.design/" size={250} className="mx-auto" />
          <div className="my-10">
            <GeneratedLinkTemplate
              inputValue="link"
              iconClick={() => {
                navigator.clipboard.writeText("abc");
                openAlert(`text copied`, "success");
              }}
              btnText="Share"
              btnClick={showModal}
            />
          </div>
        </Col>
      </Row>
      <AppShareModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </>
  );
};
