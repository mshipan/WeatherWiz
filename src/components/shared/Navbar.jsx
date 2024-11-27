import { Link } from "react-router";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = (
    <>
      <li className="hover:underline underline-offset-4 decoration-2 transition-all ease-in duration-500">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 transition-all ease-in duration-500">
        <Link to="/locations">Locations</Link>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 transition-all ease-in duration-500">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-transparent flex flex-col gap-6 w-[95%] py-5 text-[#2c3e50] fixed top-0 left-0 right-0 mx-auto">
      <div className="flex flex-row items-center justify-between ">
        <div className="text-[#f5f5f5] font-merienda text-2xl font-medium">
          <Link to="/">WeatherWiz</Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex flex-row items-center gap-20">{navItems}</ul>
        </nav>

        <div className="block md:hidden">
          {open ? (
            <IoMdClose
              onClick={() => setOpen(!open)}
              className="text-2xl text-white cursor-pointer"
            />
          ) : (
            <IoMdMenu
              onClick={() => setOpen(!open)}
              className="text-2xl text-white cursor-pointer"
            />
          )}
        </div>
      </div>
      {open && (
        <nav className="relative block md:hidden bg-white/20 backdrop-blur-md shadow-lg transition-all ease-in-out duration-500">
          <div className="absolute top-[-10px] right-1 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white/20"></div>
          <ul className="flex flex-col items-center gap-6 text-black py-4">
            {navItems}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
