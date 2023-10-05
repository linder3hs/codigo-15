import { useState } from "react";
import { Layout } from "./components";

export default function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-black/90 text-netflix-color-dark py-3 px-5">
      <Layout searchText={searchText} setSearchText={setSearchText}>
        <h1>Clone de Netflix {searchText}</h1>
      </Layout>
    </div>
  );
}
