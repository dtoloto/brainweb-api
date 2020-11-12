class PizzaFlavorController {

  async index(req, res) {

    const flavors = [
      {
        name: 'Pizza de Calabresa',
        price: 1900,
        url: 'https://pilotandofogao.com.br/wp-content/uploads/2016/05/Pizza-De-Calabresa.jpg'
      },
      {
        name: 'Pizza de Mussarela',
        price: 1900,
        url: 'https://media-cdn.tripadvisor.com/media/photo-s/06/b2/00/0b/pizza-de-mussarela.jpg'
      },
      {
        name: 'Pizza Portuguesa',
        price: 2500,
        url: 'https://craftlog.com/m/i/1563674=s1280=h960'
      },
      {
        name: 'Pizza Marguerita',
        price: 2100,
        url: 'https://portal-amb-imgs.clubedaana.com.br/2019/04/pizza-margherita-600x600.jpg'
      },
      {
        name: 'Pizza de Rúcula',
        price: 2200,
        url: 'https://craftlog.com/m/i/8297990=s1280=h960'
      },
    ]

    return res.json({ flavors });
  }
}

export default new PizzaFlavorController();
