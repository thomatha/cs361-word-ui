import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import './App.css';
import Board from './components/Board';
import WordInput from './components/WordInput';
import { useState } from 'react';


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

  const [win, setWin] = useState(false);
  const [background, setBackground] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameRules, setGameRules] = useState(false);

  // handler to submit word to microservice
  async function handleGuess(newGuess) {

    // call word guess microservice API
    const response = await fetch('http://office.local:5000/?guess=' + newGuess);
    const result = await response.json();

    // append to guesses, otherwise error 'Word not in list.'
    // each letter hint: not-in-position, in-position, not-in
    if (!result.error) {
      // update currentIndex by 1
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
    // alert 'Word not in list.'
    else alert(result.error)
  }


  // call teammate's service for background image
  // image microservice API by Casey Vu
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
        <div>
          <Modal
            isOpen={gameRules}
            toggle={() => setGameRules(false)}
          >
            <ModalHeader toggle={() => setGameRules(false)}>
              How to Play
            </ModalHeader>
            <ModalBody>
              <p>
                Guess the daily 5-letter word in 6 tries.
                Type your word and press ENTER to submit.
                Hints will be given after each guess.
                Your guess will be shown as colored letter tiles.
                Grey means the letter is not in the word at all.
                Yellow means the letter is in the wrong spot.
                Green means the letter is in the right spot.
              </p>
            </ModalBody>
          </Modal>
        </div>
        <Board guesses={guesses} />

        {/* limit user guesses to 6 */}
        <WordInput
          disabled={win || currentIndex === 6}
          onSubmit={(newGuess) => handleGuess(newGuess)}
        />

        {/* display win message */}
        {win && (
          <div id="win">
            <h3>Congratulations! Well Done!</h3>
          </div>

        )}
      </div>
    </div>
  );
}

export default App;