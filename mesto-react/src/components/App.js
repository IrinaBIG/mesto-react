import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import Button from './Button';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  };

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }

  return (

    <div className="body">

      <div className="page">
        <Header />,
        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
        />,
        <Footer />,

        <PopupWithForm name="popup_place_avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} isClose={closeAllPopups}>
          <Input placeholder="Ссылка на картинку" />
          <Button nameButton="Сохранить"></Button>
        </PopupWithForm>

        <PopupWithForm name="popup_place_profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} isClose={closeAllPopups}>
          <Input placeholder="Имя" />
          <Input placeholder="О себе" />
          <Button nameButton="Сохранить"></Button>
        </PopupWithForm>

        <PopupWithForm name="popup_place_add-card" title="Новое место" isOpen={isAddPlacePopupOpen} isClose={closeAllPopups}>
          <Input placeholder="Название" />
          <Input placeholder="Ссылка на картинку" />
          <Button nameButton="Создать"></Button>
        </PopupWithForm>

        <PopupWithForm name="popup_confirmation" title="Вы уверены?" isOpen={isAddPlacePopupOpen} isClose={closeAllPopups}>
          <Button nameButton="Да"></Button>
        </PopupWithForm>

      </div>

      <div className="popup popup_place_image-card">
        <div className="popup__image">
          <button className="popup__close" type="button"></button>
          <img className="popup__image-card" src="#" />
          <h4 className="popup__title popup__title_place_image"></h4>
        </div>
      </div>
    </div>

  );
}

export default App;
