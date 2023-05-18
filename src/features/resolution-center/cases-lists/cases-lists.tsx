import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigatabelCardWithTable } from "../../../templates/navigatable-card-with-table.tsx/navigatable-card-with-table";
import { Space } from "antd";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { CASESLISTSDATA } from "./cases-lists-data";
import { CASESLISTSIMPORTS } from "./cases-lists-imports";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const CasesLists = () => {
  const navigate = useNavigate();
  const { bannerHeading, pageName } = useAppLayout();
  const [cases, setCases] = useState("Open Cases");
  const casesCards = CASESLISTSDATA.casesCardsData(setCases);
  const openCasesColumnsData = CASESLISTSDATA.openCasesColumns(navigate);
  const closeCasesColumnsData = CASESLISTSDATA.closeCasesColumns(navigate);
  useEffect(() => {
    bannerHeading("Resolution Center");
    pageName("Home");
  }, [bannerHeading]);
  return (
    <>
      <NavigatabelCardWithTable
        primaryCardData={casesCards}
        dataSource={
          cases === "Open Cases" ? CASESLISTSDATA.closeCasesData : CASESLISTSDATA.openCasesData
        }
        columns={cases === "Open Cases" ? closeCasesColumnsData : openCasesColumnsData}
        inputPlaceholder="Name, Phone Number"
        inputMd={10}
        inputLg={8}
        inputXs={24}
        activeCard={cases}
        btnMd={14}
        offsetXs={0}
        btnLg={16}
        onRow={() => {
          return {
            onClick: () =>
              navigate(
                `${CASESLISTSIMPORTS.HELPPATH}${CASESLISTSIMPORTS.SLASHPATH}${CASESLISTSIMPORTS.CASEDETAILSPATH}`
              ),
          };
        }}
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
            btnLink: () =>
              navigate(
                `${CASESLISTSIMPORTS.HELPPATH}${CASESLISTSIMPORTS.SLASHPATH}${CASESLISTSIMPORTS.ADDCASEPATH}`
              ),
          },
        ]}
      />
    </>
  );
};
