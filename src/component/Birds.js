import React, { useContext } from "react";
import "./Dogs.css"; // Create a CSS file for styling if needed
import { CartContext } from "../context/CartContext";

const birdProducts = [
  {
    id: 1,
    name: "Bird Seed Mix",
    description: "High-quality seed mix for all bird types.",
    price: " ₹15.00",
    image: "b1.jpg",
  },
  {
    id: 2,
    name: "Bird Cage ",
    description: "Spacious bird cage with perches.",
    price: " ₹120.00",
    image: "b2.jpg",
  },
  {
    id: 3,
    name: "Bird Toy ",
    description: "Interactive toy for birds.",
    price: " ₹8.00",
    image: "b0.jpg",
  },
  {
    id: 4,
    name: "Bird Bath ",
    description: "Easy-to-clean bird bath.",
    price: " ₹25.00",
    image: "b4.jpg",
  },
  {
    id: 5,
    name: "Bird Perch ",
    description: "Comfortable perch for birds.",
    price: " ₹10.00",
    image: "b5.jpg",
  },
  {
    id: 6,
    name: "Bird Feeder ",
    description: "Durable feeder for outdoor birds.",
    price: " ₹18.00",
    image: "b3.jpg",
  },
  {
    id: 7,
    name: "Bird Vitamins ",
    description: "Essential vitamins for bird health.",
    price: " ₹12.00",
    image: "b6.jpg",
  },
  {
    id: 8,
    name: "Bird Nest ",
    description: "Cozy nest for firends who fly.",
    price: " ₹20.00",
    image: "b7.jpg",
  },
  {
    id: 9,
    name: "Bird Treats ",
    description: "Delicious and nutritious treats.",
    price: " ₹5.00",
    image: "b8.jpg",
  },
  {
    id: 10,
    name: "Bird Carrier ",
    description: "Portable carrier for travel.",
    price: " ₹50.00",
    image: "b9.jpg",
  },
];

function Birds() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="birds-page">
      <h1>Bird Products</h1>
      <div className="products">
        {birdProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Birds;
