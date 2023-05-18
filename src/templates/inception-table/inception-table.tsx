import { Button, Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { SearchableAddTable } from "../searchable-add-table/searchable-add-table";

export const InceptionTableTemplate = (props: any) => {
  const { mainTitle, tableHeadButtons, dataSource, columns, filterHeading } = props;
  return (
    <div className="p-4">
      <Row className="items-center mb-3 md:mb-5">
        <Col lg={6}>
          <AppTitle className="text-xl font-medium" title={mainTitle} />
        </Col>
        <Col lg={4}></Col>
        <Col lg={14} className="md:text-end">
          {!!tableHeadButtons?.length &&
            tableHeadButtons?.map?.((x: any) => (
              <Button
                size={x?.size}
                className={x?.className}
                disabled={x?.disabled}
                icon={x?.icon}
                type={x?.type}
                ghost={x?.ghost}
                onClick={(e: any) => {
                  x?.btnLink?.(e);
                }}
              >
                <AppTitle title={x?.btnText} className={x?.btnClassName} Variant={x?.btnVariant} />
              </Button>
            ))}
        </Col>
      </Row>
      <SearchableAddTable
        cardClassName="shadow-none bg-transparent border border-solid border-light-grey"
        dataSource={dataSource}
        columns={columns}
        filterHeading={filterHeading}
      />
    </div>
  );
};
