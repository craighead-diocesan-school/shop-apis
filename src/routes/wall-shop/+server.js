import { json } from '@sveltejs/kit'

export function GET() {
  const menu = {
    products: [
      {
        product: 'Brick wall painted white',
        img: url.href + '-images/white-brick.jpg',
        alt: 'white brick wall',
        price: 14.9,
      },
      {
        product: 'Brick wall painted pink',
        img: url.href + '-images/pink-brick.jpg',
        alt: 'pink brick wall',
        price: 19.9,
      },
      {
        product: 'Unpainted brick wall',
        img: url.href + '-images/unpainted-brick',
        alt: 'unpainted brick wall',
        price: 9.9,
      },
      {
        product: 'Plaster wall painted orange',
        img: url.href + '-images/orange-plaster.jpg',
        alt: 'orange plaster wall',
        price: 11.9,
      },
      {
        product: 'Run-down wall painted yellow',
        img: url.href + '-images/yellow-run-down.jpg',
        alt: 'run-down yellow wall',
        price: 4.9,
      },
      {
        product: 'Run-down wall painted grey',
        img: url.href + '-images/grey-run-down.jpg',
        alt: 'run-down grey wall',
        price: 4.9,
      },
      {
        product: 'Run-down wall painted tan',
        img: url.href + '-images/tan-run-down.jpg',
        alt: 'run-down tan wall',
        price: 4.9,
      },
      {
        product: 'Really rough wall',
        img: url.href + '-images/rough.jpg',
        alt: 'rough wall',
        price: 4.9,
      },
      {
        product: 'Wall with flowers',
        img: url.href + '-images/flowers.jpg',
        alt: 'flower wall',
        price: 24.9,
      },
      {
        product: 'Art-deco wall',
        img: url.href + '-images/art-deco.jpg',
        alt: 'art-deco wall',
        price: 34.9,
      },
    ],
  }

  return json(menu)
}
