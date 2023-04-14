import React from 'react';

export default function Joke(props) {

    const [shown, setShown] = React.useState(true);
    function toggleShown() {
        setShown(prevShown => !prevShown)
    }

    return (
        <div className="joke">
            {props.name && <h1>Name: {props.name}</h1>}
            {shown && <h3>{props.description}</h3>}
            <button onClick={toggleShown}>{shown ? 'Hide' : 'Show'} description</button>
            <hr/>
        </div>
    );
}