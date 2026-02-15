import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Entry from "./pages/Entry/Entry";
import Works from "./pages/Works/Works";
import "./App.css"
import WorksContextProvider, { WorksContext } from "./contexts/WorksContext";

export default function App() {
  return (
    <Router>
      <WorksContextProvider>
        <div className="app-container">
          <Nav />
          <Routes>
            <Route 
              path="/" 
              element={
                <RedirectToMostRecent />
              } 
            />
            <Route path="/works" element={<Works />} />
            <Route path="/entry/:id" element={<Entry />} />
          </Routes>
        </div>
      </WorksContextProvider>
    </Router>
  );
}

function RedirectToMostRecent() {
  const { getWorks } = useContext(WorksContext);
  const allWorks = getWorks();
  const mostRecent = allWorks.at(-1);
  
  if (mostRecent) {
    return <Navigate to={`/entry/${mostRecent.id}`} replace />;
  }
  return <Navigate to="/works" replace />;
}