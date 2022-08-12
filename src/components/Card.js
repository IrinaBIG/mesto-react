function Card({ name, link, likes, onCardClicks, card }) {

    function handleClick() {
        onCardClicks(card);
        // console.log(card);        
    }

    return (
        <div className="cards__item" >
            <img className="cards__image"
                src={link}
                alt={name}
                onClick={handleClick}
            />
            <button className="button button__remove"
                type="button">

            </button>
            <div className="cards__date">
                <h2 className="cards__place">{name}</h2>
                <div className="cards__like">
                    <button className="cards__button"
                        type="button"
                        aria-label="Нравится">
                    </button>
                    <h4 className="cards__counter">{likes.length}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;