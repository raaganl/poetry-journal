import './Nav.css'
import { NavLink } from "react-router-dom";

export default function Nav(){
    return(<nav class = "nav-bar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Daily Report
      </NavLink>
      <NavLink
        to="/entries"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Entries
      </NavLink>
    </nav>);
}