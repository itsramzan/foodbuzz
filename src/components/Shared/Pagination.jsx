import React from "react";
import ReactPagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const Pagination = ({ page, totalResults, pageSize, handlePaginate }) => {
  return (
    <div className="flex justify-end items-center pt-4">
      <ReactPagination
        defaultCurrent={page}
        current={page}
        total={totalResults}
        pageSize={pageSize}
        locale="en-US"
        onChange={handlePaginate}
      />
    </div>
  );
};

export default Pagination;
