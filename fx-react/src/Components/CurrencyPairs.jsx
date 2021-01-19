import React, { useState } from 'react';
import CurrencyBar from "./CurrencyBar"
import PairInfo from "./PairInfo.jsx"
import { UserContext } from "../UserContext.js"
import requestData from "../Data/data.json"
import { Route } from "react-router-dom"


export default function CurrencyPairs() {

    return (
        <div className="pair" >
            <UserContext.Provider value={requestData}>
            <CurrencyBar   />

                
             <Route path="/Currency-Pair/:id" 
                    render={(routerProps) => 
                    {return <PairInfo props={routerProps} id={routerProps.match.params} />}
                    } />

            
            </UserContext.Provider>
        </div>
    );
}
