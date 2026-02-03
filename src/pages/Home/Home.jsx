import JournalEntryForm from "../../components/JournalEntryForm/JournalEntryForm";
import "../page.css"
export default function Home() {
  return(
    <div className = "page-content-container">
      <JournalEntryForm />
    </div>
  );
}