import Joke from './components/Joke';
import jokesData from './jokesData'

// console.log(jokesData);

export default function App() {

    const jokeElements = jokesData.map(joke => {
        return <Joke name={joke.name} description={joke.description}/>
    })

    return (
        <main className="app">
            {jokeElements}
            <span>All jokes done!</span>
        </main>
    );
}