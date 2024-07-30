import "./ItemModal.css";

function ItemModal({ activeModal, card, closeActiveModal, onDelete}) {
  console.log(closeActiveModal);
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={closeActiveModal} className="modal__close">
        </button>
        <img src={String(card?.imageUrl)} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-top">
          <h2 className="modal__caption">{card.name}</h2>
          <button className="modal__delete" onClick={() => onDelete(card?._id)}>Delete Item</button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
