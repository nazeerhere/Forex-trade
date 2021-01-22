import React, { useContext, useState } from 'react';
import { UserContext } from "../UserContext.js"
import { Link } from "react-router-dom";


export default function CurrencyBar() {
    const data = useContext(UserContext)
    const [controlData, setData] = useState(data)

    const handleChange = event => {
        const userInput = event.target.value.toLowerCase()
        const filteredCurrency = data.filter(pair => {
            return pair.symbol.toLowerCase().includes(userInput)
        })
        setData(filteredCurrency)
        if (!userInput) {
            setData(data)
        }
    }

    return (
        <div className="Cbar" >
            <h1>Symbols-</h1>
            <form>
                <input onChange={handleChange} type="text" placeholder="Search Currency Pair" />
            </form>

            {controlData.map(pair => {
                return(
                    <Link to={`/Currency-Pair/${pair.id}`} key={pair.id} >
                        <h1 className="symbol" >{pair.symbol}</h1>
                    </Link>
                )
            })}
        </div>
    );
}
