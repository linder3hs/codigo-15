/* eslint-disable react/prop-types */
import logo from "../../assets/netflix-logo.png";
import { searchInNetflix } from "../../services";

export default function Layout({ children, searchText, setSearchText }) {
  const handleKeyUp = async (e) => {
    if (e.key === "Enter" && searchText) {
      const results = await searchInNetflix(searchText);
      console.log(results);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center ">
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
      {children}
    </>
  );
}
