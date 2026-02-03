import PoemCard from "../../components/PoemCard/PoemCard"
import "./Works.css"
export default function Works() {
  return (
  <div className = "page-content-container"> 
    <div className = "poem-container">
      <PoemCard date = {"11-24-2025"} title = {"Through The Valley"} body = {"I walk through the valley"}/>
      <PoemCard date = {"11-24-2025"} title = {"Through The Valley"} body = {"I walk through the valley"}/>
    </div>
  </div>);
}