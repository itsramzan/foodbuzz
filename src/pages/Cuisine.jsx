import React, { useState, useEffect } from "react";
import Search from "../components/Shared/Search";
import Filter from "../components/Shared/Filter";
import Grid from "../components/Grid/Grid";
import Pagination from "../components/Shared/Pagination";
import { useGetCuisineQuery } from "../features/recipes/recipesApi";
import { useParams } from "react-router-dom";
import scrollTop from "../utils/scrollTop";

const Cuisine = () => {
  const [page, setPage] = useState(1);

  const { name } = useParams();

  const { isFetching, data, isError, error } = useGetCuisineQuery({
    name,
    offset:
      page * process.env.REACT_APP_ITEM_LIMIT -
      process.env.REACT_APP_ITEM_LIMIT,
  });

  useEffect(() => {
    setPage(1);
  }, [name]);

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
        <Grid title={`Cuisine - "${name}"`} items={results} />
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

export default Cuisine;
