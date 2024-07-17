import { useState,useEffect } from "react";

const Terinary = () => {
    const a = 10
    let b =(a===11)
    let x=b? "THis is Ture":"This is False"
    return ( 
        <div>Terinary is {x}</div>
     );
}
 

const StateHook = () => {
    const[city,setCity] = useState("Madanapalle");
    useEffect(()=>{
        console.log(city);
        console.log('Updating state to Tirupati, check now');
        setCity('Tirupathi');
        console.log(city);  
        console.log('Updating state to Guntur, check now');
        setCity('Guntur');
        console.log(city);          
    },[city])
    // console.log(city);
    // console.log('Updating state to Tirupati, check now');
    // setCity('Tirupathi');
    // console.log(city)
    return ( 
        <div>
           <h1>Check console for output</h1> 
           <h2>This is Terinary operator </h2>

           <Terinary/>
        </div>
     );
}
 
export default StateHook;