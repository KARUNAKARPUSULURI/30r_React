import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from './redux/counterSlice';

const App = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.changeName.name)
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={()=> dispatch(changeName())}>Click</button>
        </div>
    )
}

export default App