const remoteURL = "http://localhost:8088";

export default {
  getSearch(userSearch, googleBooksKey) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${googleBooksKey}`
    ).then((result) => result.json());
  },
  getAll(id) {
    return fetch (`${remoteURL}/myBookshelf/${id}`).then(result => result.json())
  }
};
