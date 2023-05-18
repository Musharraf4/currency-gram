import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SLASHPATH,
  TEAMMEMBERDETAILSPARAM,
  TEAMSMANAGEMENTPATH,
} from "../../../constants/routes-constant";
import {
  TeamsManagementTaableHeader,
  TeamsManagementData,
  addTeamButtonFunction,
  buttonsFuntion,
} from "./team-members-list-data";
import { SearchableAddTable } from "../../../templates/searchable-add-table/searchable-add-table";
import { EmptyListTemplate } from "../../../templates/empty-list/empty-list";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { useAppLayout } from "../../../hooks/use-app-layout";

export const TeamMembersLists = () => {
  const [tableRecods, setTableRecords] = useState();
  const { bannerHeading, pageName } = useAppLayout();
  const navigate = useNavigate();

  const buttonData = buttonsFuntion(navigate);

  const getTableRecod = (record: any) => {
    setTableRecords(record);
    navigate(
      `${SLASHPATH}${TEAMSMANAGEMENTPATH}${SLASHPATH}${TEAMMEMBERDETAILSPARAM}${SLASHPATH}${record?.key}`
    );
  };

  useEffect(() => {
    bannerHeading("Team");
    pageName("Team Management");
  }, []);

  const addTeamButton = addTeamButtonFunction(navigate);

  return (
    <div>
      {!TeamsManagementData.length ? (
        <AppCardWhite>
          <EmptyListTemplate buttonData={buttonData} title="No User Active" />
        </AppCardWhite>
      ) : (
        <SearchableAddTable
          filterHeading="Active and Pending Users"
          inputPlaceholder="Name,Email,Role,Status"
          btnWrapperClassName=""
          inputLg={7}
          headLg={14}
          btnMd={1}
          offsetLg={1}
          buttons={addTeamButton}
          dataSource={TeamsManagementData}
          columns={TeamsManagementTaableHeader}
          onRow={(record: any) => {
            return {
              onClick: () => getTableRecod(record),
            };
          }}
        />
      )}
    </div>
  );
};
