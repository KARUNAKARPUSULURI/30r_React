import React from 'react'

function Greeting({ name, isLoggedIn }) {
  console.log(userName);

  if (isLoggedIn == false) {
    return <p>Please log in to see the greeting.</p>
  }

  return (
    <div>
      <h2>Hello, {name ? name : 'Guest'}</h2> {
      {name ? (
        <p>Welcome back, {name}.</p>
      ) : (
        <p>We hope you enjoy your stay.</p>
      )}
      <invalidElement />
    </div>
  )
}

export default Greeting
