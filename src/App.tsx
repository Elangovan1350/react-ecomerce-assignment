import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./component/Navbar";
import ProductPage from "./ProductPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import ScrollToTop from "./component/ScroolToTop";
import SingalCard from "./SingalCard";
import Footer from "./component/Footer";
import PageTransition from "./component/PageTransition";
import axios from "axios";
import useSWR from "swr";
import { useStoreProducts, type Iproduct } from "./store/ProductStore";
import { useEffect } from "react";

const url: string = "https://fakestoreapi.com";
const fetcher = (url1: string) => axios.get(url + url1).then((e) => e.data);
const App = () => {
  const location = useLocation();

  const { data } = useSWR<Iproduct[]>("/products", fetcher);
  const { getProducts } = useStoreProducts();
  useEffect(() => {
    if (data) getProducts(data);
  }, [data, getProducts]);
  return (
    <div className="bg-gray-200 overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/product"
          element={
            <PageTransition>
              <ProductPage />
            </PageTransition>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PageTransition>
              <SingalCard />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
