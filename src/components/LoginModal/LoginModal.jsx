import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <label htmlFor="email" className="modal__label">
          Email{" "}
          <input
            type="text"
            className="modal__input"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="password" className="modal__label">
          Password{" "}
          <input
            type="text"
            className="modal__input"
            id="password"
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
