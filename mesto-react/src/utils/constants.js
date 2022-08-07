export const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error_visible'
};

export const createButtonCaptions = {
    normalCaption: 'Создать',
    activeCaption: 'Создаю...'
}

export const confirmDeleteButtonCaptions = {
    normalCaption: 'Да',
    activeCaption: 'Удаляю...'
}

export const saveButtonCaptions = {
    normalCaption: 'Сохранить',
    activeCaption: 'Сохраняю...'
}

export const linkEditProfile = document.querySelector('.profile__button-edit');
export const formElementProfile = document.querySelector('#profile-form');
export const avatarProfileInput = document.querySelector('.profile__avatar');
export const buttonAddProfile = document.querySelector('.profile__button-add');
export const buttonConfirmation = document.querySelector('.button__remove');
export const popupAddCard = document.querySelector('.popup_place_add-card');
export const btnClosePopupCard = popupAddCard.querySelector('.popup__close');
export const formAddCard = popupAddCard.querySelector('#place-form');
export const popupUpdateAvatar = document.querySelector('.popup_place_avatar');
export const formUpdateAvatar = popupUpdateAvatar.querySelector('#avatar-form');
export const popupImage = document.querySelector('.popup_place_image-card');
export const btnClosePopupImage = popupImage.querySelector('.popup__close');
export const addButton = popupAddCard.querySelector(config.submitButtonSelector);
export const inputsAddCardForm = Array.from(formAddCard.querySelectorAll(config.inputSelector));