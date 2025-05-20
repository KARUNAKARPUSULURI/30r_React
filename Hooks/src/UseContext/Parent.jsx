import React, { useContext } from 'react'
import Child from './Child'
import { context } from './UseContext'

const Parent = () => {
    console.log(useContext(context))
  return (
    <div>
        <div>Parent</div>
    </div>
  )
}

export default Parent