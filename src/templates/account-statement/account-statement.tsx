import { Row, Col, Button, Dropdown, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { TRANSACTIONPATH } from "../../constants/routes-constant";
import { AppPagination } from "../../components/navigations/app-pagination/app-pagination";
import searchImage from "../../assets/images/dashboard/search.svg";
import { AppTable } from "../../components/data-display/app-table/app-table";
import { AppInput } from "../../components/form-elements/app-input/app-input";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const AccountStatementTableTemplate = (props: any) => {
  const {
    paginationTable,
    searchHeader,
    scrollY,
    scrollX,
    getTableData,
    accountStatementTable,
    accountStatementHeader,
    items,
  } = props;

  return (
    <div className="shadow-md account-statement-table mt-3 rounded-lg">
      {searchHeader === true ? (
        <Row justify={"space-between"} className="p-4">
          <Col className="" lg={5} md={5} xs={24}>
            <AppInput
              placeholder="Search..."
              size="middle"
              className="w-full mt-1"
              prefix={
                <img src={searchImage} alt="bin" className="cursor-pointer" />
              }
            />
          </Col>

          <Col xs={24} md={10} lg={6}>
            <Row className="items-center justify-between">
              <Col className="">
                <Dropdown menu={{ items }} placement="bottomRight">
                  <Button>
                    By Category <ICONSCONSTANT.MenuOutlined />
                  </Button>
                </Dropdown>
              </Col>

              <Col>
                <DatePicker />
              </Col>
              <Col>
                <Button icon={<ICONSCONSTANT.ShareAltOutlined />}></Button>
              </Col>
              <Col>
                <Button icon={<ICONSCONSTANT.DownloadOutlined />}></Button>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row justify="space-between" className="p-4">
          <Col xs={24} sm={12} md={24} lg={8} xl={6}>
            <AppTitle
              title="Recent Transactions"
              className="text-base font-semibold mt-2 secondary-text-color"
            ></AppTitle>
          </Col>
        </Row>
      )}

      <div>
        <AppTable
          scrollX={scrollX}
          scrollY={scrollY}
          columns={accountStatementHeader}
          dataSource={accountStatementTable}
          pagination={false}
          onRow={(e: any) => getTableData?.(e)}
        />
      </div>
      {paginationTable === false ? (
        <div className="flex justify-end cursor-pointer mr-1">
          <Link
            to={`${TRANSACTIONPATH}`}
            className="secondary-title font-weight-500 text-grey p-4"
          >
            See more <ICONSCONSTANT.RightOutlined />
          </Link>
        </div>
      ) : (
        <div className="flex justify-end mr-1 py-3">
          <AppPagination
            totalPages={accountStatementTable.length}
            currentPage={1}
          />
        </div>
      )}
    </div>
  );
};
