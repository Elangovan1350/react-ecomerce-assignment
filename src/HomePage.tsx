import HeroSection from "./component/HeroSection";
import ProductHomeSection from "./component/ProductHomeSection";

const HomePage = () => {
  return (
    <div className="2xl:container mx-auto">
      <HeroSection />
      <ProductHomeSection />
    </div>
  );
};

export default HomePage;
