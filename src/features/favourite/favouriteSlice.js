import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    recipeAdded: (state, action) => {
      state.recipes.unshift(action.payload);
    },
    recipeRemoved: (state, action) => {
      state.recipes = state.recipes.filter((el) => el.id !== action.payload.id);
    },
    recipeAllRemoved: (state) => {
      state.recipes = [];
    },
  },
});

export default favouriteSlice.reducer;
export const { recipeAdded, recipeRemoved, recipeAllRemoved } =
  favouriteSlice.actions;
