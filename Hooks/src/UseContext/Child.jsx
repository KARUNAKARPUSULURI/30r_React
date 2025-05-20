import React, { useContext } from 'react'
import { context } from './UseContext'

const Child = () => {
    const obj = useContext(context)
    return (
        <div>{obj.name}</div>
    )
}

export default Child