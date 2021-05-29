import React, {useState} from "react";
import Login from "./Login";
import "./Form.css"
import FormSuccess from "./FormSuccess";


const Form =()=>{
    const[isSubmited,setISSubmited]=useState(false)

    function submitForm(){
        setISSubmited(true)
    }
    return (
        <>
<div className={"form-container"}>
    <span className={"close-btn"}>x</span>
    <div className='form-content-left'>
            <img className='form-img' src='https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-2.svg' alt='spaceship' />
    </div>
        {!isSubmited ?
            (<Login submitForm={submitForm}/> )
            : (<FormSuccess/>)}
    </div>
</>
    )
}
export  default Form;