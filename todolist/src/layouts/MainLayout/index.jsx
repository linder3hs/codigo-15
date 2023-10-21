import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MainLayout() {
  const user = useSelector((state) => state.user.data);

  if (!user) return <Navigate to="/signup" />;

  return (
    <>
      <Outlet />
    </>
  );
}
