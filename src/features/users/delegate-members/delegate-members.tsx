import { SearchableAddTable } from "../../../templates/searchable-add-table/searchable-add-table";
import { delegateMembersListColumns, delegateMembersListData } from "./delegate-members-data";
import { useDelegateMembers } from "./use-delegate-members";

export const DelegateMembers = () => {
  const { colorPill, navigate, delegateMembersDropDownMenuItem } = useDelegateMembers();
  return (
    <div className="mt-4 lg:mt-10">
      <SearchableAddTable
        dataSource={delegateMembersListData}
        columns={delegateMembersListColumns?.(navigate, colorPill)}
        filterHeading="Deligate member details"
        dropdown={delegateMembersDropDownMenuItem}
        inputPlaceholder="Search"
        prefix={false}
        suffix={true}
        headMd={8}
        offset1Md={1}
        inputMd={5}
        dropdownMd={10}
        headLg={10}
        dropdownLg={8}
        headXl={12}
        inputXl={5}
        dropdownXl={6}
        dropdownXxl={5}
        headXxl={13}
        // rowGutter={{ xs: 3, md: 5, lg: 7 }}
        inputClassName="text-end bg-input-background"
        dropdownClassName="text-start md:text-center"
      />
    </div>
  );
};
