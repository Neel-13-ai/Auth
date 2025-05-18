import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/authStore";
import { HiUsers } from "react-icons/hi";
import { RiContactsBook2Fill } from "react-icons/ri";

export const Navbar = () => {
  const { user, issLoggedIn, isLoading } = useAuth();

  return (
    <>
      <header>
        <div className="container">
          <div className=" logo">
            <NavLink to="/">WebDev</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>

              {issLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}

               {user.isAdmin && !isLoading ? (
                <li>
                  <NavLink to="/admin/users">
                    <HiUsers />
                    users
                  </NavLink>
                </li>
              ): "Loading"}

              {user.isAdmin && (
                <li>
                  <NavLink to="/admin/contacts">
                    <RiContactsBook2Fill />
                    contacts
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
