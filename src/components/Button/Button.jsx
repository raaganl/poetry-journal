import "./Button.css"

export default function Button({buttonText, type, className, onClick, isActive}){
    return(
       isActive ? <button onClick={onClick} type={type} className ={className}>{buttonText}</button> 
       : <button onClick={onClick} type={type} className ={"disabled-button"} disabled>{buttonText}</button>
    );

}