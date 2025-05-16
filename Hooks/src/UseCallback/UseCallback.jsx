import React, { useCallback, useState } from 'react'
import Child from './Child';

const arr = [];
//1st render -> [f] -> memory address -> 0x500 -> arr[0] == undefined
//2nd render -> [f, f] -> memory address -> 0x500 -> arr[0], arr[1]
//3rd render -> [f, f, f] -> memory address -> 0x500 -> arr[1], arr[2]

//arr[0] == arr[1] -> 0f == 1f 
//arr[0] == arr[2] -> 0f == undefined
//it checks the function references

const UseCallback = () => {
    const items = Array.from({length : 10000}, (_, index) => `item ${index + 1}`)
    const [search, setSearch] = useState([])
    // console.log(items)
    const [count, setCount] = useState(0);
    //useCallback(()=>{},[])
    const increment = useCallback(() => {
        console.log("calling??") //reuse, recreate
        setCount(c => c + 1)
    }, [count < 2 ? 0 : count])
    //0 -> 1st render -> deps -> 0 -> true
    //1 -> 2nd render -> deps -> 0 -> true
    //2 -> 3rd render -> deps -> 0 -> true
    //3 -> 4th render -> deps -> 3 -> false
    arr.push(increment)
    if(arr.length == 2){
        console.log(arr[0] == arr[1]) //true ? reuse : recreate
        console.log(arr[0] == arr[2]) //true ? reuse : recreate
    }
    const handleChange = (e) => {
        const filteredRecords = items.filter(ele => ele.includes(e.target.value))
        setSearch(filteredRecords)
    }
  return (
    <div>
        <h1>Counter : {count}</h1>
        <Child increment = {increment} />
        {/* <input  type='text' onChange={handleChange}/>
        {search.map(i => <p>{i}</p>)} */}
    </div>
  )
}

export default UseCallback