import { Modal, ModalHeader, ModalBody } from 'reactstrap';


function Rules({ isOpen, toggle }) {

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
        >
            <ModalHeader toggle={toggle}>
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
    )
}

export default Rules;