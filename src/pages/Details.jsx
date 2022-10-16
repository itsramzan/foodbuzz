import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../components/Shared/Heading";
import DetailsLeft from "../components/Details/DetailsLeft";
import DetailsRight from "../components/Details/DetailsRight";
import SimilarRecipes from "../components/Details/SimilarRecipes";
import { useGetInfoQuery } from "../features/recipes/recipesApi";

const Details = () => {
  const { id } = useParams();

  const { isFetching, data, isError, error } = useGetInfoQuery({ id });

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

  if (!isFetching && !isError && !data?.id) content = <p>No item found</p>;

  if (!isFetching && !isError && data?.id)
    content = (
      <>
        <Heading title="Recipe Details" />
        <div className="grid grid-cols-12 gap-4 md:gap-16">
          <DetailsLeft data={data} />
          <DetailsRight data={data} />
        </div>
        <SimilarRecipes ingredients={data.extendedIngredients} />
      </>
    );

  return <div className="space-y-4">{content}</div>;
};

export default Details;
