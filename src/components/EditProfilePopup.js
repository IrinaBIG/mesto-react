import React from 'react';
import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, isClose, onUpdateUser }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({name, about: description});
        console.log(onUpdateUser());
    }

    function handleChangeName(e) {
        setName(e.target.value);
        // console.log(name);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
        // console.log(description);
    }

    useEffect(() => {
        setName(currentUser.name);
        // console.log(currentUser.name)
        setDescription(currentUser.about);
    }, [currentUser]);

    return (
        <PopupWithForm
            name="popup_place_profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleSubmit}
        >
            <input placeholder="Имя"
                name="firstname"
                onChange={handleChangeName}
                type="text"
                id="name-input"
                className="form__input form__input_type_name"
                value={name}
                required
                minLength="2"
                maxLength="40"
            />
            <span
                id="name-input-error"
                className="form__error"
            />
            <input placeholder="О себе"
                name="work"
                onChange={handleChangeDescription}
                type="text"
                id="activity-input"
                className="form__input form__input_type_activity"
                value={description}
                required
                minLength="2"
                maxLength="200"
            />
            <span
                id="activity-input-error"
                className="form__error"
            />
        </PopupWithForm>
    );
}

export default EditProfilePopup;

     // const [values, setValues] = useState({ firstname: '', work: ''});
    // const [messagesError, setMessagesError] = useState({ firstname: '', work: ''});
    // const [onErrors, setOnErrors] = useState({ firstname: false, work: false});
    // function handleChangeValue(e) {
    //     const { target: { validationMessage, value, validity: {valid}, name } } = e;
    //     setValues({...values, [name]: value})
    // }