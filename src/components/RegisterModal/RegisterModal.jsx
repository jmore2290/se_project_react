import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import "./RegisterModal.css";

const RegisterModal = ({ closeActiveModal, onRegister, isOpen, registerToLog}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  console.log(isOpen);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name, avatar });
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setAvatar("");
    setName("");
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email{" "}
        <input
          type="text"
          className="modal__input"
          id="register-email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__label">
        Password{" "}
        <input
          type="text"
          className="modal__input"
          id="register-password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="register-name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL{" "}
        <input
          type="text"
          className="modal__input"
          id="register-avatar"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
      <p className="modal__signup-sidebar">
        <button className="modal__signup-link" type="button" onClick={registerToLog}>
          or Log In
        </button>
      </p>
    </ModalWithForm>
  );
};

export default RegisterModal;
