import "./ItemModal.css";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";
import {useContext} from 'react';

function ItemModal({ isLoggedIn, activeModal, card, closeActiveModal, onDelete}) {
  const currentUser = useContext(CurrentUserContext);
  let isOwn;

  if (isLoggedIn){
   isOwn = card.owner === currentUser._id;
  }
  else{
    isOwn = false;
  }


  console.log(isOwn);
// Creating a variable which you'll then set in `className` for the delete button
const itemDeleteButtonClassName = (
  `modal__delete ${isOwn ? 'modal__delete-visible' : 'modal__delete-hidden'}`
);
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={closeActiveModal} className="modal__close">
        </button>
        <img src={String(card?.imageUrl)} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-top">
          <h2 className="modal__caption">{card.name}</h2>
          <button className={itemDeleteButtonClassName} onClick={() => onDelete(card?._id)}>Delete Item</button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
