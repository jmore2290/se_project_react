import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  console.log(item);
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="card">
      <div className="card__name-container">
      <h2 className="card__name">{item.name}</h2>
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
