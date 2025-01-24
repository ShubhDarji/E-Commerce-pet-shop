import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Dogs from './component/Dogs';
import Cart from './component/Cart'; // Import the Cart component
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Cats from './component/Cats';
import Birds from './component/Birds';
import Fish from './component/Fish';
import SmallPets from './component/Smallpets';
import NewArrivals from './component/Newarrival';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/fish" element={<Fish />} />
          <Route path="/small-pets" element={<SmallPets />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
           {/* Define the route for Cart */}
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
