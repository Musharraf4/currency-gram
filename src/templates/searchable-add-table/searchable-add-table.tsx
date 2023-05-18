import { Col, Row, Select } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppPagination } from "../../components/navigations/app-pagination/app-pagination";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppTable } from "../../components/data-display/app-table/app-table";
import { AppDropdownIcon } from "../../components/dropdowns/app-icon-dropdown/app-icon-dropdown";
import { AppInput } from "../../components/form-elements/app-input/app-input";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { twMergeClass } from "../../lib/tw-merge-override-class-lib";
import { COMMONASSETSCONSTANT } from "../../constants/common-assets-constant";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const SearchableAddTable = (props: any) => {
  const {
    filterSearch,
    filterHeading,
    dataSource,
    columns,
    inputPlaceholder,
    headXs = 24,
    inputXs = 24,
    offsetXs = 0,
    offset1Xs = 0,
    selectXs = 24,
    btnXs = 24,
    dropdownXs = 24,
    headMd,
    inputMd,
    offsetMd,
    offset1Md,
    btnMd,
    dropdownMd,
    selectMd,
    inputLg,
    headLg,
    offsetLg,
    offset1Lg,
    offsetXl,
    offset1Xl,
    btnLg,
    selectLg,
    dropdownLg,
    selectXl,
    inputXl,
    btnXl,
    headXl,
    dropdownXl,
    dropdownXxl,
    headXxl,
    inputXxl,
    btnXxl,
    offsetXxl,
    offset1Xxl,
    select,
    buttons,
    rowClassName,
    dropdown,
    onRow,
    prefix = true,
    suffix = false,
    inputClassName,
    handleSelectChange,
    offset1ClassName = "grow",
    btnClassName,
    rowGutter,
    dropdownClassName,
    cardClassName,
  } = props;

  const inputClass = twMergeClass(
    `mb-2 md:mb-0 mr-1 bg-transparent py-.5 rounded-md ${inputClassName}`
  );
  const btnClass = twMergeClass(`md:text-end ${btnClassName}`);
  const dropdownClass = twMergeClass(`md:text-end ${dropdownClassName}`);
  const cardClass = twMergeClass(`pt-4 pl-2 pb-2 ${cardClassName}`);
  return (
    <>
      <AppCardWhite cardClassName={cardClass}>
        <Row gutter={rowGutter} className="px-4 items-center">
          {!!filterHeading && (
            <Col xs={headXs} md={headMd} lg={headLg} xl={headXl} xxl={headXxl}>
              <AppTitle
                title={filterHeading}
                className="text-primary-text text-lg font-medium mb-2"
              />
            </Col>
          )}
          <Col
            xs={offset1Xs}
            md={offset1Md}
            lg={offset1Lg}
            xl={offset1Xl}
            xxl={offset1Xxl}
            className={offset1ClassName}
          ></Col>
          {!!inputPlaceholder && (
            <Col
              xs={inputXs}
              md={inputMd}
              lg={inputLg}
              xl={inputXl}
              xxl={inputXxl}
              className={inputClassName}
            >
              <AppInput
                placeholder={inputPlaceholder}
                onChange={() => filterSearch?.()}
                inputClassName={inputClass}
                // size="default"
                prefix={
                  prefix && (
                    <ICONSCONSTANT.SearchOutlined
                      type="search"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  )
                }
                suffix={
                  suffix && (
                    <ICONSCONSTANT.SearchOutlined
                      type="search"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  )
                }
              />
            </Col>
          )}

          <Col
            xs={offsetXs}
            md={offsetMd}
            lg={offsetLg}
            xl={offsetXl}
            xxl={offsetXxl}
            className=""
          ></Col>
          {!!buttons?.length && (
            <Col xs={btnXs} md={btnMd} lg={btnLg} xl={btnXl} xxl={btnXxl} className={btnClass}>
              <AppButton buttons={buttons} btnWrapperClassName="mt-0 lg:mt-0" />
            </Col>
          )}
          {!!dropdown?.length && (
            <Col
              xs={dropdownXs}
              md={dropdownMd}
              lg={dropdownLg}
              xl={dropdownXl}
              xxl={dropdownXxl}
              className={dropdownClass}
            >
              {!!dropdown?.length &&
                dropdown?.map((singleDropdown: any) => (
                  <AppDropdownIcon
                    items={singleDropdown?.items}
                    title={singleDropdown?.title}
                    className={singleDropdown?.className}
                  />
                ))}
            </Col>
          )}
          {select && (
            <Col xs={selectXs} md={selectMd} lg={selectLg} xl={selectXl} className="md:text-end">
              <Select
                className="bg-select-elegant w-full"
                defaultValue="GBP"
                onChange={() => handleSelectChange?.()}
                bordered={false}
                options={[
                  {
                    value: "GBP",
                    label: (
                      <div className="flex align-center" style={{ gap: "10px" }}>
                        <img
                          src={COMMONASSETSCONSTANT.gbpImage}
                          alt="u"
                          className="cursor-pointer"
                        />{" "}
                        <span>GBP</span>
                      </div>
                    ),
                  },
                  {
                    value: "Euro",
                    label: (
                      <div className="flex align-center" style={{ gap: "10px" }}>
                        <img
                          src={COMMONASSETSCONSTANT.euroImage}
                          alt="uk"
                          className="cursor-pointer"
                        />{" "}
                        <span>Euro</span>
                      </div>
                    ),
                  },
                ]}
              />
            </Col>
          )}
        </Row>
        <div style={{ overflow: "auto" }} className="pt-2">
          <AppTable
            onRow={onRow}
            scrollX={1200}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowClassName={(record: any, index: any) => rowClassName?.(record, index)}
          />
        </div>
        <div className="pagination mt-3 mb-2">
          <AppPagination totalPages={dataSource?.length} currentPage={1} />
        </div>
      </AppCardWhite>
    </>
  );
};
