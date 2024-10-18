import { processServerResponse} from "./processServResponse";
const baseUrl = "http://localhost:3001"

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
        password
      }),
    }).then(processServerResponse);
  }

  /*
  function signInUser({email, password}){
    return fetch(`${baseUrl}/signin`, {
       method: "POST",
       headers: {
        "Content-type": "application/json",
       },
       body: JSON.stringify({email, password}),
    });
    }
    */

  const signInUser = async (email, password) => {
      return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((res) => {
        if (res) {
          console.log(res.token);
          localStorage.setItem("token", res.token);
          return res;
        }
      });
    };

 

   const getUser = () => {
        return fetch(`${baseUrl}/users/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then((res) => {
            if (res) {
              localStorage.setItem("token", res.token);
              return res;
            }
          });
      };

      const updateUser = (name, avatar) =>{
        return fetch(`${baseUrl}/users/me`, {
          method: "PATCH",
          headers: {
           "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({name, avatar}),
       }).then((data) => {
        if (data) {
          return data;
        }
      });
      }
  

    export {signUpUser, signInUser, getUser, updateUser}
