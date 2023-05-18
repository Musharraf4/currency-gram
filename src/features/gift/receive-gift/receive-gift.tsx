import { Checkbox, Col, Row, Space } from "antd";
import { useState } from "react";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import giftImage from "../../../assets/images/gift/gift-image.svg";
import { AppDynamicForm } from "../../../components/form-elements/app-dynamic-form/app-dynamic-form";
import { ReceiveGiftTemplate } from "../../../templates/receive-gift-template/receive-gift-template";
import { AppGiftImageWithText } from "../../../components/data-display/app-gift-image-with-text/app-gift-image-with-text";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { RECEIVEGIFTDATA } from "./receive-gift-data";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const ReceiveGift = () => {
  const giftDetailsFieldsData = RECEIVEGIFTDATA.giftDetailsFieldsFuntion();
  const [title, setTitle] = useState("Receive Your Gift");
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const buttonData = RECEIVEGIFTDATA.receiveGiftbuttonDataFunction(setTitle);
  const onFinish = (e: any) => {
    console.log("🚀 ~ file: receive-gift.tsx:33 ~ onFinish ~ e:", e);
    setTitle("Congratulations!");
  };
  const downloadFunction = () => {
    setShowDownloadModal(true);
  };
  return (
    <div>
      <div className="rounded-lg pt-4 app-banner-bg-image h-40 bg-primary  w-[95%] sm:w-11/12 mx-auto">
        <AppTitle
          title={title}
          className="text-white inner-header-card text-center mt-5 text-[28px] font-bold"
        />
        <AppCardWhite cardClassName="my-20 min-h-[70vh] w-11/12 mx-auto">
          <Row justify={"center"}>
            <Col md={16} sm={20} xs={23} lg={10} className=" mx-auto">
              {title === "Receive Your Gift" && (
                <ReceiveGiftTemplate
                  image={giftImage}
                  buttonData={buttonData}
                  receiverName="Usman Saeed"
                  date={"Monday, Dec 15, 2022 11:05AM"}
                />
              )}
              {title === "Add Details" && (
                <AppDynamicForm
                  formFields={giftDetailsFieldsData}
                  onFinish={(e: any) => onFinish?.(e)}
                  firstButtonText="Next"
                  fieldMd={24}
                  fieldXs={24}
                  formClassName={"mt-16"}
                  submitBtnClassName="w-full"
                />
              )}
              {title === "Congratulations!" && (
                <center className="mt-10">
                  <AppGiftImageWithText
                    giftDetails={RECEIVEGIFTDATA.dummyGiftImageData}
                    downloadImage
                    downloadFunction={downloadFunction}
                  />
                  <AppTitle
                    title="You have received a gift from"
                    className="text-base text-primary-text"
                  />
                  <AppTitle title={"Usman Saeed"} className="text-base text-primary-text my-1" />
                  <AppTitle
                    title={"Monday, Dec 15, 2022 11:05AM"}
                    className=" text-primary-text my-5"
                  />
                </center>
              )}
            </Col>
          </Row>
        </AppCardWhite>
      </div>

      {showDownloadModal && (
        <AppModal
          isModalOpen={showDownloadModal}
          handleOk={() => setShowDownloadModal?.(false)}
          handleCancel={() => setShowDownloadModal?.(false)}
          heading="Download Type"
          avatarSize={70}
          src={
            <ICONSCONSTANT.DownloadOutlined className="text-white text-4xl bg-primary rounded-full p-2" />
          }
          firstButtonText="Download"
          closeIcon={<></>}
          subHeading={
            <Space wrap size={20} className="text-sm font-normal mt-3">
              <Checkbox value="PDF">PDF</Checkbox>
              <Checkbox value="JPG">JPG</Checkbox>
            </Space>
          }
        />
      )}
    </div>
  );
};
