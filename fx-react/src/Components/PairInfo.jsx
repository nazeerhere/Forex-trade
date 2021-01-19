import React, { useContext } from 'react';
import { UserContext } from "../UserContext.js"
import Plaything from "../plaything"
import Test from "./Test"



export default function PairInfo(props) {
    const data = useContext(UserContext)

    const getSymbol = (list) => list.filter(obj => obj.id == props.id.id)[0].symbol
    const getName = (list) => list.filter(obj => obj.id == props.id.id)[0].name
    let infoSymbol = getSymbol(data)
    let infoName = getName(data)


    return (
        <div className="Info-card" >
            <header className="card-header" >
                {infoSymbol}
            </header>
            
            <main className="card-main" >
                <Plaything infoName={infoName} />
                {/* <Test /> */}
            </main>
            
            <footer className="card-footer" >
            footer text
            </footer>
        </div>
    );
}


    // useEffect(() => {
        // fetch(`https://fcsapi.com/api-v3/forex/list?type=forex&access_key=csQbcA47LkQXN25mV25h1cz`)
        // .then(res => res.json())
        // .then(data => console.log(data))
    //     })

    //     .catch(console.error);
    // }, [props.match])
