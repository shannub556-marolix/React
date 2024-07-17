import React, { useState} from "react";

const Hello = () => {
    const [game, setGame] = useState(true);

    const Day=()=>{
        return(<div>
            <h1> it's Monday </h1>
        </div>)
    };
    
    return (
        <div>{game && "I'm good"}
        <div>{game && <Day/>}</div>
        </div>
    );
};

export default Hello;
