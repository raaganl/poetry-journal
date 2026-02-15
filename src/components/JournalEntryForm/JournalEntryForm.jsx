import React, { useRef, useState, useEffect, useContext } from 'react';
import './JournalEntryForm.css'
import Button from '../Button/Button';
import Editor from '../Editor/Editor';
import createEntry from '../../store/entriesStore'
import { WorksContext } from '../../contexts/WorksContext';

export default function JournalEntryForm() {
  const { addWorks } = useContext(WorksContext);
  const dateObj = new Date();

  const day = dateObj.getDate();    
  const month = dateObj.getMonth() + 1; 
  const year = dateObj.getFullYear();

  const formattedDate = `${month} . ${day} . ${year}`;

  const [range, setRange] = useState('');
  const [lastChange, setLastChange] = useState('');

  const quillRef = useRef();

  const [body, setBody] = useState('');
  const [date, setDate] = useState(formattedDate);
  
  const readEntry = (event) => {
    event.preventDefault();
    const entry = createEntry({body,date});
    addWorks(entry);
  }

  useEffect(()=>{
    const delta = quillRef.current.getContents();
    const serialized = JSON.stringify(delta, null, 2);
    setBody(serialized);
  }, [lastChange]);

  return (
    <div>
      <form onSubmit = {readEntry}>
        <div className = "poem-entry-container">
          <div className = "editor-container">
            <Editor
            ref={quillRef}
            onSelectionChange={setRange}
            onTextChange={setLastChange}
            />
          </div>
          <input type="hidden" name = "entryContent" value = {body}></input>
          <input type="hidden" name = "entryDate" value = {formattedDate} ></input>
          <div className = "button-container-entry">
            <Button buttonText={"Save"} type = {"submit"} className = {"primary-button"} isActive = {true}/>
          </div>
        </div>
      </form>
    </div>
  );
}