import { Routes, Route } from "react-router-dom";
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import BestSellers from './pages/BestSellers';
import Sustainabilty from './components/Sustainabilty';
import Collection from './components/Collection';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import './index.css';
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Profile from "./pages/Profile";   
import PrivateRoute from "./components/PrivateRoute";  
import OrderPage from "./pages/OrderPage";
import Sustainability from "./pages/SustainabilityPage";
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

        {/* Other Pages */}
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/sus" element={<Sustainability />} />
        {/* Protected Profile Page */}
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
