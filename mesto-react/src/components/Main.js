import { useEffect, useState } from 'react';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

    const [userName, setUserName] = useState('Жак');
    const [userDescription, setUserDescription] = useState('Исследователь');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        Promise.all([api.getUser(), api.getCards()])
        .then(([profile, cards]) => {
            setUserName(profile.name); // name, about, avatar - так названы данные на сервере
            setUserDescription(profile.about);
            setUserAvatar(profile.avatar);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    
    

    return (
        <div className="content">
            <section className="profile">
                <div className="profile__avatar" onClick={onEditAvatar} style={ { backgroundImage: `url(${userAvatar})` } }></div>
                <div className="profile__item">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__button-edit" onClick={onEditProfile} type="button" aria-label="Редактировать"></button>
                </div>
                <p className="profile__activity">{userDescription}</p>
                <button className="profile__button-add" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
            </section>
            <section className="cards">
            </section>
        </div>
    );
}

export default Main;