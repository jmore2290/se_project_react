import { processServerResponse} from "./processServResponse";
const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then(processServerResponse);
}

function addNewItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(processServerResponse);
}

function deleteItem(id){
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(processServerResponse);
}

export { getItems, addNewItem, deleteItem };
