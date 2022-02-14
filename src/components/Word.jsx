import LetterTile from './LetterTile';

// display a word as letter tiles
function Word({ word = {} }) {
    return (
        <div>
            {word.letters.map((letter, index) => (
                <LetterTile
                    key={index}
                    letter={letter}
                />
            ))}
        </div>
    );
}

export default Word;