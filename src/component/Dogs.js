import React, { useContext } from 'react';
import "./Dogs.css";
import { CartContext } from '../context/CartContext';

const dogProducts = [
  {
    id: 1,
    name: "Dog Food  ",
    description: "High-quality dog food for all breeds.",
    price: "$25.00",
    image: "/01.jpeg",
  },
  {
    id: 2,
    name: "Dog Toy  ",
    description: "Durable chew toy for dogs.",
    price: "$10.00",
    image: "/02.jpeg",
  },
  {
    id: 3,
    name: "Dog Bed  ",
    description: "Comfortable dog bed for all sizes.",
    price: "$40.00",
    image: "/03.jpeg",
  },
  {
    id: 4,
    name: "Dog Leash  ",
    description: "Strong and durable leash.",
    price: "$15.00",
    image: "/04.jpg",
  },
  {
    id: 5,
    name: "Dog Collar  ",
    description: " djustable collar with safety lock.",
    price: "$8.00",
    image: "/05.jpg",
  },
  {
    id: 6,
    name: "Dog Shampoo  ",
    description: "Gentle shampoo for sensitive skin.",
    price: "$12.00",
    image: "/06.jpg",
  },
  {
    id: 7,
    name: "Dog Treats ",
    description: "A very healthy and tasty treats.",
    price: "$5.00",
    image: "/image.png",
  },
  {
    id: 8,
    name: "Dog Brush ",
    description: "Keep your dog's coat shiny.",
    price: "$7.00",
    image: "08.jpg",
  },
  {
    id: 9,
    name: "Dog Bowl ",
    description: "Stainless steel bowl.",
    price: "$10.00",
    image: "09.jpg",
  },
  {
    id: 10,
    name: "Dog Jacket",
    description: "Warm jacket for cold weather.",
    price: "$30.00",
    image: "10.jpg",
  },
];

function Dogs() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="dogs-page">
      <h1>Dog Products</h1>
      <div className="products">
        {dogProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)} className="btn btn-primary">
               Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dogs;
