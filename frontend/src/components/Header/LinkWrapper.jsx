import React from 'react';

import { NavLink } from 'react-router-dom';





const LinkWrapper = props =>{
    return (
        <NavLink {...props}
            style = {{textDecoration: "none", 
            color: "white"}}
        />
    );
}
export default LinkWrapper;