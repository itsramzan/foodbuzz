import React from "react";
import noImage from "../../assets/images/noImage.jpg";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  recipeAdded,
  recipeRemoved,
} from "../../features/favourite/favouriteSlice";

const DetailsLeft = ({ data }) => {
  const { id, image } = data || {};

  const { recipes } = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  const isFavourite = recipes.find((recipe) => recipe.id === id);

  const handleRecipeAdded = (e) => {
    e.preventDefault();
    dispatch(recipeAdded(data));
  };

  const handleRecipeRemoved = (e) => {
    e.preventDefault();
    dispatch(recipeRemoved(data));
  };

  return (
    <div className="col-span-12 md:col-span-5 relative">
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
  );
};

export default DetailsLeft;
