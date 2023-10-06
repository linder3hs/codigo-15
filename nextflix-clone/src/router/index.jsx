import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Layout } from "../components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detalle" element={<h1>Login desde el router</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
