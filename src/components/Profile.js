import React from 'react'

function Profile({count, profile}) {
console.log('je suis dans profile')
  return (
    <div>
      <ul className="list-group">
        <li className='list-group-item'><p className='h2'>User Id: {count}</p></li>
        <li className='list-group-item'><strong>Nom : {profile.name} </strong></li>
        <li className='list-group-item'><strong>pseudo :  {profile.username}</strong></li>
        <li className='list-group-item'><strong>Email :  {profile.email} </strong></li>
      </ul>
    </div>
  )
}

export default React.memo(Profile)