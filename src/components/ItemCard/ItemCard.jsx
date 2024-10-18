import "./ItemCard.css";
import {useContext} from 'react';
import {CurrentUserContext} from "../../utils/contexts/CurrentUserContext.jsx";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () =>{
    onCardLike(item);
  }


  return (
    <li className="card">
      <div className="card__name-container">
      <h2 className="card__name">{item.name}</h2>
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
