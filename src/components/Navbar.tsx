// import { Link } from "react-router"

import { Link } from "react-router";

function Navbar() {
  const navItem = [
    {
      title: "Log in",
      href: "/login",
    },
    {
      title: "Register",
      href: "/register",
    },
    {
      title: "Product",
      href: "/product",
    },    
  ];

  const pathName = "/product";

  return (
    <div className="w-full bg-[#151515] flex justify-center">
      <div className="z-[1000] w-[80%] flex items-center h-[70px] justify-between">
        <Link to="/">
          <span className="text-xl font-bold text-amber-50 select-none">
            W E A T E R
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
                  item.href === pathName
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
