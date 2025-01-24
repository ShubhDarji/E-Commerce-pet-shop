import React, { useContext } from "react";
import "./Dogs.css"; // Create a CSS file for styling if needed
import { CartContext } from "../context/CartContext";

const catProducts = [
  {
    id: 1,
    name: "Cat Food  ",
    description: "Nutritious cat food for all breeds.",
    price: " ₹200.00",
    image: "c1.jpg",
  },
  {
    id: 2,
    name: "Cat Toy  ",
    description: "Interactive toy for cats to play with.",
    price: " ₹120.00",
    image: "c2.jpg",
  },
  {
    id: 3,
    name: "Cat Bed  ",
    description: "Comfortable bed for cats.",
    price: " ₹755.00",
    image: "c3.jpg",
  },
  {
    id: 4,
    name: "Cat Scratcher  ",
    description: "Durable cat scratcher for fun.",
    price: " ₹200.00",
    image: "c4.jpg",
  },
  {
    id: 5,
    name: "Cat Collar  ",
    description: " Adjustable collar with bell.",
    price: " ₹120.00",
    image: "c5.jpg",
  },
  {
    id: 6,
    name: "Cat Litter  ",
    description: " Odor-control  for cat  litter.",
    price: " ₹900.00",
    image: "c6.jpg",
  },
  {
    id: 7,
    name: "Cat Treats  ",
    description: "Delicious and healthy treats.",
    price: " ₹455.00",
    image: "c7.jpg",
  },
  {
    id: 8,
    name: "Cat Brush  ",
    description: "Brush for a shiny coat of your furry partner.",
    price: " ₹212.00",
    image: "c8.jpg",
  },
  {
    id: 9,
    name: "Cat Bowl  ",
    description: "Stainless steel bowl to feed .",
    price: " ₹354.00",
    image: "c9.jpg",
  },
  {
    id: 10,
    name: "Cat Carrier  ",
    description: "Portable carrier for travel.",
    price: "₹655.00",
    image: "c0.jpg",
  },
];

function Cats() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="cats-page">
      <h1>Cat Products</h1>
      <div className="products">
        {catProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}> Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cats;
