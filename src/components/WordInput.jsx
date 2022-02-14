import { useState } from 'react';


function WordInput({ onSubmit, ...props }) {

    const [input, setInput] = useState('');

    // accept 5 letter word & clear input
    function handleInput(event) {
        if (event.key === "Enter" && input.length === 5) {
            onSubmit(input);
            setInput('')
        }
    }

    return (
        <input
            {...props}
            autoFocus
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            maxLength="5"
            id="userInput"
            onKeyPress={handleInput}
        />
    );
}

export default WordInput