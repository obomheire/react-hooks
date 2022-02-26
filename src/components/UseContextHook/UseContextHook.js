// import { useState } from 'react'
// import Login from './Login'
// import User from './User'

// const UseContextHook = () => {

//     const [username, setUsername] = useState('')
//   return (
//     <div>
//         <Login setUsername={setUsername} />
//         <User username={username}/>
//     </div>
//   )
// }

// export default UseContextHook

//WITH CONTEXT API

import { useState, createContext } from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null)

const UseContextHook = () => {

    const [username, setUsername] = useState('')
  return (
    <div>
        <AppContext.Provider value={{username, setUsername}}>
        <Login />
        <User />
        </AppContext.Provider>
    </div>
  )
}

export default UseContextHook