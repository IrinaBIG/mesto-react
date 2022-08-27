import React from 'react'; //1.3
import { useState, useRef } from 'react'; //1.3
import PopupWithForm from './PopupWithForm';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup({ isOpen, isClose, onAddPlace }) {
    // const [value, setValue] = React.useState({input: ''});
    // const currentUser = React.useContext(CurrentUserContext);
    const addPlaceNameRef = useRef();
    const addPlaceLinkRef = useRef();

    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        onAddPlace({name: addPlaceNameRef.current.value}, {link: addPlaceLinkRef.current.value});       
    }

    return (
        <PopupWithForm
            name="popup_place_add-card"
            title="Новое место"
            buttonText="Создать"
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleAddPlaceSubmit}
        >
            <input
                type="text"
                id="place-input"
                className="form__input form__input_type_place"
                name="newPlace"
                ref={addPlaceNameRef}
                // value=""
                placeholder="Название"
                required
                minLength="2"
                maxLength="40"
            />
            <span
                id="place-input-error"
                className="form__error"
            />
            <input
                type="url"
                id="link-input"
                ref={addPlaceLinkRef}
                className="form__input form__input_type_link-place"
                name="linkPlace"
                // value=''
                placeholder="Ссылка на картинку"
                required
            />
            <span
                id="link-input-error"
                className="form__error"
            />
            
        </PopupWithForm>
    );
}

export default AddPlacePopup;