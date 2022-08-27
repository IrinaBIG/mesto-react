import PopupWithForm from './PopupWithForm';

function WithConfirmationPopup({ isOpen, isClose, onSubmit }) {

    function handleSubmit(card) {
        onSubmit(card);
    }

    return (
        <PopupWithForm
            name="popup_confirmation"
            title="Вы уверены?"
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleSubmit}
            buttonText="Да"
        >
        </PopupWithForm>
    );
}

export default WithConfirmationPopup;