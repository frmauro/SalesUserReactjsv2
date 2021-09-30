import React from 'react';
import { Link } from "react-router-dom";

function Header() {
        return(
            <div>
                <nav>
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/user/Create">Create User</Link></li>
                        <li><Link to="/user/Edit">Edit User</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
}


export default Header;