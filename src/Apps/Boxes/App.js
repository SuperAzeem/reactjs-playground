import React from 'react';
import boxesData from './BoxesData'
import Box from './Box'

import './style.css'

export default function App() {

    const [squares, setSquares] = React.useState(boxesData);
    const boxElements = squares.map(box => (
        <Box
            on={box.on}
            toggleFunc={() => toggle(box.id)}
        />
    ));

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map(square => {
                return square.id === id ? {...square, on: !square.on} : square;
            })
        })
    }

    return (
        <main>
            {boxElements}
        </main>
    );
}