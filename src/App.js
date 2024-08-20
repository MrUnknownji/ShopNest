import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Profile from "./components/Profile";
import logo from "./assets/ShopNest Cropped logo(punchy).jpg";
import NoticeHeader from "./components/NoticeHeader";

function App() {
  return (
    <Router>
      <NoticeHeader />
      <Header logoSrc={logo} altText="ShopNest" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}
export default App;
