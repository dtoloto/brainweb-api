class PizzaDoughController {

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

export default new PizzaDoughController();
