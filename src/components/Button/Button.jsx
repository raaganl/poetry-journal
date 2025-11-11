import "./Button.css"

export default function Button({buttonText, type}){

    const handleClick = () =>{
        
    }
    return(
        <button onClick={handleClick} type="Button" class = {type}>{buttonText}</button>
    );

}