import React, { useContext } from 'react'
import { context } from './UseContext'
import Child from './Child'

const GrandParent = () => {
    // console.log(useContext(context)) // token
    // console.log(context.Consumer)
    return (
        <div>
            <div>Grand parent</div>
            <Child />
            {/* {} */}
            {/* <context.Consumer>
                {({name})=>{
                    return <p>{name}</p>
                }}
            </context.Consumer> */}
        </div>
    )
}

export default GrandParent