import React, { useRef, useState, useEffect } from 'react';

function createEntry({ body, formattedDate }) {
  return {
    id: Date.now(),
    body,
    formattedDate,
  };
}
export default createEntry;