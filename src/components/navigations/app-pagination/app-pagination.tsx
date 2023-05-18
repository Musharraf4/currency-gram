import { Anchor, Pagination } from "antd";
import type { PaginationProps } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./app-pagination.scss";

export const AppPagination = (props: any) => {
  const {
    defaultCurrent,
    size,
    totalPages,
    defaultPageSize,
    previousText,
    nextText,
    nextPreviousClass,
  } = props;

  const paginationItem: PaginationProps["itemRender"] = (_, type, originalElement) => {
    if (type === "prev") {
      return (
        <div className={nextPreviousClass}>
          <LeftOutlined />
          <Anchor>{previousText}</Anchor>
        </div>
      );
    }
    if (type === "next") {
      return (
        <div className={nextPreviousClass}>
          <Anchor>{nextText}</Anchor>
          <RightOutlined />
        </div>
      );
    }
    return originalElement;
  };

  return (
    <div className="app-pagination text-end">
      <Pagination
        size={size}
        total={totalPages}
        // nextPreviousClass={nextPreviousClass}
        // previousText={previousText}
        // nextText={nextText}
        defaultCurrent={defaultCurrent}
        defaultPageSize={defaultPageSize}
        itemRender={paginationItem}
        className="app-pagination-number"
      />
    </div>
  );
};
