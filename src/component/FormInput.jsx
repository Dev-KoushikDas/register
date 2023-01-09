import { useState } from "react";
import "./FormInput.css"
const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label,errorMessage,onChange, id,...inputProps } = props;
    
    const handleFocus = (e) => {
    setFocused(true);
    };

    return (
        
        <div className="formInput">
            {/* <label> Username</label> */}
            <div className="mid">
            <label>{label}</label>
            {/* <input placeholder={props.placeholder} onChange={e=>props.setUsername(e.target.value)}/> */}
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            
            <span>{errorMessage}</span>
            </div>
        </div>
    );
};

export default FormInput;