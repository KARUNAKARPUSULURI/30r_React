import React, { memo } from 'react'

//HOC -> memo() -> to prevent unnecesary re-renders which are happening in child because of parent state values changes  
const Child = memo(({count}) => {
    console.log("hi im child back again", count)
  return (
    <div>Child</div>
  )
})
memo()

export default Child