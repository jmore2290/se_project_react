import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext.jsx";

const EditProfileModal = ({ closeActiveModal, onUpdateUser, isOpen}) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };


  const [avatar, setAvatar] = useState("");

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  console.log(isOpen);

  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <label className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="profile-name"
            placeholder="Name"
            value={name || ''}
            onChange={handleNameChange}
          />
        </label>
        <label className="modal__label">
          Avatar Link{" "}
          <input
            type="text"
            className="modal__input"
            id="profile-avatar"
            placeholder="Avatar Link"
            value={avatar || ''}
            onChange={handleAvatarChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
