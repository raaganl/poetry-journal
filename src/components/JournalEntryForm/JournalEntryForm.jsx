import React, { useRef, useState } from 'react';
import './JournalEntryForm.css'
import Button from '../Button/Button';
import Editor from '../Editor/Editor';

export default function JournalEntryForm() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  const handleTextChange = (event) => {
    setTextAreaValue(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };
  const handleClick = () => {
    console.log("clicked!");
  }
  const date = new Date();

  const day = date.getDate();    
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();

  const formattedDate = `${day} . ${month} . ${year}`;

   const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const quillRef = useRef();

  return (
    <div>
      <form>
        <div className = "poem-entry-container">
          <div className = "editor-container">
            <Editor
            ref={quillRef}
            onSelectionChange={setRange}
            onTextChange={setLastChange}
            />
          </div>
          <div className = "button-container-entry">
            <Button buttonText={"Save"} type = {"submit"} className = {"primary-button"} handleClick = {handleClick} isActive = {true}/>
          </div>
        </div>
      </form>
    </div>
  );
}