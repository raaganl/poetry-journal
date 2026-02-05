import React, { useRef, useState, useEffect } from 'react';
import './JournalEntryForm.css'
import Button from '../Button/Button';
import Editor from '../Editor/Editor';
import createEntry from '../../store/entriesStore'

export default function JournalEntryForm() {
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

  const[isNewForm, setisNewForm] = useState(true);
  
  const readEntry = (event) => {
    event.preventDefault();
    if(isNewForm){ 
      const entry = createEntry({body,date});
      console.log(entry.id);
      console.log(entry.body);
      console.log(entry.date);
      setisNewForm(false)}
    else{
      console.log("this form exists!");
    }
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