import { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
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
                {cards.map((item) => {
                    return (
                        <Card
                            card={item}
                            key={item._id}
                            name={item.name}
                            link={item.link} // Roland, не совсем поняла, что тут надо переделать. удаляю строчки (43-46) - удаляются данные с экрана. оставлю так. уточню в слаке - доделаю. подсказку ж просить нельзя у ревьюера )
                            _id={item._id}
                            likes={item.likes}
                            onCardClicks={onCardClick}
                        />
                    )
                })}
            </section>
        </div>
    );
}


export default Main;