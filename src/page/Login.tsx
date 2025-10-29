import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const images = [
    "https://img.myshopline.com/image/store/1705286183817/Marvel-s-Spider-Man-Game-of-the-Year-Edition-Playstation-41_1445x.jpeg?w=1500&h=844&q=80",
    "https://gaming-cdn.com/images/products/2462/orig/grand-theft-auto-vi-pc-rockstar-cover.jpg?v=1759241568",
    "/img-2.jpg",
    "/img-3.jpg",
    "/img-4.jpg",
    "/img-5.jpg",
  ];

  const [bg] = useState(() => images[Math.floor(Math.random() * images.length)]);

  return (
    <div className="relative w-full h-[92.6vh] overflow-hidden">
      <img src={bg} className="absolute object-cover w-full h-full z-0" alt="" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#19212A]/80 z-10" />

      <div className="relative z-20 flex items-center justify-center h-full text-white">
        <form className="flex flex-col p-5 w-[345px] h-[410px]">
          <h1 className="text-3xl text-white">Login</h1>
          <input
            type="text"
            className="mt-6 p-3 text-sm border-none outline-none rounded bg-[#0E0E0E]/75 text-white placeholder:text-gray-400"
            placeholder="User Name "
          />
          <input
            type="text"
            className="mt-6 p-3 text-sm border-none outline-none rounded bg-[#0E0E0E]/75 text-white placeholder:text-gray-400"
            placeholder="Email "
          />          
          <button className="bg-white text-sm mt-6 text-[#2b2b2b] rounded p-3 cursor-pointer hover:bg-gray-300 duration-300">
            Send Code
          </button>
          <div className="flex flex-col gap-2 mt-6">
            <Link
              to="/register"
              className="text-sm underline text-center text-[#9e9e9e] hover:text-white duration-300"
            >
              Don't have an account? Register.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
