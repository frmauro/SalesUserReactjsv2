import React from 'react';
import { Link } from "react-router-dom";

function Header() {
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <Link to="/">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/user/Users">Users</Link></li>
                        <li><Link to="/user/Create">Create User</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
}


export default Header;