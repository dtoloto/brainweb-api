"use strict";Object.defineProperty(exports, "__esModule", {value: true});class PizzaDoughController {

  async create(req, res) {

    const { isRecommended } = req.body;

    const order = {
      status: 'preparing'
    }

    if (isRecommended) {
      order.points = (req.body.flavor.price + req.body.dough.price) / 10;
    }

    return res.json({ order });
  }
}

exports. default = new PizzaDoughController();
