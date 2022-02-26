// import { useState } from "react"

// const UseReducerTutor = () => {

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

// export default UseReducerTutor

import { useReducer } from "react"

const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREAMENT':
            return {counter: state.counter + 1, showText: state.showText};
        case 'TOGGLE':
            return {counter: state.counter, showText: !state.showText};
            default:
                return state
    }
}

// const state = {
//     counter: 0,
//     showText: true
// }

const UseReducerTutor = () => {

    const [state, dispatch] = useReducer(reducer, {
        counter: 0,
        showText: true
    })

  return (
    <div>
        <h1>{state.counter}</h1>
        <button onClick={() => {
            dispatch({type: 'INCREAMENT'}); 
            dispatch({type: 'TOGGLE'})
        }}>Click Me</button>
        {state.showText && <h1>Zack Bello</h1>}
    </div>
  )
}

export default UseReducerTutor