import React, { useState } from "react";

function Cityname() {
    const [list, setList] = useState([]);
    const [inpdata, setInpdata] = useState("");

    const handleInputChange = (e) => {
        setInpdata(e.target.value);
    }

    const handleSubmit = () => {
        if (inpdata.trim() !== "") {
            setList([...list, { task: inpdata }]);
            setInpdata(""); // Clear input after submitting
        }
    }

    const handleDelete = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <div>
            <input value={inpdata} onChange={handleInputChange} type="text" placeholder="Enter Task" />
            <button onClick={handleSubmit}>Submit</button>
            <div style={{ display: "flex", gap: "15px" }}>
                <h1>SL.no</h1>
                <h1>Task</h1>
                <h1>Action</h1>
            </div>
            {list.map((item, index) => (
                <div key={index}>
                    <h1>{index + 1}</h1>
                    <h1>{item.task}</h1>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Cityname;
