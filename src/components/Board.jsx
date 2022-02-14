import Word from './Word';


// display user guesses
function Board({ guesses = [] }) {
    return (
        <div>
            {guesses.map((word, index) =>
                <Word
                    key={index}
                    word={word}
                />
            )}
        </div>
    );
}

export default Board;