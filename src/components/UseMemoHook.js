import { useState, useEffect, useMemo} from "react"
import axios from 'axios'

const UseMemoHook = () => {
const [ data, setData ] = useState(null)
const [ toggle, setToggle ] = useState(false)

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
        setData(res.data)
    }).catch(error => {
        console.log(error.message)
    })
    
}, [])

const findLongestName = (apiData) => {
    if (!apiData) return null;

    let longestName = "";
    for (let i = 0; i < apiData.length; i++) {
      let currentName = apiData[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName
}

const longestName = useMemo(() => findLongestName(data) , [data])
    
const onClick = () => {
    setToggle(!toggle)
}

  return (
    <div>
        <div>{longestName}</div>
        <button onClick={onClick}>Toggle</button>
        {toggle && <h1>TOGGLE</h1>}
    </div>
  )
}


export default UseMemoHook