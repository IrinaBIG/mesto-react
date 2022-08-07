import { useEffect, useState } from 'react';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onDelCard }) {

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
                { cards.map((card) => {
                    return (
                <div className="cards__item">
                    <img className="cards__image" src={card.link} />
                    <button type="button" className="button button__remove" onClick={onDelCard}></button>
                    <div className="cards__date">
                        <h2 className="cards__place">{card.name}</h2>
                        <div className="cards__like">
                            <button className="cards__button" type="button" aria-label="Нравится"></button>
                            <h4 className="cards__counter">{card.likes.length}</h4>
                        </div>
                    </div>
                </div>)
                   
                })}
            </section>
        </div>
    );
}

export default Main;