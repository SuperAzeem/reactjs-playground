import React from 'react';

export default function App() {

    // const [myThings, setMyThings] = React.useState(['Thing 1', 'Thing 2']);
    const [myCard, setMyCard] = React.useState({
        firstname: 'Muhammad',
        lastname: 'Azeem',
        phone: '+923322242226',
        email: 'xip2me@gmail.com',
        isFavorite: false,
        isFavorite: true
    });

    let favoriteStatus = myCard.isFavorite ? "Yes" : "No";

    // const myThingsList = myThings.map(thing => <li>{thing}</li>)

    function addThing() {
        // setMyThings(prevMyThings => [...prevMyThings, `Thing ${prevMyThings.length + 1}`])
        // setMyThings(function(prevMyThings) {
        //     return [...prevMyThings, '${prevMyThings.length}' + 1]
        // })
    }

    function flipFavoriteStatus() {
      setMyCard((prevMyCard) => ({
        ...prevMyCard,
        isFavorite: !prevMyCard.isFavorite,
      }));
    }

    return (
        <div>
            {/* <button onClick={addThing}>Add Thing</button> */}
            {/* <button>Add Thing</button> */}
            {/* <ol>
                {}
            </ol> */}
            <h1>Card details</h1>
            <ul>
                <li>{myCard.firstname} {myCard.lastname}</li>
                <li>{myCard.phone}</li>
                <li>{myCard.email}</li>
                <li>Favorite: {favoriteStatus}</li>
            </ul>
            <button onClick={flipFavoriteStatus}>Flip Favorite</button>
        </div>
    )
}