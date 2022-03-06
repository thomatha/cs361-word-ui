import { Button } from 'reactstrap';
import './App.css';
import Board from './components/Board';
import WordInput from './components/WordInput';
import { useState } from 'react';
import Rules from './components/RulesModal';


function App() {

  // state for list of guesses
  const [guesses, setGuesses] = useState([
    { letters: [undefined, undefined, undefined, undefined, undefined] },
    { letters: [undefined, undefined, undefined, undefined, undefined] },
    { letters: [undefined, undefined, undefined, undefined, undefined] },
    { letters: [undefined, undefined, undefined, undefined, undefined] },
    { letters: [undefined, undefined, undefined, undefined, undefined] },
    { letters: [undefined, undefined, undefined, undefined, undefined] },
  ]);

  // index to count number of guesses
  const [currentIndex, setCurrentIndex] = useState(0);

  const [win, setWin] = useState(false);
  const [background, setBackground] = useState();
  const [gameRules, setGameRules] = useState(false);

  // handler to submit word to microservice
  async function handleGuess(newGuess) {

    // call word guess microservice API
    const response = await fetch('https://word-guess-api.herokuapp.com/?guess=' + newGuess);
    const result = await response.json();

    // update guesses list if valid guess
    if (!result.error) {
      setCurrentIndex(currentIndex + 1);
      const updatedGuesses = [...guesses];
      updatedGuesses[currentIndex] = result;
      setGuesses(updatedGuesses);

      // if all letter in position, then win=true
      if (result.letters.every((letter) => letter.hint === 'in-position')) {
        setWin(true);
        showBackground();
      }
    }
    // if invalid guess, alert 'Word not in list.'
    else alert(result.error)
  }


  // call teammate's service for background image
  // image microservice by Casey Vu
  async function showBackground() {
    const response = await fetch('https://unsplash-amazable.herokuapp.com/search?q=confetti');
    const result = await response.json();
    setBackground(result.imageUrl);
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

      <div className="App">
        <h1>WORD GUESS</h1>
        <hr />

        <Button id="rules" onClick={() => setGameRules(true)}>How to Play</Button>
        <Rules
          isOpen={gameRules}
          toggle={() => setGameRules(false)}
        />

        <Board guesses={guesses} />

        {/* limit user guesses to 6 */}
        <WordInput
          disabled={win || currentIndex === 6}
          onSubmit={(newGuess) => handleGuess(newGuess)}
        />

        {/* display win message */}
        {win && (
          <div id="win">
            <h3>Congratulations, well done!</h3>
          </div>

        )}
      </div>
    </div>
  );
}

export default App;