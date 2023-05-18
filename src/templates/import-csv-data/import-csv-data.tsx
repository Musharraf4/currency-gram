import { Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { DraggerFileUpload } from "../../components/form-elements/app-dragger-file-upload/app-dragger-file-upload";
import { SearchableAddTable } from "../searchable-add-table/searchable-add-table";
import { ICONSCONSTANT } from "../../constants/icons-constant";
// import { columns, dataSource } from "./currency-gram-to-currency-gram-bulk-payment-data";

export const ImportCsvDataTemplate = (props: any) => {
  const {
    hyperLinkFunction,
    dataSource,
    columns,
    buttons,
    csvData,
    setCsvData,
    csvFileInfoState,
    fileUploadSuccess,
    setFileUploadSuccess,
    fileInfo,
    setFileInfo,
    csvErrorData,
    setCsvErrorData,
    rowClassName,
  } = props;
  // console.log(props);

  return (
    <>
      <div className="dragger">
        <DraggerFileUpload
          csvData={csvData}
          setCsvData={setCsvData}
          dataSource={dataSource}
          csvFileInfoState={csvFileInfoState}
          fileUploadSuccess={fileUploadSuccess}
          setFileUploadSuccess={setFileUploadSuccess}
          fileInfo={fileInfo}
          setFileInfo={setFileInfo}
          csvErrorData={csvErrorData}
          setCsvErrorData={setCsvErrorData}
        />
      </div>
      <div>
        <Row className="mt-4 mb-4">
          <Col xs={24} md={6} className="text-primary-text ">
            <AppTitle
              title={
                fileUploadSuccess
                  ? `Account Found ${csvData?.length - csvErrorData?.length}/${csvData?.length}`
                  : "Files supported: Bac- 18"
              }
              className="text-sm font-medium mb-1"
            />
          </Col>
          <Col xs={24} md={12}></Col>
          <Col xs={24} md={6} className="md:text-end">
            <AppTitle
              title={
                fileUploadSuccess ? (
                  <>
                    {" "}
                    <ICONSCONSTANT.InfoCircleOutlined className="text-danger mr-1" /> There are{" "}
                    {csvErrorData?.length} errors in the file{" "}
                  </>
                ) : (
                  "Files template:"
                )
              }
              className="text-primary-text text-sm font-medium"
              Variant="span"
            />
            <AppTitle
              title={
                fileUploadSuccess ? (
                  ""
                ) : (
                  <a href="../../assets/csv/Bac.csv" download>
                    Bac-18.download{" "}
                  </a>
                )
              }
              className="text-sm font-medium mb-1 cursor-pointer text-primary underline"
              Variant="span"
              onClick={() => hyperLinkFunction?.()}
            />
          </Col>
        </Row>
      </div>
      <div>
        <SearchableAddTable
          dataSource={dataSource}
          columns={columns}
          filterHeading="Choose File"
          buttons={buttons}
          headXs={24}
          headLg={8}
          btnXs={24}
          btnLg={12}
          offsetLg={4}
          offsetXs={24}
          rowClassName={(record: any, index: any) => rowClassName?.(record, index)}
        />
      </div>
    </>
  );
};
