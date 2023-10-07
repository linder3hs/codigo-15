import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Detail } from "../pages";
import { Layout } from "../components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:titleId" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
