import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="2xl:container mx-auto">
      <section className="w-[90%] mx-auto flex justify-between items-center h-[10dvh] ">
        <div>
          <NavLink to={"/"} className={"text-orange-500 font-bold text-2xl"}>
            Super Comerce
          </NavLink>
        </div>
        <div>
          <ul className="flex gap-3">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Product
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
