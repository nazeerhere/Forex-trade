import React from 'react';
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div className="nav" >
            <Link to="/" >
                <h2>Nav Bar</h2>
            </Link>
            
            <div className="links" >

            <Link to="/Currency-Pair">
                Currency Pair
            </Link>

            <Link to="/Resources">
                Resources
            </Link>
            </div>

        </div>
    );
}
