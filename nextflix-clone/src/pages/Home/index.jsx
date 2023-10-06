import { useState } from "react";
import { Layout } from "../../components";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const [titles, setTitles] = useState([]);

  return (
    <div className="bg-black/90 text-netflix-color-dark py-3 px-5 md:px-20 overflow-hidden">
      <Layout
        searchText={searchText}
        setSearchText={setSearchText}
        setTitles={setTitles}
      >
        <h1 className="text-xl my-5">Busqueda: {searchText}</h1>
        <div className="grid grid-cols-2 gap-x-2 gap-y-3 md:gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {titles.length > 0 &&
            titles.map((title) => (
              <div key={title.jawSummary.id}>
                <img
                  className="rounded hover:scale-125 md:hover:scale-150 transition duration-500 cursor-pointer object-cover"
                  src={title.jawSummary.backgroundImage.url}
                />
              </div>
            ))}
        </div>
      </Layout>
    </div>
  );
}
