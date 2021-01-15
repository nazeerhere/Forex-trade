import React, { useContext, useState } from 'react';
import { UserContext } from "../UserContext.js"
import { Link } from "react-router-dom";


export default function CurrencyBar() {
    const data = useContext(UserContext)


    return (
        <div className="Cbar" >
            <h1>Symbols-</h1>

            {data.map(pair => {
                return(
                    <Link to={`/Currency-Pair/${pair.id}`} key={pair.id} >
                        <h1 className="symbol" >{pair.symbol}</h1>
                    </Link>
                )
            })}
        </div>
    );
}
