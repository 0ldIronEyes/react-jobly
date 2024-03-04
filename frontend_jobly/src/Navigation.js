import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";


//navigation bar that appears on every page.
function Navigation({ logout }) {
    const UserContext = React.createContext();
    const { loggedInUser } = useContext(UserContext);
    
    if (loggedInUser)
    {
        return( 
            <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/companies">
              Companies
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/jobs">
              Jobs
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/profile">
              {loggedInUser.username}'s Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logout}>
              Log out 
            </Link>
          </li>
        </ul>
        )
    }
    else
    {
        return (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
            </ul>
        );
    }

}

export default Navigation;