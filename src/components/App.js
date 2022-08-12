import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({ isOpen: false, card: {} })

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, card: card });
    // console.log(card);  
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
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          isClose={closeAllPopups}>
          <Input placeholder="Ссылка на картинку" />
        </PopupWithForm>

        <PopupWithForm
          name="popup_place_profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          isClose={closeAllPopups}>
          <Input placeholder="Имя" />
          <Input placeholder="О себе" />
        </PopupWithForm>

        <PopupWithForm
          name="popup_place_add-card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          isClose={closeAllPopups}>
          <Input
            placeholder="Название"
          />
          <Input
            placeholder="Ссылка на картинку"
          />
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
