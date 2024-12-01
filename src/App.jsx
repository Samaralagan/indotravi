import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TourSection from "./components/TourSection";
import HowItWorks from "./components/HowItWorks";
import Package from "./components/Package";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100">
      {/* <Navbar /> */}
      <HeroSection />
      <TourSection />
      <HowItWorks />
      <Package />
      <Reviews />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
