import { getGiftDetails } from "../../../store/gift/gift-slice";
import { ADDGITIMAGES } from "./add-gift-images";
import { ADDGIFTIMPORTS } from "./add-gift-imports";

const slidesImages = (navigate: any, dispatch: any) => [
  <div>
    <img
      src={ADDGITIMAGES.frame1Image}
      className="cursor-pointer"
      onClick={() => {
        navigate(
          `${ADDGIFTIMPORTS.MOREPATH}${ADDGIFTIMPORTS.SLASHPATH}${ADDGIFTIMPORTS.ADDGIFTDETAILPATH}`
        );
        dispatch(getGiftDetails({ image: ADDGITIMAGES.frame1Image }));
      }}
    />
  </div>,
  <div>
    <img
      src={ADDGITIMAGES.frame2Image}
      className="cursor-pointer"
      onClick={() => {
        navigate(
          `${ADDGIFTIMPORTS.MOREPATH}${ADDGIFTIMPORTS.SLASHPATH}${ADDGIFTIMPORTS.ADDGIFTDETAILPATH}`
        );
        dispatch(getGiftDetails({ image: ADDGITIMAGES.frame2Image }));
      }}
    />
  </div>,
  <div>
    <img
      src={ADDGITIMAGES.frame3Image}
      className="cursor-pointer"
      onClick={() => {
        navigate(
          `${ADDGIFTIMPORTS.MOREPATH}${ADDGIFTIMPORTS.SLASHPATH}${ADDGIFTIMPORTS.ADDGIFTDETAILPATH}`
        );
        dispatch(getGiftDetails({ image: ADDGITIMAGES.frame3Image }));
      }}
    />
  </div>,
  <div>
    <img src={ADDGITIMAGES.frame2Image} />
  </div>,
  <div>
    <img src={ADDGITIMAGES.frame3Image} />
  </div>,
];
const slidesCards = (navigate: any, dispatch: any) => [
  <div
    className="bg-[#DDAD3E] h-full rounded-2xl  cursor-pointer"
    style={{ minWidth: "224px", maxWidth: "224px" }}
    onClick={() => {
      navigate(
        `${ADDGIFTIMPORTS.MOREPATH}${ADDGIFTIMPORTS.SLASHPATH}${ADDGIFTIMPORTS.ADDGIFTDETAILPATH}`
      );
      dispatch(getGiftDetails({ color: "#DDAD3E" }));
    }}
  ></div>,
  <div
    className="bg-[#06D6A0FF] h-full rounded-2xl cursor-pointer"
    style={{ minWidth: "224px", maxWidth: "224px" }}
    onClick={() => {
      navigate(
        `${ADDGIFTIMPORTS.MOREPATH}${ADDGIFTIMPORTS.SLASHPATH}${ADDGIFTIMPORTS.ADDGIFTDETAILPATH}`
      );
      dispatch(getGiftDetails({ color: "#06D6A0FF" }));
    }}
  ></div>,
  <div
    className="bg-[#FF4343] h-full rounded-2xl cursor-pointer"
    style={{ minWidth: "224px", maxWidth: "224px" }}
    onClick={() => {
      navigate(
        `${ADDGIFTIMPORTS.MOREPATH}${ADDGIFTIMPORTS.SLASHPATH}${ADDGIFTIMPORTS.ADDGIFTDETAILPATH}`
      );
      dispatch(getGiftDetails({ color: "#FF4343" }));
    }}
  ></div>,
  <div
    className="bg-[#06D6A0FF] h-full rounded-2xl"
    style={{ minWidth: "224px", maxWidth: "224px" }}
  ></div>,
  <div
    className="bg-[#FF4343] h-full rounded-2xl"
    style={{ minWidth: "224px", maxWidth: "224px" }}
  ></div>,
];

const giftComponentData = [
  {
    id: 1,
    img: ADDGITIMAGES.occassionImage,
    title: "Occasion",
  },
  {
    id: 2,
    img: ADDGITIMAGES.colorImage,
    title: "Color",
  },
  {
    id: 3,
    img: ADDGITIMAGES.customImage,
    title: "Custom",
  },
];

export const ADDGIFTDATA = {
  giftComponentData,
  slidesCards,
  slidesImages,
};
