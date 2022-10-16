import React from "react";
import noImage from "../../assets/images/noImage.jpg";
import { Link } from "react-router-dom";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  recipeAdded,
  recipeRemoved,
} from "../../features/favourite/favouriteSlice";

const GridItem = ({ item }) => {
  const { id, image, title } = item || {};

  const { recipes } = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  const isFavourite = recipes.find((recipe) => recipe.id === id);

  const handleRecipeAdded = (e) => {
    e.preventDefault();
    dispatch(recipeAdded(item));
  };

  const handleRecipeRemoved = (e) => {
    e.preventDefault();
    dispatch(recipeRemoved(item));
  };

  return (
    <Link
      to={`/recipes/${id}`}
      className="space-y-2 rounded-md transition-transform hover:scale-105"
    >
      <div className="relative">
        <img src={image ? image : noImage} alt="" className="rounded-md" />
        {isFavourite ? (
          <IoHeart
            onClick={handleRecipeRemoved}
            className="absolute top-2 right-2 bg-white text-blue-700 h-8 w-8 p-2 rounded-md shadow-md cursor-pointer"
          />
        ) : (
          <IoHeartOutline
            onClick={handleRecipeAdded}
            className="absolute top-2 right-2 bg-white h-8 w-8 p-2 rounded-md shadow-md cursor-pointer"
          />
        )}
      </div>
      <p className="text-md font-semibold line-clamp-1">
        {title ? title : "Not available"}
      </p>
    </Link>
  );
};

export default GridItem;
