import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useStoreProducts } from "../store/ProductStore";

const ProductItems = () => {
  const { products } = useStoreProducts();
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-gray-600 text-lg">Loading products details...</p>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto py-5">
      <h1 className="text-3xl font-bold mb-5">Products:</h1>

      <div className="flex flex-wrap gap-10   justify-center">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="w-[300px] flex flex-col gap-3 items-center text-center  justify-center px-2.5 py-5   shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.5)] hover:shadow-[5px_5px_10px_3px_rgba(0,_0,_0,_0.5)]"
            >
              <img
                className="h-[100px] w-[100px]"
                src={product.image}
                alt={product.title}
              />
              <h1 className="text-lg font-semibold">{product.title}</h1>
              <div className="flex justify-between w-[80%]">
                <p className="font-medium">
                  ${product.price}{" "}
                  <span className="line-through font-normal">
                    {(product.price + 10).toFixed(2)}
                  </span>
                </p>
                <p className="bg-yellow-400 px-2 rounded-sm flex  items-center gap-1">
                  <span> {product.rating.rate}</span>

                  <Star size={16} />
                </p>
              </div>
              <Link
                to={"/product/" + product.id}
                className="bg-red-600 font-semibold text-xl w-[80%] py-2 rounded-2xl text-white"
              >
                More Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductItems;
