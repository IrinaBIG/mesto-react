import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useFormWithValidations from '../validationHook/UseFormWithValidations';
import { editAvatarStartingValues } from '../utils/constants';

function EditAvatarPopup({ isOpen, isClose, onUpdateAvatar }) {

    const avatarRef = useRef();
    const { values, setValues, errText, isErrs, handleChangeValue, resetErrs } 
    = useFormWithValidations(editAvatarStartingValues);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
    }

    useEffect(() => {
        if (isOpen) {
            setValues({ avatarPlace: '' });
            resetErrs();
        }
    }, [isOpen]);

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
                name="avatarPlace"
                type="url"
                ref={avatarRef}
                id="avatar-input"
                className={`form__input form__input_type_avatar-place ${isErrs["avatarPlace"] ? "form__input_type_error" : ''}`}
                value={values["avatarPlace"]}
                onChange={handleChangeValue}
                placeholder="Ссылка на картинку"
                required />

            <span
                id="avatar-input-error"
                className={`form__error ${isErrs["avatarPlace"] ? "form__error_visible" : ''}`}>
                {errText["avatarPlace"]}</span>

            <button type="submit"
                className={`form__button ${Object.values(isErrs).some((item) => item) ? 'form__button_disabled' : ''}`}
                name="save" aria-label="Сохранить" disabled={Object.values(isErrs).some((item) => item)}>
                Сохранить
            </button>

        </PopupWithForm>
    );
}

export default EditAvatarPopup;