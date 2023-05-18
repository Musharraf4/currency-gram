import { Table } from "antd";
import "./app-table.scss";
export const AppTable = (props: any) => {
  const { dataSource, columns, rowSelection, scrollX, scrollY, onRow, rowClassName } = props;
  console.log(rowClassName);
  return (
    <div className="my-table mt-1 overflow-auto pb-1">
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        scroll={{ y: scrollY, x: scrollX }}
        rowSelection={rowSelection}
        onRow={onRow}
        rowClassName={(record: any, index: any) => rowClassName?.(record, index)}
        // style={{ minWidth: "1500px" }}
      />
    </div>
  );
};

// Usage of onRow
{
  /* <Table
  onRow={(record, rowIndex) => {
    return {
      onClick: (event) => {}, // click row
      onDoubleClick: (event) => {}, // double click row
      onContextMenu: (event) => {}, // right button click row
      onMouseEnter: (event) => {}, // mouse enter row
      onMouseLeave: (event) => {}, // mouse leave row
    };
  }}
  /> */
}
