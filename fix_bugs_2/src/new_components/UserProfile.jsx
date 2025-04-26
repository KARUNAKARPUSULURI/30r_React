import React from 'react'

function UserProfile({ user }) {
  if (!user.name) {
    return <p>No user data available.</p>
  }

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {user.isAdmin ? (
        <p>Role: Administrator</p>
      ) : (
        <p>Role: Regular User</p>
      )}
      <ul>
        {user.friends && user.friends.map(friend => (
          <li>{friend}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserProfile
