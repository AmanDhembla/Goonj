import React from 'react';
import { Link,NavLink} from 'react-router-dom';

const VolLinkTab=()=>{
    return(
      <div>
        <h1>LinkTab</h1>
        <NavLink to="/profile" activeClassName="is-active"> Events </NavLink>
        <NavLink to="/vol_donations" activeClassName="is-active"> Donations </NavLink>

      </div>
    );
};
export default VolLinkTab;
