import React from 'react';
import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, isClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [values, setValues] = useState({firstname: "", work: ""});
    const [errText, setErrText] = useState({firstname: "", work: ""});
    const [isErrs, setIsErrs] = useState({firstname: false, work: false});

    const handleChangeValue = (e)=> {
        const {target: { validationMessage, validity: {valid}, value, name }} = e;
        setValues({...values, [name]: value});  // чтобы обновить одно поле
        setIsErrs({...isErrs, [name]: !valid});
        if (!valid) {
            setErrText({...errText, [name]: validationMessage});
        } else {
            setErrText({...errText, [name]: ""});
        }
    }

    // function handleChangeName(e) {
    //     setName(e.target.value);
    // }
    
    // function handleChangeDescription(e) {
    //     setDescription(e.target.value);
    // }
    
    useEffect(() => {
        if (currentUser.name && currentUser.about) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({name, about: description});
    }

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
                onChange={handleChangeValue}
                type="text"
                id="name-input"
                className={`form__input form__input_type_name ${isErrs["firstname"] ? "form__input_type_error" : ""}`}
                value={values["firstname"]}
                required
                minLength="2"
                maxLength="40"
            />
            <span id="name-input-error" className={`form__error ${isErrs["firstname"] ? "form__error_visible" : ""}`}>{errText["firstname"]}</span>
            <input placeholder="О себе"
                name="work"
                onChange={handleChangeValue}
                type="text"
                id="activity-input"
                className={`form__input form__input_type_activity ${isErrs["work"] ? "form__input_type_error" : ""}`}
                value={values["work"]}
                required
                minLength="2"
                maxLength="200"
            />
            <span id="activity-input-error" className={`form__error ${isErrs["work"] ? "form__error_visible" : ""}`}>{errText["work"]}</span>
            <button type="submit" 
            className={`form__button ${Object.values(isErrs).some((item)=>item) ? 'form__button_disabled': ""}`} 
            name="save" 
            aria-label="Сохранить" 
            disabled={Object.values(isErrs).some((item)=>item)}>Сохранить</button>
        </PopupWithForm>
    );
}

export default EditProfilePopup;