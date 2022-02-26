import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectHook = () => {

    const [data, setData] = useState('')
    const [counter, setCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {

            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
                setData(response.data[0].email)  
                console.log('API WAS CALLED')          
            }catch(error){
                console.log(error.message)
            }
        }
        fetchData()
    },[])
    
    const onClick = () => {
        setCount(counter + 1)
    }
  return (
    <div>
        <h1>Hello World</h1>
        <h2>{data}</h2>
        <h3>{counter}</h3>
        <button onClick={onClick}>Click</button>
     </div>
  )
}
export default UseEffectHook