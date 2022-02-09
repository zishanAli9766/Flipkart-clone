import React from "react";
import { Redirect, Route } from "react-router-dom";

const CommonRout = ({...rest})=>{

    return (
        <>

            {localStorage.getItem("email","password")? (
                <Redirect to={"/"} />
            ): (
                <Route {...rest}/>
            )}
        
        </>
    ) 
}

export default CommonRout;