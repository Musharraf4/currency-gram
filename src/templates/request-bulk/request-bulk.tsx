import { Col, Row } from "antd";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { ObjectDetails } from "../../components/data-display/app-object-details/app-object-details";
import { SearchableAddTable } from "../searchable-add-table/searchable-add-table";

export const RequestBulkTemplate = (props: any) => {
  const {
    dataSource,
    columns,
    inputPlaceholder,
    inputMd,
    inputXs,
    filterHeading,
    buttons,
    onRow,
    requestInitiator,
    mainTitle,
  } = props;
  return (
    <>
      <div>
        <AppCardWhite>
          <Row>
            <Col xs={24} md={4} lg={7}></Col>
            <Col xs={24} md={16} lg={10} className="pt-4 pb-8">
              <div className="bg-white shadow-none rounded-xl p-4 border-1 border-light-grey border-solid">
                <ObjectDetails
                  detailsToMap={requestInitiator}
                  hasHr={false}
                  mainTitle={mainTitle}
                  mainclassName="bg-white shadow-none "
                />
                <AppButton buttons={buttons} btnWrapperClassName="lg:mt-2" />
              </div>
            </Col>
            <Col xs={24} md={4} lg={7}></Col>
          </Row>
        </AppCardWhite>
        <SearchableAddTable
          dataSource={dataSource}
          columns={columns}
          inputPlaceholder={inputPlaceholder}
          inputMd={inputMd}
          inputXs={inputXs}
          filterHeading={filterHeading}
          onRow={onRow}
        />
      </div>
    </>
  );
};
