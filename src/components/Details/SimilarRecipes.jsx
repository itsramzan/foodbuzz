import React from "react";
import Grid from "../Grid/Grid";
import { useGetSimilarQuery } from "../../features/recipes/recipesApi";

const SimilarRecipes = ({ ingredients }) => {
  const ingredientsText = ingredients?.map((el) => el.name).join(",+");

  const { isFetching, data, isError, error } = useGetSimilarQuery({
    ingredients: ingredientsText,
  });

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

  if (!isFetching && !isError && data?.length === 0)
    content = <p>No item found</p>;

  if (!isFetching && !isError && data?.length > 0)
    content = <Grid title="Similar recipes" items={data.slice(1)} />;

  return <div className="space-y-4">{content}</div>;
};

export default SimilarRecipes;
