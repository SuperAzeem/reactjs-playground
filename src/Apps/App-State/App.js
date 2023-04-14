import React from 'react'

export default function App() {

    const [countValue, setIsImportant] = React.useState(true)

    // function boolFlip() {
    //     setIsImportant(function (oldValue) {
    //         return (oldValue ? false : true )
    //     })
    // }

    function boolFlip() {
        setIsImportant(oldValue => !oldValue )
    }

    function setUp() {
        setIsImportant(function (oldValue) {
            return oldValue + 1
        })
    }

    function setDown() {
        setIsImportant(prevCountValue => prevCountValue - 1)
    }

    return (
        <div>
            <h1>Is state important to know?</h1>
            <h2>{countValue ? 'YES' : 'NO'}</h2>
            <button onClick={boolFlip}>FLIP</button>
        </div>
    )
}