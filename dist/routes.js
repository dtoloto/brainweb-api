"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _PizzaFlavorController = require('./controllers/PizzaFlavorController'); var _PizzaFlavorController2 = _interopRequireDefault(_PizzaFlavorController);
var _PizzaSizeController = require('./controllers/PizzaSizeController'); var _PizzaSizeController2 = _interopRequireDefault(_PizzaSizeController);
var _PizzaDoughController = require('./controllers/PizzaDoughController'); var _PizzaDoughController2 = _interopRequireDefault(_PizzaDoughController);
var _RecommendationController = require('./controllers/RecommendationController'); var _RecommendationController2 = _interopRequireDefault(_RecommendationController);
var _CheckoutController = require('./controllers/CheckoutController'); var _CheckoutController2 = _interopRequireDefault(_CheckoutController);

const routes = new (0, _express.Router)();

routes.get('/pizza-flavors', _PizzaFlavorController2.default.index);
routes.get('/pizza-sizes', _PizzaSizeController2.default.index);
routes.get('/pizza-doughs', _PizzaDoughController2.default.index);
routes.get('/recommendation', _RecommendationController2.default.index);
routes.post('/checkout', _CheckoutController2.default.create);

exports. default = routes;
