// import { Link } from "react-router"

import { useLocation } from "react-router";
import { Link } from "react-router";

function Navbar() {
  const pathName = useLocation()
  
  const navItem = [

    {
      title: "Login",
      href: "/register",
    },
    {
      title: "Product",
      href: "/product",
    },    
  ];

  return (
    <div className="w-full z-[1000] sticky left-0 top-0 bg-[#151515] flex justify-center">
      <div className="w-[80%] flex items-center h-[70px] justify-between">
        <Link to="/">
          <span className="text-xl font-bold text-amber-50 select-none">
            Weater
          </span>
        </Link>
        {/* <input
          type="search"
          className="bg-[#3B3B3B] hover:bg-white border-none outline-none hover:text-[#2b2b2b] focus:bg-white duration-300 w-[70%] sm:p-1 lg:p-2 text-[#B0B0B0] rounded-3xl"
          placeholder="search"
        /> */}

        <div className="flex gap-5">
          {navItem.map((item) => (
            <Link
              className="text-white sm:hidden lg:flex font-bold text-sm"
              key={item.title}
              to={item.href}
            >
              <span
                className={
                  item.href === pathName.pathname
                    ? "text-[#9e9e9e]"
                    : "text-white"
                }
              >
                {item.title}
              </span>
            </Link>
          ))}
          {/* <MdOutlineMenu className="lg:hidden text-white text-2xl cursor-pointer" /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
