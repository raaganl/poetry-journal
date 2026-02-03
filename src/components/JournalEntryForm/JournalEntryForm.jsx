import React, { useState } from 'react';
import './JournalEntryForm.css'
import Button from '../Button/Button';

export default function JournalEntryForm() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  const handleTextChange = (event) => {
    setTextAreaValue(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };
  const date = new Date();

  const day = date.getDate();    
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();

  const formattedDate = `${day} . ${month} . ${year}`;

  return (
    <div className = "poem-entry-container">
      <form>
        <input 
          id = "title"
          className="entry-title" 
          type="text" 
          value={titleValue} 
          onChange={handleTitleChange} 
          placeholder="Title" 
        />
        <textarea className = "entry-text-area"
          id="myTextArea"
          value={textAreaValue}
          onChange={handleTextChange}
          placeholder="Begin writing ~" 
        />
        <div className = "button-container-entry">
          <Button buttonText={"Save"} type = {"submit"} className = {"primary-button"}/>
        </div>
      </form>
    </div>
  );
}