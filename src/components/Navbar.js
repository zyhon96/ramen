import React from 'react'
import { ReactComponent as RamenLogo } from '../svgs/Group.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <RamenLogo />
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Order</li>
                    <li>Story</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="login">
<button> LOG IN</button>
            </div>
        </div>
    )
}

export default Navbar
