import React, { useContext } from 'react';
import "./Newarrival.css";
import { CartContext } from '../context/CartContext';


const newArrivals = [
    { id: 1, name: 'Premium Dog Food', description: 'High-quality dog food.', price: '$20.00', img: 'path/to/dog-food.jpg' },
    { id: 2, name: 'Deluxe Dog Bed', description: 'Comfortable dog bed.', price: '$50.00', img: 'path/to/dog-bed.jpg' },
    { id: 3, name: 'Cat Litter Box', description: 'Easy to clean.', price: '$25.00', img: 'path/to/cat-litter-box.jpg' },
    { id: 4, name: 'Bird Cage', description: 'Spacious bird cage.', price: '$70.00', img: 'path/to/bird-cage.jpg' },
    { id: 5, name: 'Fish Tank', description: 'Stylish fish tank.', price: '$100.00', img: 'path/to/fish-tank.jpg' },
    { id: 6, name: 'Hamster Wheel', description: 'Durable hamster wheel.', price: '$15.00', img: 'path/to/hamster-wheel.jpg' },
    { id: 7, name: 'Rabbit Hutch', description: 'Spacious rabbit hutch.', price: '$80.00', img: 'path/to/rabbit-hutch.jpg' },
    { id: 8, name: 'Reptile Terrarium', description: 'Perfect for reptiles.', price: '$120.00', img: 'path/to/reptile-terrarium.jpg' },
    { id: 9, name: 'Pet Carrier', description: 'Convenient pet carrier.', price: '$40.00', img: 'path/to/pet-carrier.jpg' },
    { id: 10, name: 'Automatic Pet Feeder', description: 'Feeds your pet automatically.', price: '$60.00', img: 'path/to/automatic-feeder.jpg' },
];

function NewArrivals() {
    const { addToCart, cart } = useContext(CartContext);


    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} has been added to your cart.`);
    };

    const handleBuyNow = (product) => {
        addToCart(product);
        const proceedToCart = window.confirm(`${product.name} has been added to your cart. Do you want to visit the cart?`);
        if (proceedToCart) {
           
        }
    };

    return (
        <div className="new-arrivals">
            <h2>New Arrivals - 50% Off</h2>
            <div className="products">
                {newArrivals.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.img} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Original Price: {product.price}</p>
                        <p>Sale Price: ${(parseFloat(product.price.slice(1)) / 2).toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                            Add to Cart
                        </button>
                        <button onClick={() => handleBuyNow(product)} className="btn btn-secondary">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewArrivals;
