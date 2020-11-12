"use strict";Object.defineProperty(exports, "__esModule", {value: true});class PizzaDoughController {

  async index(req, res) {

    const doughs = [
      {
        name: 'Massa Nova Yorkina',
        price: 1100,
        url: 'https://image.visitenovayork.com.br/wp-content/uploads/2013/12/Best-Pizza-in-New-York.jpeg'
      },
      {
        name: 'Massa Siciliana',
        price: 1300,
        url: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-siciliana-3-730x449.jpg'
      },
      {
        name: 'Massa Napolitana',
        price: 1500,
        url: 'https://conteudo.imguol.com.br/c/entretenimento/ef/2020/03/20/pizza-napolitana-feita-em-casa-1584714870059_v2_1920x1281.jpg'
      },

    ]

    return res.json({ doughs });
  }
}

exports. default = new PizzaDoughController();
