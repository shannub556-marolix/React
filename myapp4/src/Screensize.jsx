import React, { useState, useEffect } from "react";

const Screensize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const updateScreenSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

//   useEffect(() => {
//     window.addEventListener('resize', updateScreenSize);
//   }, []); 

  
  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
  }, []); 

  return <div style={{ textAlign : "center"}}>
    <h1>Hello this is Event Listeners with use effect exmaple</h1>
    <h4>Screen size of this window is </h4>
    <p>width : {windowSize.width}</p>
    <p>width : {windowSize.height}</p>

  </div>;
};

export default Screensize;
