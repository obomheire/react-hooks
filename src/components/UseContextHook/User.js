// import React from 'react'

// const User = ({ username }) => {
//   return (
//     <div>
//         <h1>User: {username}</h1>
//     </div>
//   )
// }

// export default User

import { useContext } from 'react'
import { AppContext } from './UseContextHook'

const User = () => {

    const { username} = useContext(AppContext)
  return (
    <div>
        <h1>User: {username}</h1>
    </div>
  )
}

export default User