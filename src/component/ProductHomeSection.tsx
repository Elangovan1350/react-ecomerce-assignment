import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import useSWR from "swr";
import { Star } from "lucide-react";
import type { Iproduct } from "./ProductItems";

const url: string = "https://fakestoreapi.com";
const fetcher = (url1: string) => axios.get(url + url1).then((e) => e.data);

const ProductHomeSection = () => {
  //   const [products, setProducts] = useState<Iproduct[]>([]);
  //   const url: string = "https://fakestoreapi.com/products";
  const {
    data,
    isLoading,
    error,
  }: { data: Iproduct[]; isLoading: boolean; error: undefined } = useSWR(
    "/products",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(error, "ello");
  const fillterd = data.filter((e) => e.id <= 6);

  //   const getProducts = async () => {
  //     const res: Iproduct[] = (await axios.get(url)).data;
  //     const fillterd = res.filter((e) => e.id <= 6);
  //     setProducts(fillterd);
  //   };
  //   useEffect(() => {
  //     getProducts();
  //   }, []);

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-wrap gap-10   justify-center">
        {fillterd.map((product: Iproduct) => {
          return (
            <div
              key={product.id}
              className="w-[300px] flex flex-col gap-3 items-center text-center  justify-center px-2.5 py-5  shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.5)] hover:shadow-[5px_5px_10px_3px_rgba(0,_0,_0,_0.5)]"
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
      <div className="flex justify-center p-5">
        <NavLink
          to={"/product"}
          className="text-center font-extrabold text-xl text-white bg-orange-500 px-5 py-2 rounded-2xl "
        >
          Load More...
        </NavLink>
      </div>
    </div>
  );
};

export default ProductHomeSection;
