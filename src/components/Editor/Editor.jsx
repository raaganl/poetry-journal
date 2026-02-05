import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import "./Editor.css"
import Quill from 'quill';
import "quill/dist/quill.snow.css";

// Editor is an uncontrolled React component
const Editor = forwardRef(
  ({onTextChange, onSelectionChange}, ref) => {
    const containerRef = useRef(null);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div'),
      );
      const quill = new Quill(editorContainer, {
        modules: {
            toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ],
        },
        placeholder: 'Begin...',
        theme: 'snow', // or 'bubble'
        });

      ref.current = quill;

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        ref.current = null;
        container.innerHTML = '';
      };
    }, [ref]);

    return <div ref={containerRef} className = "editor-container"></div>;
  },
);

Editor.displayName = 'Editor';

export default Editor;