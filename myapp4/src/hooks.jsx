import { useState } from 'react';





const Events = () => {

    const [count, setcount]=useState(0)
    const Increment=()=>{
    setcount(count+1)
    }

    const decrement=()=>{
    if (count>1){
        setcount(count-1)
        }
    }

    const Reset=()=>{
    setcount(0)
    }
    return ( 
    <div className="App">
    <h1>Hello this is Events page, click on buttons to perform operations</h1>
    <h2>{count}</h2>
    <button onClick={Increment}>Increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={Reset}>Reset</button>

    </div>
     );
}
 
export default Events;