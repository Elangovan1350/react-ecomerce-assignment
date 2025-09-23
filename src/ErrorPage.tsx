import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <h1 className="font-bold text-2xl italic">
        Error : Check the url or go to{" "}
        <Link
          to={"/"}
          className="relative text-blue-400 capitalize
    after:content-[''] after:absolute after:left-0 after:bottom-[-3px]
    after:w-0 after:h-[3px] after:bg-blue-400
    after:transition-all after:duration-300
    hover:after:w-full "
        >
          home page
        </Link>
        <button className="bg-amber-600 ">ela</button>
      </h1>
    </div>
  );
};

export default ErrorPage;
