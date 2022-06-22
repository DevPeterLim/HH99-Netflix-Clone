import React, { useRef } from "react";

const PwChange = ()=>{
    const textRef = useRef(null)


    return (
        <>
        <h1 style={{color:"white"}}>PwChange 페이지</h1>
        <input type={"text"} ref={textRef}></input>
        <button>Submit</button>
        </>
    )
}

export default PwChange;