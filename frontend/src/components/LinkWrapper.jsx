import React from 'react';

import { NavLink } from 'react-router-dom';

const LinkWrapper = props =>{
    return (
        <NavLink {...props}/>
    );
}
export default LinkWrapper;