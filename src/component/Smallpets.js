import React, { useContext } from "react";
import "./Dogs.css"; // Create a CSS file for styling if needed
import { CartContext } from "../context/CartContext";

const smallPetProducts = [
    {
      id: 1,
      name: "Hamster Food A",
      description: "Nutritious food for hamsters.",
      price: "$15.00",
      image: "path/to/hamster-food-a.jpg",
    },
    {
      id: 2,
      name: "Guinea Pig Cage A",
      description: "Spacious cage for guinea pigs with multiple levels.",
      price: "$60.00",
      image: "path/to/guinea-pig-cage-a.jpg",
    },
    {
      id: 3,
      name: "Rabbit Toy A",
      description: "Interactive toy for rabbits to keep them active.",
      price: "$12.00",
      image: "path/to/rabbit-toy-a.jpg",
    },
    {
      id: 4,
      name: "Ferret Hammock A",
      description: "Cozy hammock for ferrets to relax in.",
      price: "$20.00",
      image: "path/to/ferret-hammock-a.jpg",
    },
    {
      id: 5,
      name: "Chinchilla Dust Bath A",
      description: "Dust bath for chinchillas to keep their fur clean.",
      price: "$8.00",
      image: "path/to/chinchilla-dust-bath-a.jpg",
    },
    {
      id: 6,
      name: "Small Pet Carrier A",
      description: "Portable carrier for small pets.",
      price: "$25.00",
      image: "path/to/small-pet-carrier-a.jpg",
    },
    {
      id: 7,
      name: "Gerbil Wheel A",
      description: "Exercise wheel for gerbils to run on.",
      price: "$10.00",
      image: "path/to/gerbil-wheel-a.jpg",
    },
    {
      id: 8,
      name: "Hedgehog Food A",
      description: "Specially formulated food for hedgehogs.",
      price: "$18.00",
      image: "path/to/hedgehog-food-a.jpg",
    },
    {
      id: 9,
      name: "Hamster Bedding A",
      description: "Soft bedding material for hamsters.",
      price: "$7.00",
      image: "path/to/hamster-bedding-a.jpg",
    },
    {
      id: 10,
      name: "Small Pet Water Bottle A",
      description: "Leak-proof water bottle for small pets.",
      price: "$9.00",
      image: "path/to/small-pet-water-bottle-a.jpg",
    },
  ];
function SmallPets() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="small-pet-page">
      <h1>Fish Products</h1>
      <div className="products">
        {smallPetProducts.map((product) => (
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

export default SmallPets;
