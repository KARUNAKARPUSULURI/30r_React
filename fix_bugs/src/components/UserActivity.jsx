import React from 'react';

function UserActivity({ activites }) {
  return (
    <div>
      <h3>Recent Activities</h3>
      <ul>
        {activities.map((activity) => (
          <li>{activity}</li>
        ))}
      </ul>
    </div>
  );
}s

export default UserActivity;
