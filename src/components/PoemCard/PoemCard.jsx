import "./PoemCard.css"
export default function PoemCard({workDate, workId, workBody}){
    return(
        <div className = "poem-card-container">
            <p className="poem-body">{JSON.stringify(workBody, null, 2)}</p>
            <p className = "poem-date">{workDate}</p>
        </div>
    );
}