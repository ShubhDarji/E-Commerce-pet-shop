import React, { useContext } from "react";
import "./Dogs.css"; // Create a CSS file for styling if needed
import { CartContext } from "../context/CartContext";

const fishProducts = [
  {
    id: 1,
    name: "Fish Food ",
    description: "Nutrient-rich food for all types of fish.",
    price: "₹20.00",
    image: "path/to/fish-food-a.jpg",
  },
  {
    id: 2,
    name: "Aquarium Filter ",
    description: "High-performance filter for clean water.",
    price: "₹35.00",
    image: "path/to/aquarium-filter-a.jpg",
  },
  {
    id: 3,
    name: "Fish Tank Heater ",
    description: "Reliable heater to maintain optimal water temperature.",
    price: "₹25.00",
    image: "path/to/fish-tank-heater-a.jpg",
  },
  {
    id: 4,
    name: "Aquarium Decorations ",
    description: "Beautiful decorations to enhance your tank's appearance.",
    price: "₹15.00",
    image: "path/to/aquarium-decorations-a.jpg",
  },
  {
    id: 5,
    name: "Fish Tank Gravel ",
    description: "Colorful gravel for tank bottom.",
    price: "₹10.00",
    image: "path/to/fish-tank-gravel-a.jpg",
  },
  {
    id: 6,
    name: "Water Conditioner ",
    description: "Conditioner to keep your tank water safe and clean.",
    price: "₹12.00",
    image: "path/to/water-conditioner-a.jpg",
  },
  {
    id: 7,
    name: "Fish Net ",
    description: "Durable net for easy fish handling.",
    price: "₹8.00",
    image: "path/to/fish-net-a.jpg",
  },
  {
    id: 8,
    name: "Aquarium Lighting ",
    description: "LED lighting for optimal visibility and plant growth.",
    price: "₹30.00",
    image: "path/to/aquarium-lighting-a.jpg",
  },
  {
    id: 9,
    name: "Fish Tank Air Pump ",
    description: "Air pump to ensure proper oxygen levels in the tank.",
    price: "₹18.00",
    image: "path/to/fish-tank-air-pump-a.jpg",
  },
  {
    id: 10,
    name: "Fish Tank Cleaner ",
    description: "Efficient cleaner for maintaining a spotless tank.",
    price: "₹22.00",
    image: "path/to/fish-tank-cleaner-a.jpg",
  },
];
function Fish() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="cats-page">
      <h1>Fish Products</h1>
      <div className="products">
        {fishProducts.map((product) => (
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

export default Fish;
