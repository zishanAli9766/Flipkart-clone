import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRout = ({path , ...rest}) =>{

    return (
        <div>
            {localStorage.getItem("email","password")?(
                <Route {...rest} path={path}/>
            ): (
                <Redirect to={"/Login"} />
            )}
        </div>
    )
}
export default ProtectedRout;