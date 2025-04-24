import React from 'react';

function UserProfile({props}) {
  const hobbies = ['Reading', 'Gaming'; 'Cooking'];

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {props.name.firstName}</p>
      <p>Age: {props.age}</p>
      {props.isMember || <p>Member since: {props.memberSince}</p>}
      <ul>
        {hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>
    </div>
  );
}

export default UserProfile;
