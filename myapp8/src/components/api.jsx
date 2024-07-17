import React, { useState } from "react";
import '../App.css';


const FirstAPi=()=>{
    const [name, setname]=useState("")
    const [mail, setmail]=useState("")
    const [mobile, setmobile]=useState("")

    const data={name,mail,mobile}


    const apihandler=async(e)=>{
        e.preventDefault()

        try{
            const response = await fetch("https://first-api-2cf7c-default-rtdb.firebaseio.com/Employee.json",{
            method:"POST",
            headers:{
                "content-Type" : "Application/json"
            },
            body: JSON.stringify(data)
        })
        alert('Data saved Succesfully')
        
        }catch(error){
            console.log(error)
            alert('Failed to save data')
    
        }



        }

    


    return(<div className="App-header">
        <div className="App-header" >
        <form onSubmit={apihandler}>
            <label>Employee Name  </label>
            <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="Employee Name" /><br/>
            <label>Employee Mail  </label>
            <input type="text" onChange={(e)=>{setmail(e.target.value)}} placeholder="Employee Mail" /><br/>
            <label>Employee Mobile  </label>
            <input type="text" onChange={(e)=>{setmobile(e.target.value)}} placeholder="Employee Mobile" /><br/>
            <button type="Submit" >Submit</button>
        </form>
        </div>
    </div>)

}
export default FirstAPi;

