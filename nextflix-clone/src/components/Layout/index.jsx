/* eslint-disable react/prop-types */
import logo from "../../assets/netflix-logo.png";

export default function Layout({ children, searchText, setSearchText }) {
  return (
    <>
      <div className="flex justify-between items-center ">
        <img className="w-28 md:w-44" src={logo} alt="" />
        <input
          type="text"
          placeholder="Buscar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="py-1 px-2 outline-none bg-black/30 border"
        />
      </div>
      {children}
    </>
  );
}
