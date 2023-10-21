import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "../pages";
import { AuthLayout, MainLayout } from "../layouts";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
