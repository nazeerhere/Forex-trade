import React, {useEffect, useState} from 'react';

export default function Test() {
    const [info, setInfo] = useState(null)

    useEffect(() => {

        fetch(`https://api.randomuser.me`)
        .then(res => res.json())
        .then(res => {
            console.log(res.results[0])
            setInfo(res.results[0].email)
        })
        .catch(console.err)
    }, [])

    console.log(info)
    return (
        <div>
            {info}
        </div>
    );
}
