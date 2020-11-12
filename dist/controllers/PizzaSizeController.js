"use strict";Object.defineProperty(exports, "__esModule", {value: true});class PizzaSizeController {

  async index(req, res) {

    const sizes = [
      {
        name: 'Pizza Pequena - 4 Pedaços ',
        price: 1900,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDzaiOJHklegcfkRxO0BVSO9kwzeZu8C_2Hw&usqp=CAU'
      },
      {
        name: 'Pizza Média - 8 Pedaços',
        price: 1000,
        url: 'https://www.diromadelivery.com.br/assets/imagens/pizza-tamanho-8.png'
      },
      {
        name: 'Pizza Grande - 12 Pedaços',
        price: 1000,
        url: 'https://pizzariaraius.com.br/wp-content/uploads/2016/01/12-fatias-260x240.png'
      },

    ]

    return res.json({ sizes });
  }
}

exports. default = new PizzaSizeController();
