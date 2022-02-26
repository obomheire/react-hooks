import { useRef, useState} from 'react'

const UseRefHook = () => {

    const [name, setName] = useState('Zack Bello')
    const [check, setCheck] = useState(true)

    const inputRef = useRef(null)

    const onClick = () =>{
        if (check) {
            inputRef.current.focus()
            setCheck(!setCheck)
        }else{
            setName(inputRef.current.value)
            setCheck(setCheck)
            inputRef.current.value = ''
        }
        
    }
  return (
    <div>
        <h1>{name}</h1>
        <input type="text" placeholder='Ex...' ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRefHook

//NOT COMPLETED

// import { useReducer, useRef} from 'react'

// const reducer = (state, action, value) => {
//     switch(action.type){
//         case 'CHANGE_NAME':
//             return {...state, check: true}
//         case 'TOGGLE':
//             return {name: value, chect: false}
//         default:
//             return state
//     }
// }

// const UseRefHook = () => {

//     const [state, dispatch] = useReducer(reducer, {name: 'Zack Bello', check: null})

//     // const [name, setName] = useState('Zack Bello')
//     // const [check, setCheck] = useState(true)

//     const inputRef = useRef(null)

//     const action = () =>{
//         if (state.check)dispatch({type: 'CHANGE_NAME'}, inputRef.current.focus())
        
//         else dispatch({type: 'TOGGLE'}, inputRef.current.value )
        
//     }
//   return (
//     <div>
//         <h1>{state.name}</h1>
//         <input type="text" placeholder='Ex...' ref={inputRef} />
//         <button onClick={action}>Change Name</button>
//     </div>
//   )
// }

// export default UseRefHook



