import './App.css';
import Board from './components/Board';
import WordInput from './components/WordInput';
import { useState } from 'react';


function App() {
  // state for list of guesses
  const [guesses, setGuesses] = useState([]);
  const [win, setWin] = useState(false);
  const [background, setBackground] = useState();

  // handler to submit word to microservice
  async function handleGuess(newGuess) {

    // call service with word
    const response = await fetch('http://office.local:5000/?guess=' + newGuess)
    const result = await response.json()


    // append to guesses
    // letter hints: not-in-position, in-position, not-in
    // word hint: not in list
    if (!result.error) {
      setGuesses([...guesses, result]);

      // if all letter in position, then win=true
      if (result.letters.every((letter) => letter.hint === 'in-position')) {
        setWin(true);

        // TODO display win message
        // TODO show hidden word if no win

      }
    }
    else alert(result.error) // TODO alert user 'Word not in list.'
  }

  // TODO call team mate's service for background image
  function showBackground() {
    setBackground(`https://picsum.photos/1000/750?${(new Date()).toISOString()}`);
  }

  return (
    <div>
      <style>{`
      html, body{
        height: 100%;
      }
      body{
        background-image: url(${background});
        background-size: cover;
        background-position: center center;
      }
      ` }</style>
      <button id="background" onClick={showBackground}>Call Image Service</button>
      <div className="App">
        <h1>WORD GUESS</h1>
        <hr />
        <h3>How to Play</h3>
        <p>Guess the daily 5-letter word in 6 tries.
          Press ENTER to submit.
          Hints will be given after each guess.
          The letter tiles will change color.
          Grey means the letter is not in the word at all.
          Yellow means the letter is in the wrong spot.
          Green means the letter is in the right spot.
        </p>
        <Board guesses={guesses} />

        {/* limit user guesses to 6 */}
        <WordInput
          disabled={win || guesses.length >= 6}
          onSubmit={(newGuess) => handleGuess(newGuess)}
        />
      </div>
      {/* <hr />
      <pre>{JSON.stringify(guesses, null, '  ')}</pre> */}
    </div>
  );
}

export default App;