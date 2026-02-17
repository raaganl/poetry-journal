import PoemCard from "../../components/PoemCard/PoemCard"
import "./Works.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import SearchBar from "../../components/SearchBar/SearchBar"
import WorkTab from "../../components/WorkTab/WorkTab";
import { WorksContext } from '../../contexts/WorksContext';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState, useEffect, useContext } from 'react';

export default function Works() {
  const {getWorks} = useContext(WorksContext);
  const navigate = useNavigate();
  const allWorks = getWorks();
  
  return (
  <div className = "page-content-container"> 
    <SearchBar />
    <ResponsiveMasonry
    columnsCountBreakPoints={{ 0: 1, 800: 2 }}
    gutterBreakPoints={{ 0: "1rem" }}
    >
      <Masonry gutter>
         {allWorks.reverse().map(work => {
          return <PoemCard workId={work.id} workBody={work.body} workDate = {work.date}/>;
        })}
      </Masonry>
    </ResponsiveMasonry>
  </div>);
}