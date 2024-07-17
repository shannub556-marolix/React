import React from "react";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Eventform() {
    const [content, setcontent] = useState("");
    const [contentform, setcontentform] = useState("");
  


    const changedata = (e) => {
        setcontent(e.target.value);
        toast("Wow so easy!");
    }

    const changedataform = (e) => {
        e.preventDefault();
        setcontentform(e.target.elements.inputForm.value)  
        toast("Wow form2 so easy!");
    }

    return (
        <div>
            <div className="inputdata">  
                <h2 style={{color:"white"}}>Hello, {content}</h2>
                <ToastContainer/>
                <input className='input' type="text" onChange={changedata}></input>
            </div>
    
            <section>
                <h1> This is Another Section for Forms</h1>
            </section>
    
            <div className="inputdata">
                <form onSubmit={changedataform}>
                    <h2 style={{color:"white"}}>Hello, {contentform}</h2>
                    <input className='input' type="text" name="inputForm"></input>
                    <button type="submit">submit</button>
                </form>  
            </div>
        </div>
    );
}

export default Eventform;
