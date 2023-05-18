import { Avatar, Col, Input, Row, Timeline } from "antd";
import Upload, { UploadChangeParam, UploadFile, UploadProps } from "antd/es/upload";
import { useState } from "react";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { accountButtonsFunction } from "./account-history-details-data";
import { TitledObjectDataMap } from "../../skeleton/titled-object-data-map/titled-object-data-map";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const AccountHistoryDetailsTemplate = (props: any) => {
  const buttonsData = accountButtonsFunction();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleChange: UploadProps["onChange"] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === "uploading") { 
      setLoading(true);
      return;
    }
  };

  const {
    accountTitle,
    accountDetailObject,
    TimeLineItems,
    col1Xs,
    col1Md,
    col1Lg,
  } = props;
  return (
    <div>
      <Col className=" flex justify-end pb-4 px-7">
        <AppTitle
          Variant="span"
          title={
            <div className="text-sm font-normal">
              <Avatar className="bg-white text-green-600 border-lime-500 mr-2">B</Avatar>
              Business
            </div>
          }
          className=" border border-solid border-light-grey flex px-5 items-center justify-around mr-2 rounded-lg p-1"></AppTitle>

        <AppButton buttons={buttonsData} btnWrapperClassName=" mt-0 lg:mt-0" />
      </Col>
      <Row className="flex justify-between sm:px-2 md:px-6">
        <Col xs={col1Xs} md={col1Md} lg={col1Lg}>
          <AppCardWhite cardClassName="p-6 min-h-fit pb-8 px-3" >
            <TitledObjectDataMap
              mainTitle={accountTitle}
              mainTitleClassName="text-base font-semibold py-2"
              objectData={accountDetailObject}
              headingClassName="flex justify-between font-medium text-sm text-primary-text py-1"C
              rowClassName="flex justify-between"
              titleClassName="text-sm font-normal text-primary-text"
            />
          </AppCardWhite>
        </Col>

        {/* TODO If  Catagory is Rent */}

        {/* <Col xs={col1Xs} md={col1Md} lg={col1Lg}>
          <AppCardWhite cardClassName={`p-6 min-h-fit pb-20 px-3`}>
            <TitledObjectDataMap
              mainTitle={historyTitle}
              mainTitleClassName="text-base font-semibold py-2"
              objectData={historyDetailObject}
              headingClassName="flex justify-between font-medium text-sm text-primary-text py-1"
              rowClassName="flex justify-between"
              titleClassName="text-sm font-normal text-primary-text"
            />
          </AppCardWhite>
        </Col> */}

        {/* TODO If Category is Bussiness */}
        <Col xs={col1Xs} md={col1Md} lg={col1Lg}>
          <AppCardWhite cardClassName={`p-6 min-h-fit px-3`}>
            <AppTitle title="Transfer Timeline" className="text-base font-semibold pb-3" />
            <Timeline items={TimeLineItems} />
          </AppCardWhite>
        </Col>

        {/* TODO IF category is Groceries
        <Col xs={col1Xs} md={col1Md} lg={col1Lg}>
          <AppCardWhite cardClassName={`p-6 min-h-fit `}>
            <img width={555} height={160} src={MapImg} />
          </AppCardWhite>
        </Col> */}

        {/* <Col xs={col1Xs} md={col1Md} lg={col1Lg}>
          <AppCardWhite cardClassName={`p-6 min-h-fit flex justify-center px-3`}>
            <img height={170} src={GiftCard} />
          </AppCardWhite>
        </Col> */}
      </Row>
      <Row className="sm:px-2 md:px-6">
        <Col xs={col1Xs} md={col1Md} lg={col1Lg}>
          <Input.TextArea placeholder="Add Note" className="bg-light-grey rounded-lg" />
        </Col>
      </Row>
      <Row className="sm:px-2 md:px-6">
        <Col
          xs={col1Xs}
          md={col1Md}
          lg={col1Lg}
          className="border-dashed border-light-grey rounded-lg mt-4">
          <Upload
            className="flex justify-center text-center p-4 avatar-uploader"
            onChange={handleChange}
            // beforeUpload={beforeUpload}
          >
            <div>
              {!imageUrl && !loading && (
                <>
                  <ICONSCONSTANT.FileAddOutlined className="text-4xl text-secondary" />
                  <AppTitle className="text-secondary font-normal" title="Upload Recipt"></AppTitle>
                  <AppTitle
                    className="ant-upload-hint text-xs font-normal text-primary-text"
                    title="PDF,JPG,JPGE,PNG, less then 10MB"></AppTitle>
                </>
              )}
            </div>
          </Upload>
        </Col>
      </Row>
    </div>
  );
};
