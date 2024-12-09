export const processServerResponse = (res) => {
  console.log(res.json);
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};


