import { useState } from "react";
import { AppModal } from "../../../components/modals/app-modal/app-modal";
import { GiftDetailTemplate } from "../../../templates/gift-details-template/gift-details-template";
import { AppShareModal } from "../../../components/modals/app-share-modal/app-share-modal";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";
import { GIFTDETAILIMAGES } from "./gift-details-images";
import { GIFTDETAILDATA } from "./gift-detail-data";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const ViewGiftDetail = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <AppCardWhite>
        <UserDetailCard
          size={55}
          userDetailsClassName="px-5 py-10 items-center"
          userInfoClassName="flex-1 ml-2"
          icon={<ICONSCONSTANT.ArrowUpOutlined />}
          avatarStyle={{ backgroundColor: "#B51629" }}
          heading="Transferred to Allen Roger"
          headingClassName="text-base font-medium"
          description="Monday, Dec 15, 2022 11:05AM"
          descriptionClassName="text-xs font-normal text-grey mt-1"
          userPrice="£ 400.00"
          userPriceClassName="text-2xl font-bold text-secondary"
          showPrice={true}
        />
      </AppCardWhite>
      <GiftDetailTemplate
        giftImage={GIFTDETAILIMAGES.frame1Image}
        dataToDisplay={GIFTDETAILDATA.transactionDetails}
        peopleClaimedData={GIFTDETAILDATA.viewGiftDetailData}
        peopleClaimedColumns={GIFTDETAILDATA.viewGiftDetailColumns}
        buttonText="Cancel"
        buttonFunction={() => setShowCancelModal(true)}
        heading={"Transaction Details"}
        shareIconFunction={() => setIsModalOpen(true)}
      />
      {showCancelModal && (
        <AppModal
          isModalOpen={showCancelModal}
          handleOk={() => setShowCancelModal?.(false)}
          handleCancel={() => setShowCancelModal?.(false)}
          //   submitBtnFunction={(e: any) => onConfirmDelete?.(e)}
          heading="Are you sure you want to delete this record"
          avatarSize={60}
          src={GIFTDETAILIMAGES.wastedImage}
          cancelBtnClassName=" bg-white text-[#007BFF]"
          submitBtnClassName="bg-primary text-white"
          submitBtnFunction={() => setShowCancelModal(false)}
          avatarClassName="text-2xl bg-danger p-4"
          headingClassName="my-3"
          firstButtonText="Yes"
          secondButtonText="No"
          closeIcon={<></>}
        />
      )}
      {isModalOpen && (
        <AppShareModal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};
