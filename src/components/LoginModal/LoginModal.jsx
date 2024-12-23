import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import "./LoginModal.css";

const LoginModal = ({ closeActiveModal, onLogin, isOpen, logToRegister}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <label className="modal__label">
          Email{" "}
          <input
            type="text"
            className="modal__input"
            id="login-email"
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
            id="login-password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </fieldset>
      <p className="modal__register-sidebar">
        <button className="modal__register-link" type="button" onClick={logToRegister}>
          or Sign Up
        </button>
      </p>
    </ModalWithForm>
  );
};

export default LoginModal;
