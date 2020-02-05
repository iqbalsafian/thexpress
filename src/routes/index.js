import { getMostComments, getPostById } from '../controller';

const routes = (app) => {
  app.route('/most-comments')
    .get(getMostComments);
  
  app.route('/post/:id')
    .get(getPostById);
}

export default routes;