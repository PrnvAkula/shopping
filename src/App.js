import logo from './logo.svg';
import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import Shop from './pages/Shop.jsx';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router> */}
      <Shop/>
    </div>
  );
}

export default App;
