// WITHOUT THE USEREDUCER HOOKS

// import { useState } from "react"

// const UseReducerHook = () => {

//     const [counter, setCounter] = useState(0)
//     const [showText, setShowText] = useState(true)

//   return (
//     <div>
//         <h1>{counter}</h1>
//         <button onClick={() => {setCounter(counter + 1); setShowText(!showText) }}>Click Me</button>
//         {showText && <h1>Zack Bello</h1>}
//     </div>
//   )
// }

// export default UseReducerHook

import { useReducer } from "react"

// const reducer = (state, action) =>{
//     switch(action.type){
//         case 'INCREAMENT':
//             return {counter: state.counter + 1, showText: state.showText};
//         case 'TOGGLE':
//             return {counter: state.counter, showText: !state.showText};
//             default:
//                 return state
//     }
// 
// OR AS FOLLOWS
//}

const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREAMENT':
            // return {...state, counter: state.counter + 1};
            return {counter: state.counter + 1, showText: !state.showText};
        // case 'TOGGLE':
        //     return {...state, showText: !state.showText};
            default:
                return state
    }
}
const stateData = {
    counter: 0,
    showText: true
}


const UseReducerHook = () => {

    const [state, dispatch] = useReducer(reducer, stateData)

    const action = () => {
        dispatch({type: 'INCREAMENT'}); 
        // dispatch({type: 'TOGGLE'})
    }

  return (
    <div>
        <h1>{state.counter}</h1>
        <button onClick={action}>Click Me</button>
        {state.showText && <h1>Zack Bello</h1>}
    </div>
  )
}

export default UseReducerHook