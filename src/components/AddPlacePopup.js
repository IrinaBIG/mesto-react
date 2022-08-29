import React from 'react'; //1.3
import { useState, useRef } from 'react'; //1.3
import PopupWithForm from './PopupWithForm';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup({ isOpen, isClose, onAddPlace }) {
    // const [value, setValue] = React.useState({input: ''});
    // const currentUser = React.useContext(CurrentUserContext);
    const addPlaceNameRef = useRef();
    const addPlaceLinkRef = useRef();

    // валидация с Ulbi
    const [titlePlace, setTitlePlace] = useState('');
    const [urlPlace, setUrlPlace] = useState('');
    const [titlePlaceDirty, setTitlePlaceDirty] = useState(false); //отражает, были ли мы внутри инпута или нет
    const [urlPlaceDirty, setUrlPlaceDirty] = useState(false); // аналогично предыдущей
    const [titlePlaceError, setTitlePlaceError] = useState('Описание не может быть пустым');
    const [urlPlaceError, setUrlPlaceError] = useState('Ссылка не может быть пустой');

    // const handlerTitle = (e) => {
    //     setTitlePlace(e.target.value)
    //     let url;
    //     try {
    //         url = new URL(s);
    //     } catch (e) { return false; }
        
    //     if (!/https?/.test(url.protocol)) {
    //         setTitlePlaceError('Некорректный URL')
    //     } else {
    //         setTitlePlaceError('')
    //     }
    // }

    const handlerUrl = (e) => {
        setUrlPlace(e.target.value)
        let url;
        try {
            url = new URL();
        } catch (e) { return false; }

        if (!/https?/.test(url.protocol)) {
            setUrlPlaceError('Некорректный URL')
        } else {
            setUrlPlaceError('')
        }
    }

    const handlerBlur = (e) => { 
        switch (e.target.name) {
            case "newPlace":
                setTitlePlaceDirty(true)
                break
            case "linkPlace":
                setUrlPlaceDirty(true)
                break
        }
    }

    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        onAddPlace({name: addPlaceNameRef.current.value, link: addPlaceLinkRef.current.value});
        addPlaceNameRef.current.value = '';
        addPlaceLinkRef.current.value = '';
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
            {(titlePlaceDirty && titlePlaceError) &&
            <span
                id="place-input-error"
                className="form__error form__error_visible"
            >{titlePlaceError}</span>} 
            <input
                type="text"
                id="place-input"
                // className={`form__input form__input_type_place ${urlPlaceError["linkPlace"] ? "form__input_type_error" : ""}`}
                className="form__input form__input_type_place"
                name="newPlace"
                ref={addPlaceNameRef}
                onBlur={e => handlerBlur(e)} // отрабатывает тогда, когда пользователь покинул инпут
                // value={titlePlace}
                // onChange={e => handlerTitle(e)}
                placeholder="Название"
                required
                minLength="2"
                maxLength="40"
            />
             {/* {(titlePlaceDirty && titlePlaceError) && <div style={{color: 'red'}}>{titlePlaceError}</div>} */}
           

            <input
                type="url"
                id="link-input"
                ref={addPlaceLinkRef}
                // className={`form__input form__input_type_link-place ${urlPlaceError["linkPlace"] ? "form__input_type_error" : ""}`}
                className="form__input form__input_type_link-place"
                name="linkPlace"
                onBlur={e => handlerBlur(e)}
                value={urlPlace}
                onChange={e => handlerUrl(e)}
                placeholder="Ссылка на картинку"
                required
            />
            {/* {(urlPlaceDirty && urlPlaceError) && <div style={{color: 'red'}}>{urlPlaceError}</div>} */}
            {(urlPlaceDirty && urlPlaceError) && 
            <span
                id="link-input-error"
                // className={`form__error ${urlPlaceDirty["linkPlace"] ? "form__error_visible" : ""}`}
                className="form__error form__error_visible"
                >{titlePlaceError}</span>}
            <button type="submit" className="form__button" name="save" aria-label="Создать">Создать</button>
        </PopupWithForm>
    );
}

export default AddPlacePopup;