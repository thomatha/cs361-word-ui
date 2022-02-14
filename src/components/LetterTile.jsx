function LetterTile({ letter }) {

    let color;

    if (letter.hint === 'not-in') {
        color = 'grey';
    } else if (letter.hint === 'not-in-position') {
        color = 'rgb(220, 196, 99)';
    } else {
        // letter in correct position
        color = 'green';
    }

    return (
        <input
            style={{
                backgroundColor: color,
                color: 'white'
            }}
            type="text"
            maxLength="1"
            id="letterTile"
            defaultValue={letter.letter}
        />
    );
}

export default LetterTile;
