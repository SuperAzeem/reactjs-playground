import {React, useState} from "react";
import WindowTracker from "./WindowTracker";

export default function App() {

    const [show, setShow] = useState(true)

    function toggleShow() {
        setShow(prevShow => !prevShow)
    }

    return (
        <div className="container">
            <button onClick={toggleShow}>Toggle Window Tracker</button>
            {show && <WindowTracker />}
        </div>
    )
}