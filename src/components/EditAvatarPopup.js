import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, isClose, onUpdateAvatar }) {
    
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
                ref={avatarRef}
                id="avatar-input"
                className="form__input form__input_type_avatar-place"
                name="avatarPlace"
                // value=""
                placeholder="Ссылка на картинку"
                required />

            <span
                id="avatar-input-error"
                className="form__error"
            />
            <button type="submit" className="form__button" name="save" aria-label="Сохранить">Сохранить</button>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;