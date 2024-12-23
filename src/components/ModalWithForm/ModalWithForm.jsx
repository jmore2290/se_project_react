import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  isOpen,
  closeActiveModal,
  onSubmit,
}) {
  return (
    <div className={isOpen ? `modal modal_opened` : `modal_closed`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button onClick={closeActiveModal} className="modal__closer"></button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
