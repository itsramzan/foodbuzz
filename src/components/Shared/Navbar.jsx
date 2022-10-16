import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { IoHeartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { recipes } = useSelector((state) => state.favourite);

  return (
    <div className="col-span-12 h-16 flex justify-between items-center px-4 md:px-32 backdrop-blur-lg sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="" className="h-12 w-12" />{" "}
        <p className="text-lg font-bold">
          Food<span className="text-blue-700">Buzz</span>
        </p>
      </Link>

      <Link
        to="/favourite"
        className="text-sm font-semibold flex items-center gap-1"
      >
        <IoHeartOutline className="text-lg" />
        Favourite ({recipes.length})
      </Link>
    </div>
  );
};

export default Navbar;
