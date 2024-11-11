import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext.jsx";

function ItemCard({ isLoggedIn, item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  let isLiked;

  if (isLoggedIn) {
    isLiked = item.likes?.some((userId) => userId === currentUser._id);
  } else {
    isLiked = false;
  }

  const likeButtonClass = `${isLiked ? "card__liked" : "card__notliked"}`;

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    console.log(item._id);
    onCardLike(item._id, isLiked);
  };

  return (
    <li className="card">
      <div className="card__name-container">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn ? (
          <button className={likeButtonClass} onClick={handleLike}></button>
        ) : (
          <></>
        )}
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
