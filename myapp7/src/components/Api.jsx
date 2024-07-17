import { useEffect } from "react";
import { useState } from "react";
import React from "react";
const url = 'https://jsonplaceholder.typicode.com/posts'

function  First() {
    const [userdetails,setuserdetails]=useState([])
    
    const getdetails = async ()=>{
        const response = await fetch(url)
        const data = await response.json()
        setuserdetails(data)
    }
    useEffect(()=>{
        console.log(getdetails())  
    },[])
    console.log(userdetails)

    return ( <div>
        {
            userdetails.map((use)=>{
                return(
                    <div style={{color:"blue"}}>
                        {use.title}<br/>
                        {use.body}
                        <p style={{color:"green"}}>=================================================</p>
                    </div>

                )

            })
        }

    </div> );
}

export default First ;