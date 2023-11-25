import logo from './logo.svg';
import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import {ShopContextProvider} from './pages/ShopContextProvider.jsx';
import Cart from './pages/cart.jsx';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
