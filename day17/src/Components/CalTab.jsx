import React from "react"

const BarTab = (props)=>{
    return(
        <div className="barTab" style = {{backgroundColor:"Green"}}>
            <h1>{props.h1}</h1>
            <h3>{props.h3}</h3>
        </div>
    );
};

export default BarTab