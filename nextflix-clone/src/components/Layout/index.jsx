/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../../assets/netflix-logo.png";
import { searchInNetflix } from "../../services";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitles } from "../../slices/netflixSlice";

export default function Layout() {
  const [searchText, setSearchText] = useState("");

  // debemos crear una variable donde se almacene useDispatch
  const dispatch = useDispatch();

  const handleKeyUp = async (e) => {
    if (e.key === "Enter" && searchText) {
      const results = await searchInNetflix(searchText);
      // para que la funcion seTitle funciones tiene que estar envuelta en el dispatch
      dispatch(setTitles(results.titles));
    }
  };

  return (
    <div className="text-netflix-color-dark py-3 px-5 md:px-20 overflow-hidden">
      <div className="flex justify-between items-center">
        <img className="w-28 md:w-44 -ml-2 md:-ml-4" src={logo} alt="" />
        <input
          type="text"
          placeholder="Buscar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleKeyUp}
          className="py-1 px-2 outline-none bg-black/30 border"
        />
      </div>
      <Outlet />
    </div>
  );
}
