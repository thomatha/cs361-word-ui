function LetterTile({ className, letter }) {

    let color;

    if (letter === undefined) {
        color = 'rgb(255, 255, 240)';
    } else if (letter.hint === 'not-in') {
        color = 'grey';
    } else if (letter.hint === 'not-in-position') {
        color = 'rgb(220, 196, 99)';
    } else {
        // letter in correct position
        color = 'rgb(73, 130, 73)';
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
            defaultValue={letter ? letter.letter : ''}
            className={className}
        />
    );
}

export default LetterTile;
