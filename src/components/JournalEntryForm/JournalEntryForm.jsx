import React, { useState } from 'react';
import './JournalEntryForm.css'
import Button from '../Button/Button';

export default function JournalEntryForm() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const currentDate = new Date().toLocaleDateString();

  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <div class = "journal-entry-container">
      <h2>{currentDate}</h2>
      <h1 class = "news-heading">Question</h1>
      <form>
        <textarea class = "entry-text-area"
          id="myTextArea"
          value={textAreaValue}
          onChange={handleChange}
          rows="5" // Optional: Set the initial number of visible rows
          cols="30" // Optional: Set the initial number of visible columns
          placeholder="Type here..." // Optional: Placeholder text
        />
        <div class = "button-container-entry">
          <Button buttonText={"Save"} type = {"primary-button"}/>
          <Button buttonText={"Submit"} type = {"secondary-button"}/>
        </div>
      </form>
    </div>
  );
}