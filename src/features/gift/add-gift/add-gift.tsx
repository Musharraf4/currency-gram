import { Col, Row, UploadFile } from "antd";
import AppCarousel from "../../../components/navigations/app-carousel/app-carousel";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Upload, { RcFile, UploadChangeParam, UploadProps } from "antd/es/upload";
import { validateFile } from "../../../utils/validations-utils";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { MAXUPLOADCSVFILESIZE } from "../../../constants/validations-constant";
import { useAppDispatch } from "../../../store/store";
import { getGiftDetails } from "../../../store/gift/gift-slice";
import { AppComponentsSwitch } from "../../../components/navigations/app-components-switch/app-components-switch";
import { uploadCard } from "../../../components/cards/upload-card/upload-card";
import { AppButton } from "../../../components/buttons/app-button/app-button";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { ADDGIFTIMPORTS } from "./add-gift-imports";
import { ADDGIFTDATA } from "./add-gift-data";

// TODO: needs to change during backend integration
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const AddGift = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { bannerHeading, pageName } = useAppLayout();
  const { openAlert } = useAppAlert();
  const slidesImagesData = ADDGIFTDATA.slidesImages(navigate, dispatch);
  const slidesCardsData = ADDGIFTDATA.slidesCards(navigate, dispatch);
  const [showComponent, setShowComponent] = useState("Occasion");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleChange: UploadProps["onChange"] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  useEffect(() => {
    bannerHeading("Choose Gift Card");
    pageName("Personalized gifts");
  }, [bannerHeading]);
  return (
    <AppCardWhite cardClassName="py-10">
      {showComponent === "Occasion" && (
        <div className="h-96 mx-5 sm:mx-10 md:mx-15 lg:mx-32">
          <AppCarousel slides={slidesImagesData} navigation slidesPerView={1} />
        </div>
      )}
      {showComponent === "Color" && (
        <div className="h-96 mx-5 sm:mx-10 md:mx-15 lg:mx-32">
          <AppCarousel slides={slidesCardsData} navigation slidesPerView={3} />
        </div>
      )}
      {showComponent === "Custom" && (
        <>
          <Row justify={"center"} align={"middle"} className="h-96  ">
            <Col
              onClick={() => {
                if (!!imageUrl) {
                  navigate(
                    `${ADDGIFTIMPORTS.GIFTPATH}${ADDGIFTIMPORTS.SLASHPATH}${ADDGIFTIMPORTS.ADDGIFTDETAILPATH}`
                  );
                  dispatch(getGiftDetails({ image: imageUrl }));
                }
              }}
            >
              <Upload
                disabled={!!imageUrl}
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={(file: File) =>
                  validateFile?.(
                    file,
                    ["image/jpeg", "image/jpg", "image/png"],
                    MAXUPLOADCSVFILESIZE,
                    openAlert
                  )
                }
                onChange={handleChange}
              >
                {imageUrl ? uploadCard(imageUrl, loading) : uploadCard()}
              </Upload>
            </Col>
          </Row>
          {imageUrl && (
            <div className="text-center">
              <Upload
                name="avatar"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={(file: File) =>
                  validateFile?.(
                    file,
                    ["image/jpeg", "image/jpg", "image/png"],
                    MAXUPLOADCSVFILESIZE,
                    openAlert
                  )
                }
                onChange={handleChange}
              >
                <AppButton
                  btnWrapperClassName="mt-0 lg:mt-0"
                  buttons={[
                    {
                      btnText: "Click to replace image",
                    },
                  ]}
                />
              </Upload>
            </div>
          )}
        </>
      )}
      <Row className="mt-16" gutter={[20, 20]} justify={"center"}>
        {ADDGIFTDATA.giftComponentData &&
          ADDGIFTDATA.giftComponentData.map((card: any) => {
            return (
              <Col>
                <AppComponentsSwitch
                  img={card.img}
                  onCardClick={() => setShowComponent(card.title)}
                  title={card.title}
                  showComponent={showComponent}
                />
              </Col>
            );
          })}
      </Row>
    </AppCardWhite>
  );
};
