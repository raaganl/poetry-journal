import "./PoemCard.css"
import React, { useRef, useState, useEffect, useContext } from 'react';
import { RenderDelta } from 'quill-delta-to-react';

export default function PoemCard({workDate, workId, workBody}){
    const quillRef = useRef();
    return(
        <div className = "poem-card-container">
            <RenderDelta ops={JSON.parse(workBody).ops} />
            <p className = "poem-date">{workDate}</p>
        </div>
    );
}