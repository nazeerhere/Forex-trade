import React from 'react';
import Nav from "./Nav.jsx"
import { Route } from "react-router-dom"
import Resources from "./Resources.jsx"

export default function Header() {
    return (
        <div className="header" >

            <div className="header-Nav" >
                <Nav/>
            </div>

            <Route path="/" />
            <Route path="/Resources" component={Resources}/>

        </div>
    );
}
