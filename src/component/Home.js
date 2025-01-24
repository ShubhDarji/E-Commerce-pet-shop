import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="container1"
              src="pikaso_enhance__vivid_2K_Standard_r_c_.png"
              alt="First slide"
            />
          </div>
        </div>
      </div>
      
      <div className="lowbanner">
        <h1>Love Your Pets, Love Our Products!</h1>
        <p>Discover the best for your furry, feathered, or scaly friends.</p>
        <Link to="#" className="btn btn-primary" role="button" aria-disabled="true">Know More</Link>
      </div>

      <section className="featured-categories">
        <h2>Featured Categories</h2>
        <div className="categories">
          <div className="category">
            <img src="little-chihuahua (1).jpg" alt="Dogs" />
            <h3>Dogs</h3>
            <p>Top brands for dog food and treats</p>
            <p>Durable toys and accessories</p>
            <Link to="/dogs" className="btn btn-primary">Buy now</Link>
          </div>
          <div className="category">
            <img src="grey-cat-lying-looking-up.jpg" alt="Cats" />
            <h3>Cats</h3>
            <p>Premium cat food and litter</p>
            <p>Cozy beds and fun toys</p>
            <Link to="/cats" className="btn btn-primary">Buy now</Link>
          </div>
          <div className="category">
            <img src="white-cockatoo.jpg" alt="Birds" />
            <h3>Birds</h3>
            <p>Nutritious seeds and pellets</p>
            <p>Cages and accessories</p>
            <Link to="/birds" className="btn btn-primary">Buy now</Link>
          </div>
          <div className="category">
            <img src="closeup-shot-yellow-cichlidae-cichlid-home-aquarium.jpg" alt="Fish" />
            <h3>Fish</h3>
            <p>Aquarium supplies and decor</p>
            <p>Quality fish food</p>
            <Link to="/fish" className="btn btn-primary">Buy now</Link>
          </div>
          <div className="category">
            <img src="white-rabbit-woman-hands-blurred-interior.jpg" alt="Small Pets" />
            <h3>Small Pets</h3>
            <p>Habitats and bedding</p>
            <p>Toys and nutrition</p>
            <Link to="/small-pets" className="btn btn-primary">Buy now</Link>
          </div>
          <div className="category">
            <img src="beautiful-pet-portrait.jpg" alt="Reptiles" />
            <h3>Reptiles</h3>
            <p>Terrariums and heating lamps</p>
            <p>Healthy reptile food</p>
            <Link to="/reptiles" className="btn btn-primary">Buy now</Link>
          </div>
        </div>
      </section>

      <section className="special-offers">
        <h2>Special Offers</h2>
        <p>Summer Sale! Up to 50% off on selected items.</p>
        <p>Buy One Get One Free on all dog toys.</p>
        <p>Free Shipping on orders over $50.</p>
      </section>

      <section className="customer-testimonials">
        <h2>Customer Testimonials</h2>
        <blockquote>
          "Amazing quality products and fast shipping! My dog loves his new bed!" - Sarah K.
        </blockquote>
        <blockquote>
          "Great variety of fish supplies. My aquarium looks stunning!" - Michael L.
        </blockquote>
      </section>

      <section className="newsletter-signup">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter.</p>
        <input type="email" placeholder="Email Address" />
        <button>Subscribe</button>
      </section>
    </div>
  );
}

export default Home;
