import "./WorkTab.css"
export default function WorkTab({workData}){
    return(
        <div className = "work-tab-container">
            <p>{workData}</p>
        </div>
    );
}