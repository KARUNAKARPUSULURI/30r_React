import React, { useMemo, useState } from 'react'
import Child from './Child'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("john")
    function fibonacci(num) {
        console.log("is fib calling?")
        let num1 = 0;
        let num2 = 1;
        let sum;
        if (num === 1) {
            return num1;
        } else if (num === 2) {
            return num2;
        } else {
            for (let i = 3; i <= num; i++) {
                sum = num1 + num2;
                num1 = num2;
                num2 = sum;
            }
            return num2;
        }
    }
    function hello() {
        console.log("hello is calling")
        return "hello this is usememo"
    }
    function sumOfNumbers() {
        console.log("am i calling?")
        let sum = 0
        for (let i = 1; i <= 1e9; i++) {
            sum = sum + i
        }
        return sum;
    }
    const number = useMemo(() => sumOfNumbers(), [])
    const greet = useMemo(() => hello(), [count])
    const fib = useMemo(() => fibonacci(1000), [name]);
    return (
        <div>
            <h1>Counter : {count} - {number} - {name} - {fib} - {greet}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <button onClick={() => setName("Joe")}>Change name</button>
            <Child count = {count} />
        </div>
    )
}

export default UseMemo