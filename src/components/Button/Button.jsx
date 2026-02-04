import "./Button.css"

export default function Button({buttonText, type, className, handleClick, isActive}){
    return(
       isActive ? <button onClick={handleClick} type={type} className ={className}>{buttonText}</button> : <button onClick={handleClick} type={type} className ={"disabled-button"} disabled>{buttonText}</button>
    );

}