import React from 'react'

export default function WindowTracker() {

    const [windowsWidth, setWindowsWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowsWidth(window.innerWidth)
        })
    }, [])

    return (
        <h1>Window width: {window.innerWidth}</h1>
        // <h1>Window width: {windowsWidth}</h1>
    )
}