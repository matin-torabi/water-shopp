import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./page/Login";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Register from "./page/Register";
import Home from "./page/Home";

function App() {
  return (
    <div className="bg-[#151515] h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Products />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
