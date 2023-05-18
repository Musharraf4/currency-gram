import { Row, Col, Space, Button } from "antd";
import { AppTable } from "../../components/data-display/app-table/app-table";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppInfoCard } from "../../components/cards/app-info-card/app-info-card";
import { AppGiftImageWithText } from "../../components/data-display/app-gift-image-with-text/app-gift-image-with-text";
import { RECEIVEGIFTDATA } from "../../features/gift/receive-gift/receive-gift-data";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const GiftDetailTemplate = (props: any) => {
  const {
    dataToDisplay,
    shareIconFunction,
    downloadIconFunction,
    // transactionDetailStatus,
    giftImage,
    peopleClaimedData,
    peopleClaimedColumns,
    buttonText,
    buttonFunction,
    heading,
  } = props;
  return (
    <div>
      <AppCardWhite cardClassName="p-2 min-h-full">
        <Row justify={"end"} className="p-5">
          <Col>
            <Space wrap>
              <Button
                className="px-4 bg-primary-background border-none"
                onClick={() => shareIconFunction?.()}
              >
                <ICONSCONSTANT.ShareAltOutlined />
              </Button>
              <Button
                className="px-4 bg-primary-background border-none"
                onClick={() => downloadIconFunction?.()}
              >
                <ICONSCONSTANT.DownloadOutlined />
              </Button>
            </Space>
          </Col>
        </Row>
        <Row gutter={[30, 30]} className="min-h-[35vh] my-5" justify={"center"}>
          <Col xs={22} md={11}>
            <div className="border border-solid border-light-grey text-primary-text leading-8 rounded-lg min-h-full box-border p-5">
              <AppInfoCard
                dataToDisplay={dataToDisplay}
                heading={heading}
                buttonText={buttonText}
                buttonFunction={buttonFunction}
              />
            </div>
          </Col>
          <Col xs={22} md={11}>
            {giftImage && (
              <div className="text-center border border-solid border-light-grey text-primary-text rounded-lg m-auto pt-8">
                <AppGiftImageWithText giftDetails={RECEIVEGIFTDATA.dummyGiftImageData} />
              </div>
            )}
          </Col>
        </Row>
        {peopleClaimedData && (
          <div className="border border-solid border-light-grey text-primary-text leading-8 rounded-lg mt-6">
            <AppTitle title="People Claimed" className="font-medium p-4" />
            <AppTable dataSource={peopleClaimedData} columns={peopleClaimedColumns} />
          </div>
        )}
      </AppCardWhite>
    </div>
  );
};
