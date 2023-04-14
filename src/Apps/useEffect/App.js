import React, {useState, useEffect} from 'react'

export default function App() {

    const [ourData, setOurData] = useState({});
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(prevCount => prevCount+1)
    }

    console.log("Component rendered")

    useEffect(() => {
        console.log("Effect ran")
        // fetch('https://swapi.dev/api/people/' + count)
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setOurData(data))
    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={addCount}>Next</button>
            <pre className='ourData'>{JSON.stringify(ourData, null, 2)}</pre>
        </div>
    )
}