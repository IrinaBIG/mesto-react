import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import Button from './Button';
import ImagePopup from './ImagePopup';

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

  const [selectedCard, setSelectedCard] = useState({ isOpen: false, card: {} })
  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, card: card });
    console.log(card);  
  }


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({ isOpen: false, card: {} })
  }

  return (

    <div className="body">

      <div className="page">
        <Header />,
        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
        />,
        <Footer />,

        <PopupWithForm
          name="popup_place_avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          isClose={closeAllPopups}>
          <Input placeholder="Ссылка на картинку" />
          <Button nameButton="Сохранить"></Button>
        </PopupWithForm>

        <PopupWithForm
          name="popup_place_profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          isClose={closeAllPopups}>
          <Input placeholder="Имя" />
          <Input placeholder="О себе" />
          <Button nameButton="Сохранить"></Button>
        </PopupWithForm>

        <PopupWithForm
          name="popup_place_add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          isClose={closeAllPopups}>
          <Input
            placeholder="Название"
          />
          <Input
            placeholder="Ссылка на картинку"
          />
          <Button nameButton="Создать"></Button>
        </PopupWithForm>

        <ImagePopup
          name="place_image-card"
          card={selectedCard}
          isClose={closeAllPopups}
        />

        {/* <PopupWithForm name="popup_confirmation" title="Вы уверены?" isOpen={} isClose={closeAllPopups}>
          <Button nameButton="Да"></Button>
        </PopupWithForm> */}

      </div>

    </div>

  );
}

export default App;
