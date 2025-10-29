import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./page/Login";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Register from "./page/Register";
import Home from "./page/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Products />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
