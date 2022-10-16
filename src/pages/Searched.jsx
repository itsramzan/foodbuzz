import React, { useState, useEffect } from "react";
import Search from "../components/Shared/Search";
import Filter from "../components/Shared/Filter";
import Grid from "../components/Grid/Grid";
import Pagination from "../components/Shared/Pagination";
import { useGetSearchedQuery } from "../features/recipes/recipesApi";
import { useParams } from "react-router-dom";
import scrollTop from "../utils/scrollTop";

const Searched = () => {
  const [page, setPage] = useState(1);

  const { search } = useParams();

  const { isFetching, data, isError, error } = useGetSearchedQuery({
    search,
    offset:
      page * process.env.REACT_APP_ITEM_LIMIT -
      process.env.REACT_APP_ITEM_LIMIT,
  });

  useEffect(() => {
    setPage(1);
  }, [search]);

  const handlePaginate = (current) => {
    setPage(current);
    scrollTop();
  };

  // Decide what to render
  let content = null;

  if (isFetching) content = <p>Loading...</p>;

  if (!isFetching && isError)
    content = (
      <p>
        {error?.data?.status_message
          ? error.data.status_message
          : "Something went wrong"}
      </p>
    );

  if (!isFetching && !isError && data?.results?.length === 0)
    content = <p>No item found</p>;

  if (!isFetching && !isError && data?.results?.length > 0) {
    const { totalResults, number, results } = data;

    content = (
      <>
        <Grid title={`Searched by - "${search}"`} items={results} />
        <Pagination
          page={page}
          totalResults={totalResults}
          pageSize={number}
          handlePaginate={handlePaginate}
        />
      </>
    );
  }

  return (
    <div className="space-y-4">
      <Search />
      <Filter />
      {content}
    </div>
  );
};

export default Searched;
