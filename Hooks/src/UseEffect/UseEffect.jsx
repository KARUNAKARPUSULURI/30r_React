import React, { useEffect, useState } from 'react'
import "../App.css"

//1, 2, 3
function UseEffect() {
    const [count, setCount] = useState(1); 
    const [name, setName] = useState("karunakar")
    const handleClick = () => {
        setName("chaitanya")
    }

    useEffect(() => {
       const intervalId = setInterval(()=>{
            setCount(prev => prev + 1)
        }, 1000);

        return ()=> clearInterval(intervalId)
    }, [count])

    return (
        <div>
            <h2>UseEffect</h2>
            <h2>Counter : {count} - {name}</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default UseEffect

//`http://localhost:3000/register?username=${user}&password=${pass}`