import React from 'react'

function ConditionalDisplay({ status }) {
  if (status === 'loading') {
    return <p>Loading, please wait...</p>
  } else if (status === 'error') {
    return <p style={{ color: 'red' }}>Error occurred!</p>
  } else if (status === 'success') {
    return <p style={{ color: 'green' }}>Operation successful!</p>
  } else if (status === 'loading') { // Bug 8: Duplicate condition
    return <p>Still loading...</p>
  } else {
    return <p>Unknown status</p>
  }
}

export default ConditionalDisplay
