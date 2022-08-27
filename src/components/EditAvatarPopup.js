import React from 'react'; //1.3
import { useState, useRef } from 'react'; //1.3
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, isClose, onUpdateAvatar }) {
    // const [value, setValue] = React.useState({input: ''});
    // const currentUser = React.useContext(CurrentUserContext);
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
        avatarRef.current.value = '';
    }

    return (
        <PopupWithForm
            name="popup_place_avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleSubmit}
        >
            <input
                type="url"
                id="avatar-input"
                className="form__input form__input_type_avatar-place"
                name="avatarPlace"
                ref={avatarRef}
                // value={value}
                placeholder="Ссылка на картинку"
                required />

            <span
                id="avatar-input-error"
                className="form__error"
            />
        </PopupWithForm>
    );
}

export default EditAvatarPopup;