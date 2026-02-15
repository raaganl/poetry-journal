import "./Nav.css";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Book2Line, Book2Fill, User1Fill, User1Line } from "@mingcute/react";
import Button from "../Button/Button";
import WorkTab from "../WorkTab/WorkTab";
import { WorksContext } from '../../contexts/WorksContext';
import React, { useRef, useState, useEffect, useContext } from 'react';
import createEntry from '../../store/entriesStore'


export default function Nav() {
  const { addWorks, getWorks, getRecentWorks } = useContext(WorksContext);
  const navigate = useNavigate();
  const allWorks = getWorks();

 const getFirstLine = (body) => {
    try {
        const delta = typeof body === 'string' ? JSON.parse(body) : body;
        
        if (delta.ops && delta.ops.length > 0) {
            const text = delta.ops[0].insert;
            const firstLine = text.split('\n')[0];
            return firstLine || 'Empty entry';
        }
        return 'Empty entry';
    } catch (error) {
        return 'Empty entry';
    }
  };
  const createNewWork = () => {
    const dateObj = new Date();

    const day = dateObj.getDate();    
    const month = dateObj.getMonth() + 1; 
    const year = dateObj.getFullYear();

    const formattedDate = `${month} . ${day} . ${year}`;
    let body = '';
    const entry = createEntry({body,formattedDate});
    addWorks(entry);
    console.log(entry);
    navigate(`/Entry/${entry.id}`, { 
      state: { entry }
    });
  }

  return (
    <nav className="nav-bar">
      <div className = "actions-container">
        <form>
          <Button buttonText={"New Work"} isActive={true} type={"button"} className={"secondary-button"} onClick={createNewWork} />
        </form>
        <NavLink to="/Works" className="nav-link">
          {({ isActive }) =>
            isActive ? <div className = "link-container"><Book2Fill className = "link-icon-active" /> <p className = "link-text-active">Works</p></div> : <div className = "link-container"><Book2Line className = "link-icon" /> <p className = "link-text">Works</p></div>
          }
        </NavLink>
        <div className = "recents-container">
        <p className = "placeholder-text">Recents</p>
        {allWorks.slice(-10).reverse().map(work => (
          <WorkTab workId={work.id} workBody={getFirstLine(work.body)} key = {work.id}/>
        ))}
      </div>
      </div>
      <div className = "profile-icon-container">
        <User1Line/>
      </div>
    </nav>
  );
}
