import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Compornentes/About";
import Footer from "./Compornentes/Footer";
import Home from "./Compornentes/Home";
import Navber from "./Compornentes/Navber";

function App() {
  return (
    <div>
      
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
