import apiSlice from "../api/apiSlice";

const recipesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: () => ({
        url: `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${process.env.REACT_APP_ITEM_LIMIT}`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getVegan: builder.query({
      query: () => ({
        url: `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${process.env.REACT_APP_ITEM_LIMIT}&tags=vegetarian`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getSearched: builder.query({
      query: ({ search, offset }) => ({
        url: `/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}&number=${process.env.REACT_APP_ITEM_LIMIT}&offset=${offset}`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getCuisine: builder.query({
      query: ({ name, offset }) => ({
        url: `/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=${process.env.REACT_APP_ITEM_LIMIT}&offset=${offset}`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getInfo: builder.query({
      query: ({ id }) => ({
        url: `/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
    getSimilar: builder.query({
      query: ({ ingredients }) => ({
        url: `/findByIngredients?apiKey=${
          process.env.REACT_APP_API_KEY
        }&ingredients=${ingredients}&number=${
          Number(process.env.REACT_APP_ITEM_LIMIT) + 1
        }`,
        method: "GET",
      }),
      keepUnusedDataFor: 3600,
    }),
  }),
});

export default recipesApi;
export const {
  useGetPopularQuery,
  useGetVeganQuery,
  useGetSearchedQuery,
  useGetCuisineQuery,
  useGetInfoQuery,
  useGetSimilarQuery,
} = recipesApi;
