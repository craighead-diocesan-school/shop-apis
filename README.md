# Shop APIs

A collection of API end points for learning to fetch remote data.

## Wall Shop

Introduction to APIs. A simple shop that sells walls with a name, price, image, and alt text.

**Structure:**

```javascript
{
  products: [
    {
      product: [String],
      img: [String],
      alt: [String],
      price: [Integer],
    },
    ...
  ]
}
```

## Restaurant

More advanced data structure. A restaurant the sells breakfast, dinner, and dessert.

**Structure:**

```javascript
{
  breakfast: [
    {
      item: [String],
      description: [String],
      price: [Integer],
      img: [String],
      alt: [String],
    },
    ...
  ],
  dinner: [
    {
      item: [String],
      description: [String],
      price: [Integer],
      img: [String],
      alt: [String],
    },
    ...
  ],
  dessert: [
    {
      item: [String],
      description: [String],
      price: [Integer],
      img: [String],
      alt: [String],
    },
    ...
  ]
}
```