// import { useState, useEffect} from 'react'

// const UseStateTutor = () => {

//     const [ counter, setCounter] = useState(0)

//     const onClick = () =>{
//         setCounter(counter + 1)
        
//     }
//     useEffect(() => {
//        // setCounter()
//     }, [])
//   return (
//       <div>
//       {counter}
//       <button onClick={onClick}>: Add</button>

//     </div>
//   )
// }

// export default UseStateTutor

import { useState, useEffect} from 'react'

const UseStateTutor = () => {

    const [ inputValue, setInputValue] = useState('Zack')

    const onChange = (e) =>{
        setInputValue(e.target.value)
        
    }
    useEffect(() => {
        // handleClick()
        // setCounter()
    }, [])
  return (
      <div>
      <input type='text' name='name' placeholder='enter text' onChange={onChange}/>
      {inputValue}

    </div>
  )
}

export default UseStateTutor