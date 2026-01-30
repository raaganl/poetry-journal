import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Book2Line, Book2Fill, QuillPenLine, QuillPenFill } from "@mingcute/react";

export default function Nav() {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-link">
        {({ isActive }) =>
          isActive ? <div className = "link-container"><QuillPenFill className = "link-icon-active"/> <p className = "link-text-active">Write</p></div> : <div className = "link-container"><QuillPenLine className = "link-icon"/> <p className = "link-text">Write</p></div>
        }
      </NavLink>
      <NavLink to="/Entries" className="nav-link">
        {({ isActive }) =>
          isActive ? <div className = "link-container"><Book2Fill className = "link-icon-active" /> <p className = "link-text-active">Works</p></div> : <div className = "link-container"><Book2Line className = "link-icon" /> <p className = "link-text">Works</p></div>
        }
      </NavLink>
    </nav>
  );
}
