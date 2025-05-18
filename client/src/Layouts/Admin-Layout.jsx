import { NavLink, Navigate, Outlet } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { useAuth } from "../store/authStore";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log(user);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (!user.isAdmin) {
    console.log("user navigation to home page");
    return <Navigate to="/" />;
  } else {
    <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
