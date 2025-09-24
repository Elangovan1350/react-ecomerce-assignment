import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState<boolean>(false);
  return (
    <div className="2xl:container mx-auto">
      <section className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center min-h-[10dvh] ">
        <div className="flex justify-between items-center w-full md:w-fit min-h-[10dvh]">
          <NavLink to={"/"} className={"text-orange-500 font-bold text-2xl"}>
            Super Comerce
          </NavLink>
          <div
            className="md:hidden"
            onClick={() => {
              setNavbarActive((pre) => !pre);
            }}
          >
            <Menu />
          </div>
        </div>
        <div
          className={navbarActive ? "block " : "hidden  " + "md:block grow "}
        >
          <ul className="flex flex-col md:flex-row md:justify-end gap-3">
            <NavLink
              to={"/"}
              onClick={() => {
                setNavbarActive((pre) => !pre);
              }}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => {
                setNavbarActive((pre) => !pre);
              }}
              to={"/product"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Product
            </NavLink>
            <NavLink
              to={"/about"}
              onClick={() => {
                setNavbarActive((pre) => !pre);
              }}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              About
            </NavLink>
            <NavLink
              onClick={() => {
                setNavbarActive((pre) => !pre);
              }}
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Contact
            </NavLink>
            <NavLink
              onClick={() => {
                setNavbarActive((pre) => !pre);
              }}
              to={"/addProduct"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }
            >
              Add Product
            </NavLink>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
