// EXAMPLE ONE

// import { useState} from 'react'

// const UseStateHook = () => {

//     const [ counter, setCounter] = useState(0)

//     const onClick = () =>{
//         setCounter(counter + 1)
        
//     }

//   return (
//       <div>
//       {counter}
//       <button onClick={onClick}>: Add</button>

//     </div>
//   )
// }

// export default UseStateHook

import { useState} from 'react'

const UseStateHook = () => {

    const [ inputValue, setInputValue] = useState('Zack')

    const onChange = (e) =>{
        setInputValue(e.target.value)
        
    }
  
  return (
      <div>
      <input type='text' name='name' placeholder='enter text' onChange={onChange}/>
      {inputValue}

    </div>
  )
}

export default UseStateHook