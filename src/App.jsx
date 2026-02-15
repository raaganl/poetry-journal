import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import "./App.css"
import WorksContextProvider from "./contexts/WorksContext";


export default function App() {
  return (
    <Router>
      <WorksContextProvider>
        <div className="app-container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </div>
      </WorksContextProvider>
    </Router>
  );
}
