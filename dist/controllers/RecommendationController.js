"use strict";Object.defineProperty(exports, "__esModule", {value: true});class PizzaSizeController {

  async index(req, res) {

    const options = [
      {
        flavor: {
          name: 'Pizza de Calabresa',
          price: 1900,
          url: 'https://pilotandofogao.com.br/wp-content/uploads/2016/05/Pizza-De-Calabresa.jpg'
        },
        dough: {
          name: 'Massa Nova Yorkina',
          price: 1100,
          url: 'https://image.visitenovayork.com.br/wp-content/uploads/2013/12/Best-Pizza-in-New-York.jpeg'
        },
      },
      {
        flavor: {
          name: 'Pizza de Mussarela',
          price: 1900,
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/06/b2/00/0b/pizza-de-mussarela.jpg'
        },
        dough: {
          name: 'Massa Nova Yorkina',
          price: 1100,
          url: 'https://image.visitenovayork.com.br/wp-content/uploads/2013/12/Best-Pizza-in-New-York.jpeg'
        },
      },
      {
        flavor: {
          name: 'Pizza Portuguesa',
          price: 2500,
          url: 'https://craftlog.com/m/i/1563674=s1280=h960'
        },
        dough: {
          name: 'Massa Siciliana',
          price: 1300,
          url: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-siciliana-3-730x449.jpg'
        },
      },
      {
        flavor: {
          name: 'Pizza Marguerita',
          price: 2100,
          url: 'https://portal-amb-imgs.clubedaana.com.br/2019/04/pizza-margherita-600x600.jpg'
        },
        dough: {
          name: 'Massa Nova Yorkina',
          price: 1100,
          url: 'https://image.visitenovayork.com.br/wp-content/uploads/2013/12/Best-Pizza-in-New-York.jpeg'
        },
      },
      {
        flavor: {
          name: 'Pizza de Rúcula',
          price: 2200,
          url: 'https://craftlog.com/m/i/8297990=s1280=h960'
        },
        dough: {
          name: 'Massa Napolitana',
          price: 1500,
          url: 'https://conteudo.imguol.com.br/c/entretenimento/ef/2020/03/20/pizza-napolitana-feita-em-casa-1584714870059_v2_1920x1281.jpg'
        }
      }
    ]




    const option = options[Math.floor(Math.random() * (4 - 0 + 1)) + 0];

    option.banner = {
      name: `${option.flavor.name} + ${option.dough.name}`,
      price: option.flavor.price + option.dough.price,
      url: option.flavor.url
    }

    option.points = (option.flavor.price + option.dough.price) / 10;

    return res.json({ option });
  }
}

exports. default = new PizzaSizeController();
