import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import "./NavBar.css";

const NavBar = (props) => {

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .delete("/logout", { withCredentials: true })
      .then((response) => {
        console.log("logout response", response);
        props.setLoggedIn(response.data.loggedIn);
        
      })
      .catch((error) => {
        console.log("logout error", error);
      }
    );
  }

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/projects/">Projects</Link>
        </li>

        <li>
          <Link to="/create">Create</Link>
        </li>

        <li>
          <Link to="/login" onClick={handleLogout}>Logout</Link>
        </li>
        
      </ul>

      <Outlet />
    </>
  );
};

export default NavBar;
