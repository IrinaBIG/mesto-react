import { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState('Жак');
    const [userDescription, setUserDescription] = useState('Исследователь');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUser(), api.getCards()])
            .then(([profile, cards]) => {
                setUserName(profile.name); // name, about, avatar - так названы данные на сервере
                setUserDescription(profile.about);
                setUserAvatar(profile.avatar);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="content">
            <section className="profile">
                <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
                <div className="profile__item">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__button-edit" onClick={onEditProfile} type="button" aria-label="Редактировать"></button>
                </div>
                <p className="profile__activity">{userDescription}</p>
                <button className="profile__button-add" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
            </section>

            <section className="cards">
                {cards.map((card) => {
                    return (
                        <Card
                            key={card._id}
                            name={card.name}
                            link={card.link}
                            likes={card.likes}
                            _id={card._id}
                            onClick={onCardClick}
                        />
                    )
                })}
            </section>
        </div>
    );
}

export default Main;