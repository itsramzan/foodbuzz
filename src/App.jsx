import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Searched from "./pages/Searched";
import Cuisine from "./pages/Cuisine";
import Details from "./pages/Details";
import Favourite from "./pages/Favourite";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/cuisine/:name" element={<Cuisine />} />
          <Route path="/recipes/:id" element={<Details />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
