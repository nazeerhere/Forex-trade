import React from 'react';
import CurrencyBar from "./CurrencyBar"
import PairInfo from "./PairInfo.jsx"
import { UserContext } from "../UserContext.js"
import { useState } from "react"
import requestData from "../data.json"




export default function CurrencyPairs() {
    const [pairs, setPair] = useState(requestData)

    return (
        <div className="pair" >
            <UserContext.Provider value={pairs}>
            {console.log(pairs)}
            <CurrencyBar />

            <div className="currency-info" >
                <PairInfo />
            </div>

            </UserContext.Provider>
        </div>
    );
}
