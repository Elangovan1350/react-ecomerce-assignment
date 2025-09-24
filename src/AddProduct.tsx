import { useForm } from "react-hook-form";
import { type } from "arktype";
import { toast, Toaster } from "sonner";

const product = type({
  title: "string",
  price: "number<0",
});
type Product = typeof product.infer;

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const onSubmit = (data: Product) => {
    const out = product(data);
    if (out instanceof type.errors) {
      console.error("Validation failed:", out.summary);
      toast.error("Validation failed: " + out.summary);
      return;
    }
    console.log("Valid product:", out);
    toast.success(
      "Product valided successfully!" + "  " + data.title + "  " + data.price
    );
  };

  return (
    <div className="2xl:container 2xl:mx-auto my-10 h-[70vh]">
      <div className="w-[80%] mx-auto flex items-center justify-center h-full  p-4">
        <Toaster position="top-center" closeButton richColors />
        <div className=" shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Add New Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="title">
                Product Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter product title"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="price">
                Product Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Enter product price"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.price ? "border-red-500" : "border-gray-300"
                }`}
                {...register("price", {
                  valueAsNumber: true,
                  required: "Price is required",
                })}
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
