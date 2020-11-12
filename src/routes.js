import { Router } from 'express';

import PizzaFlavorController from './controllers/PizzaFlavorController';
import PizzaSizeController from './controllers/PizzaSizeController';
import PizzaDoughController from './controllers/PizzaDoughController';
import RecommendationController from './controllers/RecommendationController';
import CheckoutController from './controllers/CheckoutController';

const routes = new Router();

routes.get('/pizza-flavors', PizzaFlavorController.index);
routes.get('/pizza-sizes', PizzaSizeController.index);
routes.get('/pizza-doughs', PizzaDoughController.index);
routes.get('/recommendation', RecommendationController.index);
routes.post('/checkout', CheckoutController.create);

export default routes;
