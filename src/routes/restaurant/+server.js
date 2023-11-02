import { json } from '@sveltejs/kit'

export function GET({ url }) {
  const menu = {
    breakfast: [
      {
        item: 'Pancakes',
        description: 'Fluffy buttermilk pancakes.',
        price: 9,
        img: url.href + '-images/breakfast/pancakes.jpg',
        alt: '',
      },
      {
        item: 'French Toast',
        description: 'Eggy toast fried with butter.',
        price: 9,
        img: url.href + '-images/breakfast/french-toast.jpg',
        alt: '',
      },
      {
        item: 'Eggs and Avo on Toast',
        description: 'A classic combo on crunchy rye.',
        price: 11,
        img: url.href + '-images/breakfast/avo-egg-toast.jpg',
        alt: '',
      },
    ],
    dinner: [
      {
        item: 'Vegetable Platter',
        description: 'A selection of vegetables, enough to share.',
        price: 7,
        img: url.href + '-images/dinner/vege-platter.jpg',
        alt: '',
      },
      {
        item: 'Salad',
        description: 'A light and delicious green salad.',
        price: 7,
        img: url.href + '-images/dinner/salad.jpg',
        alt: '',
      },
      {
        item: 'Tacos',
        description: 'Zesty chickpea tacos, vegetarian friendly.',
        price: 9,
        img: url.href + '-images/dinner/tacos.jpg',
        alt: '',
      },
      {
        item: 'Meatballs',
        description: 'Rich, savoury pan-fried meatballs.',
        price: 9,
        img: url.href + '-images/dinner/meatballs.jpg',
        alt: '',
      },
      {
        item: 'Fish',
        description: 'Pan-fried catch of the day, ask the chef. ',
        price: 9,
        img: url.href + '-images/dinner/fish.jpg',
        alt: '',
      },
      {
        item: 'Pizza',
        description: 'Shredded chicken and coriander.',
        price: 12,
        img: url.href + '-images/dinner/pizza.jpg',
        alt: '',
      },
      {
        item: 'Chicken Burger',
        description: 'Epic fried chicken with kimchi.',
        price: 12,
        img: url.href + '-images/dinner/burger.jpg',
        alt: '',
      },
    ],
    dessert: [
      {
        item: 'Frozen Yoghurt',
        description: 'Cold boysenberry on the stick.',
        price: 7,
        img: url.href + '-images/desserts/frozen-yoghurt.jpg',
        alt: '',
      },
      {
        item: 'Cake',
        description: 'Unmissable raspberry and cream sponge.',
        price: 7,
        img: url.href + '-images/desserts/cake.jpg',
        alt: '',
      },
    ],
  }
  
  let response = json(menu)
  response.headers.set('Access-Control-Allow-Origin', '*')
  return response
}
