const baseUrl = "http://localhost:3001"

function getItems(){
    return fetch(`${baseUrl}/items`).then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
}

function addNewItem({ name, imageUrl, weather }) {
    return fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        weather,
        imageUrl
      }),
    }).then();
  }

export {getItems, addNewItem};