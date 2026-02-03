import "./SearchBar.css"
import { SearchLine, Filter2Fill} from "@mingcute/react";
export default function SearchBar(){
    return(
        <div className = "search-container">
            <div className = "search-input-container">
                <SearchLine/>
                <input type="text" className = "search-input" placeholder = "Search for poem"></input>
             </div>
            <hr className = "search-hr"></hr>
        </div>
    );
}