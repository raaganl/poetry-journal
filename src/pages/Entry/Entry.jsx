import { useLocation } from 'react-router-dom'; 
import { useContext } from "react";
import { useParams } from "react-router-dom"; 
import { WorksContext } from "../../contexts/WorksContext";
import JournalEntryForm from "../../components/JournalEntryForm/JournalEntryForm";
import "../page.css"

export default function Entry() {
  const { getWorksById } = useContext(WorksContext);
  const { id } = useParams();
  const location = useLocation(); 
  
  const work = location.state?.entry || getWorksById(Number(id));
  
  return(
    <div className = "page-content-container">
      <JournalEntryForm journalObject={work} />
    </div>
  );
}