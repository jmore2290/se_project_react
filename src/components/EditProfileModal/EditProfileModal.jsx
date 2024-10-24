import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const EditProfileModal = ({ closeActiveModal, onUpdateUser, isOpen }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, avatar });
  };

  useEffect(() => {
    setName("");
    setAvatar("");
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="avatar" className="modal__label">
          Avatar Link{" "}
          <input
            type="text"
            className="modal__input"
            id="avatar"
            placeholder="Avatar Link"
            value={avatar}
            onChange={handleAvatarChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
