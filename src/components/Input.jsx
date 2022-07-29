import { useEffect, useState, useRef} from "react";

export default function Input({label, type="text", ...props}){

    const inputRef = useRef();
    const [show, setShow] = useState(false);
    const [inputType, setType] = useState(type);

    useEffect(() => {
        if(show){
            setType('text');
            inputRef.current.focus();
        }else if(type==='password'){
            setType('password');
        }
    }, [show]);

    return (
        <label htmlFor="" className="input-container">
            <input ref={inputRef} required={true} type={inputType} className="login-input valid:pt-[10px] peer" {...props}/>
            <small className="login-input-description peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            {type === 'password' && props?.value  && (
                <button type="button" onClick={() => setShow(show => !show)} className="bg-white text-sm pr-2 font-semibold  top-0 right-0 h-full flex items-center">
                    {show ? "Hide" : "Show"}
                </button>
            )}
        </label>
    );  
}