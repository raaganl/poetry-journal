import "./PoemCard.css"
export default function PoemCard({date, title, body}){
    return(
        <div className = "poem-card-container">
            <h1 className = "poem-title">{title}</h1>
            <p className = "poem-body">{body}</p>
            <p className = "poem-date">{date}</p>
        </div>
    );
}