import React, { useRef, useState, useEffect } from 'react';

let id = 0;
const createEntry = ({body, date})=>{
  const newEntry = {
    body:body,
    id:id,
    date: date,
  };
  id = id + 1;
  return newEntry;
};

export default createEntry;