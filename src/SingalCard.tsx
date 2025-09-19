import axios from "axios";
import { useParams } from "react-router-dom";
import type { Iproduct } from "./component/ProductItems";
import useSWR from "swr";

const url: string = "https://fakestoreapi.com";
const fetcher = (url1: string) => axios.get(url + url1).then((e) => e.data);

const SingalCard = () => {
  const { id } = useParams();
  const {
    data,
    isLoading,
    error,
  }: { data: Iproduct; isLoading: boolean; error: undefined } = useSWR(
    "/products/" + id,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data);

  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg py-5 my-5">
      <div className="relative">
        <img
          className=" h-[50vh] mx-auto"
          src={data.image}
          alt="Product Image"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{data.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{data.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${data.price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingalCard;
