import fetch from 'node-fetch';
import { response } from 'express';

export function getMostComments(req, res) {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      if (response.status != 200) {
        console.log('Issue')
        return;
      }

      let maxNumber = 0;

      for (let i = 1; i <= 100; i++) {
        let basicFilter = data.filter(d => d.postId === i);
        
        if (maxNumber < basicFilter.length) {
          maxNumber = basicFilter.length;
        }
      }

      console.log(maxNumber);

      maxNumber.json();
    })
    .catch((err)=>{
      return;
    })
}

export function getPostById(req, res) {
  fetch('https://jsonplaceholder.typicode.com/posts/' + req.params.id)
    .then(data=> {
      res.send(data);
    })
}

export function getAllPosts(req, res) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
      res.json(data);
    })
}