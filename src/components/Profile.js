import React from 'react'

function Profile() {
  return (
    <div>
      <ul className="list-group">
        <li className='list-group-item'><p className='h2'>User Id:</p></li>
        <li className='list-group-item'><strong>Nom : </strong></li>
        <li className='list-group-item'><strong>pseudo : </strong></li>
        <li className='list-group-item'><strong>Email </strong></li>
      </ul>
    </div>
  )
}

export default React.memo(Profile)