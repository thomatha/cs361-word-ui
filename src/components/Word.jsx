import LetterTile from './LetterTile';

// display a word as letter tiles
function Word({ word = {} }) {

    // animate win word
    const win = word.letters.every((letter) => (letter && letter.hint === 'in-position'));
    const className = win ? 'animate__animated animate__bounce' : undefined;

    // flip guess letters, skip animating empty board
    const letterClassName = (!win && word.letters.every((letter) => !!letter)) ? `animate__animated animate__flipInX` : '';

    return (
        <div className={className}>
            {word.letters.map((letter, index) => (
                <LetterTile
                    className={`${letterClassName} animate__delay-${index}s`}
                    key={index}
                    letter={letter}
                />
            ))}
        </div>
    );
}

export default Word;