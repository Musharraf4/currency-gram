import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigatabelCardWithTable } from "../../../templates/navigatable-card-with-table.tsx/navigatable-card-with-table";
import { Space } from "antd";
import { SLASHPATH, ADDGIFTCARDPATH, MOREPATH } from "../../../constants/routes-constant";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { GIFTLISTSDATA } from "./gift-lists-data";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const GiftLists = () => {
  const navigate = useNavigate();
  const { bannerHeading, pageName } = useAppLayout();
  const [showScheduleGifts, setShowScheduleGifts] = useState("Scheduled Gifts");
  const giftCardsData = GIFTLISTSDATA.giftCardsDataFunction(setShowScheduleGifts);
  const scheduleGiftsColumnsData = GIFTLISTSDATA.scheduleGiftsColumns(navigate);
  const sendReceiveGiftsColumnsData = GIFTLISTSDATA.sendReceiveGiftsColumns(navigate);
  useEffect(() => {
    bannerHeading("Gifts");
    pageName("Personalized gifts");
  }, [bannerHeading]);
  return (
    <>
      <NavigatabelCardWithTable
        primaryCardData={giftCardsData}
        dataSource={
          showScheduleGifts === "Scheduled Gifts"
            ? GIFTLISTSDATA.scheduleGiftsData
            : GIFTLISTSDATA.sendReceiveGiftsData
        }
        columns={
          showScheduleGifts === "Scheduled Gifts"
            ? scheduleGiftsColumnsData
            : sendReceiveGiftsColumnsData
        }
        inputPlaceholder="Name, Phone Number"
        selectXs={24}
        selectLg={12}
        activeCard={showScheduleGifts}
        selectMd={12}
        inputMd={10}
        inputLg={8}
        inputXs={24}
        btnMd={14}
        btnLg={16}
        offsetXs={0}
        buttons={[
          {
            btnText: (
              <Space wrap>
                <ICONSCONSTANT.PlusOutlined />
                <span>ADD</span>
              </Space>
            ),
            size: "large",
            className: "bg-primary text-white",
            btnLink: () => navigate(`${MOREPATH}${SLASHPATH}${ADDGIFTCARDPATH}`),
          },
        ]}
      />
    </>
  );
};
