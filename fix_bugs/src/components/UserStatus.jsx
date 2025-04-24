import React from 'react';

function UserStatus({ status }) {
  return (
    <div>
      {status = 'online' ? <p>User is online</p> : <p>User is offline</p><br>}
    </div>
  );
}

export default Userstatus;
