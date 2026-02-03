import "./Button.css"

export default function Button({buttonText, type, className}){

    const handleClick = () =>{
        console.log("clicked!")
    }
    return(
        <button onClick={handleClick} type={type} className = {className}>{buttonText}</button>
    );

}