import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import WithConfirmationPopup from './WithConfirmationPopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isPopupWithConfirmation, setIsPopupWithConfirmation] = useState(false)
  const [selectedCard, setSelectedCard] = useState({ isOpen: false, card: {} })
  const [currentUser, setCurrentUser] = useState({ name: '', about: '' });
  const [cards, setCards] = useState([]);
  const [removeCard, setRemoveCard] = useState({})


  useEffect(() => {
    if (
      isEditAvatarPopupOpen ||
      isEditProfilePopupOpen ||
      isAddPlacePopupOpen ||
      selectedCard
    ) {
      function handleCloseEsc(e) {
        if (e.key === 'Escape') {
          closeAllPopups();
        }
      }
      document.addEventListener('keydown', handleCloseEsc);
      return () => {
        document.removeEventListener('keydown', handleCloseEsc);
      };
    }
  }, []);

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
  }

  function handleCardDeletePopup(card) {
    setIsPopupWithConfirmation(!isPopupWithConfirmation);
    setRemoveCard(card)
  }

  function handleCardDelete(e) {
    e.preventDefault()
    // Снова проверяем ../
    const isOwn = removeCard.owner._id === currentUser._id;
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.deleteCard(removeCard._id, !isOwn)
      .then(() => {
        setCards((state) => state.filter((res) => res._id !== removeCard._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.toggleLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(data) {
    api.editUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(data) {
    api.updateAvatar(data)
      .then((profile) => {
        setCurrentUser(profile);
        closeAllPopups();

      })
      .catch((err) => {
        console.log(err);
      })
  }
  function handleAddPlaceSubmit(data) {
    api.addCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsPopupWithConfirmation(false)
    setSelectedCard({ isOpen: false, card: {} })
  }

  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([profile, cards]) => {
        setCurrentUser(profile);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />,
          <Main
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
            onCardDeletePopup={handleCardDeletePopup}
            onCardLike={handleCardLike}
            cards={cards}
          />,

          <Footer />,

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            isClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            isClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            isClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <ImagePopup
            name="place_image-card"
            card={selectedCard}
            isClose={closeAllPopups}
          />

          <WithConfirmationPopup
             isOpen={isPopupWithConfirmation}
             isClose={closeAllPopups}
             onSubmit={handleCardDelete}
          />

          {/* <PopupWithForm
            name="popup_confirmation"
            title="Вы уверены?"
            isOpen={isPopupWithConfirmation}
            isClose={closeAllPopups}
            onSubmit={handleCardDelete}
            buttonText="Да"
          >
          </PopupWithForm> */}

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;