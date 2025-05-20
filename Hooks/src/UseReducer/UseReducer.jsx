import React, { useReducer } from 'react'
import { reducerFunc } from './reducer'
import { handledecre, handleincre, handlereset } from './actions'

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducerFunc, 0)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=> handleincre(dispatch)}>+</button>
            <button onClick={()=> handledecre(dispatch)}>-</button>
            <button onClick={()=> handlereset(dispatch)}>r</button>
        </div>
    )
}

export default UseReducer