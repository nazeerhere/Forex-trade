import React from 'react';
import Nav from "./Nav.jsx"
import { Route } from "react-router-dom"
import Resources from "./Resources.jsx"
import CurrencyPairs from "./CurrencyPairs"
import SomeText from "../SomeText"


export default function Header() {
    return (
        <div className="header" >

            <div className="header-Nav" >
                <Nav/>
            </div>

            <Route exact path="/" component={SomeText}/>
            <Route exact path="/Resources" component={Resources}/>
            <Route exact path="/Currency-Pair" component={CurrencyPairs}/>


        </div>
    );
}
