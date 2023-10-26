import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorUser } from "../../selectors/userSelector";

export default function MainLayout() {
  const user = useSelector(selectorUser);

  if (!user) return <Navigate to="/signup" />;

  return (
    <>
      <nav className="bg-blue-400 flex justify-end items-center gap-5 pe-5 py-3">
        <img src={user.avatar} alt="" width={40} className="rounded-full" />
        <div className="text-sm text-white">
          <p>
            {user.name} {user.lastname}
          </p>
          <p>{user.email}</p>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
