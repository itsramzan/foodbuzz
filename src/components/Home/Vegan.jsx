import React from "react";
import { useGetVeganQuery } from "../../features/recipes/recipesApi";
import Grid from "../Grid/Grid";

const Vegan = () => {
  const { isFetching, data, isError, error } = useGetVeganQuery();

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

  if (!isFetching && !isError && data?.recipes?.length === 0)
    content = <p>No item found</p>;

  if (!isFetching && !isError && data?.recipes?.length > 0)
    content = <Grid title="For vegan" items={data.recipes} />;

  return content;
};

export default Vegan;
