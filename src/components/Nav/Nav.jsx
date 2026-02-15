import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Book2Line, Book2Fill, QuillPenLine, QuillPenFill, Bulb2Fill, Bulb2Line } from "@mingcute/react";
import Button from "../Button/Button";
import WorkTab from "../WorkTab/WorkTab";
import { WorksContext } from '../../contexts/WorksContext';
import React, { useRef, useState, useEffect, useContext } from 'react';
import createEntry from '../../store/entriesStore'

export default function Nav() {
  const { addWorks } = useContext(WorksContext);
  const createNewWork = () => {
    console.log("HIIOIII");
    const dateObj = new Date();

    const day = dateObj.getDate();    
    const month = dateObj.getMonth() + 1; 
    const year = dateObj.getFullYear();

    const formattedDate = `${month} . ${day} . ${year}`;
    let body = '';
    const entry = createEntry({body,formattedDate});
    addWorks(entry);
  }
  return (
    <nav className="nav-bar">
      <div className = "actions-container">
        <Button buttonText={"New Work"} isActive={true} type={"button"} className={"secondary-button"} onClick={createNewWork} />
        <NavLink to="/" className="nav-link">
          {({ isActive }) =>
            isActive ? <div className = "link-container"><QuillPenFill className = "link-icon-active"/> <p className = "link-text-active">Write</p></div> : <div className = "link-container"><QuillPenLine className = "link-icon"/> <p className = "link-text">Write</p></div>
          }
        </NavLink>
        <NavLink to="/Works" className="nav-link">
          {({ isActive }) =>
            isActive ? <div className = "link-container"><Book2Fill className = "link-icon-active" /> <p className = "link-text-active">Works</p></div> : <div className = "link-container"><Book2Line className = "link-icon" /> <p className = "link-text">Works</p></div>
          }
        </NavLink>
      </div>
      <div className = "recents-container">
        <p className = "placeholder-text">Recents</p>
        <WorkTab workData = "test" />
      </div>
    </nav>
  );
}
