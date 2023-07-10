import React from 'react';
import { Outlet } from "react-router-dom";
const BaseLayout =({children}) =>{
    return(
        <>
        <div>
           <h1> dss</h1>
        </div>
        <Outlet />
        </>
    )
}

export default BaseLayout;