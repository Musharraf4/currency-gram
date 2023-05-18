import { MainCard } from "../main-card/main-card";
import { SearchableAddTable } from "../searchable-add-table/searchable-add-table";

export const NavigatabelCardWithTable = (props: any) => {
  const {
    dataSource,
    columns,
    primaryCardData,
    inputPlaceholder,
    inputMd,
    inputXs,
    select,
    selectXs,
    selectLg,
    selectMd,
    filterHeading,
    buttons,
    offsetMd,
    offsetXs,
    btnXs,
    btnMd,
    headLg,
    inputLg,
    offsetLg,
    btnLg,
    headMd,
    activeCard,
    dropdown,
    onRow,
    offsetXl,
    selectXl,
  } = props;
  console.log(props);
  return (
    <div>
      {!!primaryCardData.length && (
        <MainCard
          primaryCardData={primaryCardData}
          mainDivClassName="pt-8 pl-4 pr-4"
          activeCard={activeCard}
        />
      )}
      <SearchableAddTable
        dataSource={dataSource}
        columns={columns}
        inputPlaceholder={inputPlaceholder}
        inputMd={inputMd}
        inputXs={inputXs}
        select={select}
        selectXs={selectXs}
        selectLg={selectLg}
        selectMd={selectMd}
        filterHeading={filterHeading}
        buttons={buttons}
        offsetMd={offsetMd}
        offsetXs={offsetXs}
        btnXs={btnXs}
        btnMd={btnMd}
        headLg={headLg}
        headMd={headMd}
        inputLg={inputLg}
        offsetLg={offsetLg}
        offsetXl={offsetXl}
        selectXl={selectXl}
        dropdown={dropdown}
        onRow={onRow}
        // offsetLg={offsetMd}
        btnLg={btnLg}
      />
    </div>
  );
};
