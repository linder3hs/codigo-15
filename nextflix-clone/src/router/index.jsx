import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>Login desde el router</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
