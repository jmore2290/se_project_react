import "./ItemModal.css";

function ItemModal({ activeModal, card, closeActiveModal }) {
  console.log(card?.link);
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={closeActiveModal} className="modal__close">
        </button>
        <img src={String(card?.link)} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
