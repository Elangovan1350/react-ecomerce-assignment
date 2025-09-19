import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./component/Navbar";
import ProductPage from "./ProductPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import ScrollToTop from "./component/ScroolToTop";
import SingalCard from "./SingalCard";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="bg-gray-200 overflow-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<ProductPage />} path="/product"></Route>
          <Route element={<SingalCard />} path="/product/:id"></Route>

          <Route element={<ContactPage />} path="/contact"></Route>
          <Route element={<AboutPage />} path="/about"></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
