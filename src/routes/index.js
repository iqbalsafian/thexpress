import { getMostComments } from '../controller';

const routes = (app) => {
  app.route('/most-comments')
    .get(getMostComments);
}

export default routes;