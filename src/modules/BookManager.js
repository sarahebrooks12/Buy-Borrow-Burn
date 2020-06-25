import APIKey from "./APIKey.js";
import { RatingIcon } from "semantic-ui-react";
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
  getAllBooks() {
    return fetch(`${remoteURL}/books/`).then((result) =>
      result.json()
    );
  },
  postBook(newBook) {
    return fetch(`${remoteURL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    }).then((data) => data.json());
  },
  deleteBook(id) {
    return fetch(`${remoteURL}/books/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  favoriteBook(id) {
    return fetch(`${remoteURL}/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"available": false}),
    }).then((data) => data.json());
  },
  rateBook(rating) {
    return fetch(`${remoteURL}/books`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"ratingId": rating}),
    }).then((data) => data.json());
  },
  updateBook(editedBook) {
    return fetch(`${remoteURL}/books/${editedBook.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedBook)
    }).then(data => data.json());
  }
};
