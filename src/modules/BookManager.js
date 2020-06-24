import APIKey from "./APIKey.js";
const remoteURL = "http://localhost:8088";

//search is not returning expected results might need more detailed search option from browse page
export default {
  getGeneralSearch(userSearch) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&orderBy=relevance&maxResults=40&key=${APIKey.googleBooksKey}`
    ).then((result) => result.json());
  },
  getTitleSearch(userSearch) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${userSearch}&orderBy=relevance&key=${APIKey.googleBooksKey}``http:`
    ).then((result) => result.json());
  },
  getAuthorSearch(userSearch) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${userSearch}&orderBy=relevance&key=${APIKey.googleBooksKey}`
    ).then((result) => result.json());
  },
  getRatings(){
    return fetch(`${remoteURL}/ratings`).then((result) =>
    result.json()
  )
  },
  getAll(id) {
    return fetch(`${remoteURL}/myBookshelf/${id}`).then((result) =>
      result.json()
    );
  },
};
