import { processServerResponse } from "./processServResponse";
const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.blind.ohbah.com"
  : "http://localhost:3001";


function signUpUser({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      avatar,
      email,
      password,
    }),
  }).then(processServerResponse);
}

const signInUser = async (email, password) => {
  return await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(processServerResponse);
};

const getUser = async () => {
  console.log(baseUrl);
  return await fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then(processServerResponse);
};

const updateUser = (name, avatar) => {
  console.log(localStorage.getItem("token"));
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(processServerResponse);
};

/*
export const updateUser = async (name, avatar, token) => {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
};
*/

export { signUpUser, signInUser, getUser, updateUser };
