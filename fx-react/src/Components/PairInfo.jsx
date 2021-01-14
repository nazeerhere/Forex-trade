import React, { useContext } from 'react';
import requestData from "../data.json"
import { UserContext } from "../UserContext.js"


export default function PairInfo() {
    const data = useContext(UserContext)

    return (
        <div className="Info-card" >
            <header className="card-header" >
            {data[0].symbol}
            </header>
            
            <main className="card-main" >
                main text
            </main>
            
            <footer className="card-footer" >
            footer text
            </footer>
        </div>
    );
}
