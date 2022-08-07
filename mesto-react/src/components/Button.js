import React from 'react';

function Button(props) {
    return (
        <button type="submit" className="form__button" name="save" aria-label="Сохранить">{props.nameButton}</button>
    );
}

export default Button;