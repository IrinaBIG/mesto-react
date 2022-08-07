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

      {/* <div className="popup popup_confirmation">
        <div className="popup__content">
          <button className="popup__close" type="button"></button>
          <h4 className="popup__title popup__title_type_confirmation">Вы уверены?</h4>
          <form className="form" name="form-in-popup" noValidate>
            <button type="submit" className="form__button" name="save" aria-label="Да">Да</button>
          </form>
        </div>
      </div>  */}
        </>
    );
}

export default PopupWithForm;