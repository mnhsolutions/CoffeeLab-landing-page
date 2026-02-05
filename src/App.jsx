import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Success from "./pages/Success";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Layout>
  );
}

export default App;
