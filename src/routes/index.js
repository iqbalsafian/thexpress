import { getMostComments, getPostById, getAllPosts, searchComments } from '../controller';

const routes = (app) => {
  app.route('/most-comments')
    .get(getMostComments);
  
  app.route('/posts/:id')
    .get(getPostById);
  
  app.route('/posts')
    .get(getAllPosts);

  app.route('/search/text')
    .get(searchComments)
}

export default routes;