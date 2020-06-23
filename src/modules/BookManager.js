import APIKey from "./APIKey.js";
const remoteURL = "http://localhost:8088";

export default {
  getSearch(userSearch) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${APIKey.googleBooksKey}`
    ).then((result) => result.json());
  },
  getAll(id) {
    return fetch(`${remoteURL}/myBookshelf/${id}`).then((result) =>
      result.json()
    );
  },
};
