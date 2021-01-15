import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../UserContext.js"


export default function PairInfo(props) {
    const data = useContext(UserContext)

    const getStudent = (list) => list.filter(obj => obj.id == props.id.id)[0].name
    let infoName = getStudent(data)


    // useEffect(() => {
        // fetch(`https://fcsapi.com/api-v3/forex/list?type=forex&access_key=csQbcA47LkQXN25mV25h1cz`)
        // .then(res => res.json())
        // .then(data => console.log(data))
    //     })

    //     .catch(console.error);
    // }, [props.match])

    return (
        <div className="Info-card" >
            <header className="card-header" >
                {infoName}
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
