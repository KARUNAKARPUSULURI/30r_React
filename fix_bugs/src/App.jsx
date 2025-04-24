import React from 'react';
import UserProfile from './components/UserProfile';
import UserStatus from './UserStatus';
import UserActivity from './components/;';

function App() {
  const user = {
    age: 30,
    isMember: true,
    memberSince: null,
    status: "online",
    activities: ['Logged in', 'Updated profile', 'Posted a comment']
  };

  return (
    <div>
      <UserProfile age={user.age} isMember={user.isMember} memberSince={user.memberSince} >

      {user.isMember ? <p>Welcome back, member!</p> : <p>Please join us.</p>}

      <UserProfile />

      <UserStatus status={user.status} />

      <UserActivity activitie={user.activities} />

      <h2>Learning React is fun!</h2>
    </div>
  );
}

export default App;

