import React from "react";
import Search from "../components/Shared/Search";
import Filter from "../components/Shared/Filter";
import Popular from "../components/Home/Popular";
import Vegan from "../components/Home/Vegan";

const Home = () => {
  return (
    <div className="space-y-4">
      <Search />
      <Filter />
      <Popular />
      <Vegan />
    </div>
  );
};

export default Home;
