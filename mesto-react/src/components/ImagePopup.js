function ImagePopup({ name, title, isOpen, isClose, link, card }) {

    return (
        <div className={`popup popup_type_${name} ${card ? "popup_is-active" : ''}`}>
            <div className="popup__image">
                <button className="popup__close" type="button" onClick={isClose}></button>
                <img className="popup__image-card" src={card.link} />
                <h4 className="popup__title popup__title_place_image">{title}</h4>
            </div>
        </div>
    )
}

export default ImagePopup;