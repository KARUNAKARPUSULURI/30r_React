import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Greeting from './new_components/Greeting.jsx'
import UserProfile from './new_components/UserProfile.jsx'
import ConditionalDisplay from './new_components/ConditionalDisplay.jsx'

function App() {
  const user = {
    name: 'Alice',
    email: 'alice@example.com',
    isAdmin: true,
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React - Advanced Components</h1>

      <div className="card">
        <Greeting name={user.name} isLoggedIn={true} />
      </div>

      <div className="card">
        <UserProfile user={user} />
      </div>

      <div className="card">
        <ConditionalDisplay status="loading" />
        <ConditionalDisplay status="error" />
        <ConditionalDisplay status="success" />
        <ConditionalDisplay status="unknown" />
      </div>
    </>
  )
}

export default App
