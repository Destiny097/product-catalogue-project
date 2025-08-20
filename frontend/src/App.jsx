import { Routes, Route } from "react-router-dom";
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import BestSellers from './pages/BestSellers';
import Sustainabilty from './components/Sustainabilty';
import Collection from './components/Collection';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';  
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <BestSellers />
              <Collection />
              <Sustainabilty />
              <AboutUs />
            </>
          } 
        />

        {/* Products Page */}
        <Route path="/product" element={<Product/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
