// import { children } from 'react';

function PopupWithForm({ name, title, children, isOpen, isClose }) {

    return (
        <>
            <div className={`popup popup_type_${name} ${isOpen ? "popup_is-active" : ''}`}  >
                <div className="popup__content">
                    <button className="popup__close" type="button" onClick={isClose}></button>
                    <h4 className="popup__title">{title}</h4>
                    <form className="form" id="profile-form" name={name} noValidate>
                        {children}
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopupWithForm;