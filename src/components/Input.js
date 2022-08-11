import React from 'react';

function Input(props) {
    return (
        <>
        <input type="url" id="avatar-input" className="form__input form__input_type_avatar-place" name="avatarPlace"
            defaultValue="" placeholder={props.placeholder} required />
        <span id="avatar-input-error" className="form__error"></span>
        </>
    );
}

export default Input;
