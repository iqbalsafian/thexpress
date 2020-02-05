import { response } from "express";

export function getMostComments(req, res) {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      console.log(response.length)
      return response.length;
    })
}