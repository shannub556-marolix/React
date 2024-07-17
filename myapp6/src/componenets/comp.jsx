import { userdetails } from "./data";



function First() {
    let course_details = 'react_course'
    return ( 
        <div>
            <h1>Hello This is Nested Objects </h1>
            {`Welcome to ${course_details}`}
            {userdetails.map((details)=>{
                return(
                    <div>
            <div>{details.username}</div>
            <div>{details.email}</div>
            <div>{details.address.street}</div>


        </div>
                )
            })}
        </div>
     );
        
}

export default First;