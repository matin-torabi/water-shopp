import { Link } from "react-router";

function Product() {
  return (
      <Link className="max-w-[280px]" to="/products/1">
        <div
          className="py-5 w-[280px] bg-[#202020] transform transition-transform duration-500 hover:scale-105 h-auto text-[#e3e3e3] flex flex-col gap-3 rounded-[10px] overflow-hidden"
        >
          <img
            className="w-full h-[175px] rounded-t-[10px] object-cover px-2"
            src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
          />
          <div className="px-4 flex flex-col gap-3">
            <span className="text-xl font-bold">teashert</span>
            <span className="text-sm text-[#6E6E6E] line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem possimus debitis hic quod distinctio fuga dolores sequi
              cum quia minima eum velit nulla, harum aliquid, veritatis iste
              cupiditate et tenetur?
            </span>
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-between w-full items-center">
                <span className="font-bold text-sm">1000 $</span>
                <span className="text-xs line-through opacity-60">1000 $</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
}

export default Product;
