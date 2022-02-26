// import React from 'react'

// const Login = ({ setUsername }) => {

//     const onChange = (e) => {
//         setUsername(e.target.value)
//     }
//   return (
//     <div>
//         <input type="text" placeholder='Ex...' onChange={onChange}/>
//     </div>
//   )
// }

// export default Login

import { useContext } from 'react'
import { AppContext } from './UseContextHook'

const Login = () => {
    const { setUsername } = useContext(AppContext)

    const onChange = (e) => {
        setUsername(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='Ex...' onChange={onChange}/>
    </div>
  )
}

export default Login