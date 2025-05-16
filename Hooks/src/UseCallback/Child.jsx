import React from 'react'

const Child = ({increment}) => {
    return (
        <div>
            <button onClick={increment}>Click</button>
        </div>
    )
}

export default Child