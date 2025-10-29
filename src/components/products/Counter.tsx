import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

function Counter() {
  return (
    <div className="w-full h-[50px] hidden group-hover:flex justify-center items-center gap-3 transition-all duration-300">
      <button className="px-3 py-1.5 bg-[#2a2a2a] hover:text-[#2b2b2b] hover:bg-white duration-300 cursor-pointer rounded text-sm">
        <FaPlus />
      </button>
      <span className="px-3 py-[1.5px] bg-[#2a2a2a] rounded">0</span>
      <button className="px-3 py-1.5 bg-[#2a2a2a] hover:text-[#2b2b2b] hover:bg-white duration-300 cursor-pointer rounded text-sm">
        <TiMinus />
      </button>
    </div>
  );
}

export default Counter;