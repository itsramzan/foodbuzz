import React, { useState } from "react";
import { useSelector } from "react-redux";
import Search from "../components/Shared/Search";
import Filter from "../components/Shared/Filter";
import Grid from "../components/Grid/Grid";
import Pagination from "../components/Shared/Pagination";
import scrollTop from "../utils/scrollTop";

const Favourite = () => {
  const [page, setPage] = useState(1);
  const size = Number(process.env.REACT_APP_ITEM_LIMIT);

  const { recipes } = useSelector((state) => state.favourite);

  const handlePaginate = (current) => {
    setPage(current);
    scrollTop();
  };

  // Decide what to render
  let content = null;

  if (recipes?.length === 0) content = <p>No item found</p>;

  if (recipes?.length > 0)
    content = (
      <>
        <Grid
          title="My Favourite"
          items={recipes.slice(size * page - size, size * page)}
        />
        <Pagination
          page={page}
          totalResults={recipes.length}
          pageSize={size}
          handlePaginate={handlePaginate}
        />
      </>
    );

  return (
    <div className="space-y-4">
      <Search />
      <Filter />
      {content}
    </div>
  );
};

export default Favourite;
