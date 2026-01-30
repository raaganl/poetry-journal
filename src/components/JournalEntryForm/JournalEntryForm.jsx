import React, { useState } from 'react';
import './JournalEntryForm.css'
import Button from '../Button/Button';

export default function JournalEntryForm() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const currentDate = new Date().toLocaleDateString();

  const handleTextChange = (event) => {
    setTextAreaValue(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  return (
    <div className = "poem-entry-container">
      <h2>{currentDate}</h2>
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
          rows="5" // Optional: Set the initial number of visible rows
          cols="30" // Optional: Set the initial number of visible columns
        />
        <div className = "button-container-entry">
          <Button buttonText={"Save"} type = {"primary-button"}/>
          <Button buttonText={"Submit"} type = {"secondary-button"}/>
        </div>
      </form>
    </div>
  );
}