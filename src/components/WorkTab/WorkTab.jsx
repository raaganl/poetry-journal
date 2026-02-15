import "./WorkTab.css"
import { useNavigate } from 'react-router-dom';
import { WorksContext } from '../../contexts/WorksContext';
import React, { useRef, useState, useEffect, useContext } from 'react';
import { More1Fill, More1Line } from "@mingcute/react";

export default function WorkTab({workId, workBody}){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/Entry/${workId}`, { 
            state: { workId, workBody } 
        });
    };
    
    return(
        <div className="work-tab-container" onClick={handleClick}>
            <div className = "work-preview-container">
                <p>{workBody}</p>
            </div>
            <div className = "delete-entry-button"> <More1Fill/></div>
        </div>
    );
}