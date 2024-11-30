import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TourSection from "./components/TourSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100">
      {/* <Navbar /> */}
      <HeroSection />
      <TourSection />
    </div>
  );
}

export default App;
