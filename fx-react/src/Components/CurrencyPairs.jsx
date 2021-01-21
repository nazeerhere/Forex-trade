import React, { useEffect, useState } from 'react';
import CurrencyBar from "./CurrencyBar"
import PairInfo from "./PairInfo.jsx"
import { UserContext } from "../UserContext.js"
import { Redirect, Route } from "react-router-dom"


export default function CurrencyPairs() {
    const [requestedData, setData] = useState([])

    useEffect(() => {
        fetch(`https://fcsapi.com/api-v3/forex/list?type=forex&access_key=csQbcA47LkQXN25mV25h1cz`)
        .then(res => res.json())
        .then(res => setData(res.response))
        .catch(console.err)
    }, [])

    return (
        <div className="pair" >
            <UserContext.Provider value={requestedData}>
            <CurrencyBar   />

             <Route exact path="/Currency-Pair/:id" 
                    render={(routerProps) => 
                    {return requestedData.length ? <PairInfo props={routerProps} id={routerProps.match.params} /> : <Redirect to="./"/> }
                    
                    } />

            
            </UserContext.Provider>
        </div>
    );
}
