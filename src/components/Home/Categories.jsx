import {
  FaCamera,
  FaMobileAlt,
  FaDesktop,
  FaTabletAlt,
  FaHeadphones,
  FaGamepad,
} from "react-icons/fa";

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const Categories = () => {
  return (
    <div className="relative max-w-6xl mx-auto gap-[60px] py-6 border-b">
      <div className="flex items-center mb-6">
        <div className="flex items-center">
        <div className="w-5 h-10 bg-red-600 mr-3"></div>
          <div className="text-red-600 font-bold font-poppin text-xl">
            Categories
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-4xl font-semibold font-inter leading-[48px] tracking-[0.04em] text-left text-black">
          Browse By Category
        </p>
      </div>
      <div className="absolute top-4 right-4 flex space-x-2">
        <button className="p-2 bg-gray-200 rounded-full">
          <IoIosArrowRoundBack className="w-6 h-6" />
        </button>
        <button className="p-2 bg-gray-200 rounded-full">
          <IoIosArrowRoundForward className="w-6 h-6" />
        </button>
      </div>
      <div className="flex space-x-4 justify-center">
        <div className="flex flex-col items-center justify-center w-40 h-40 border rounded-lg font-poppin transition-colors duration-300 hover:bg-red-600 hover:text-white">
          <FaMobileAlt className="w-12 h-12 mb-2" />
          <div>Phones</div>
        </div>
        <div className="flex flex-col items-center justify-center w-40 h-40 border rounded-lg font-poppin transition-colors duration-300 hover:bg-red-600 hover:text-white">
          <FaDesktop className="w-12 h-12 mb-2" />
          <div>Computers</div>
        </div>
        <div className="flex flex-col items-center justify-center w-40 h-40 border rounded-lg font-poppin transition-colors duration-300 hover:bg-red-600 hover:text-white">
          <FaTabletAlt className="w-12 h-12 mb-2" />
          <div>SmartWatch</div>
        </div>
        <div className="flex flex-col items-center justify-center w-40 h-40 border rounded-lg font-poppin transition-colors duration-300 hover:bg-red-600 hover:text-white">
          <FaCamera className="w-12 h-12 mb-2" />
          <div>Camera</div>
        </div>
        <div className="flex flex-col items-center justify-center w-40 h-40 border rounded-lg font-poppin transition-colors duration-300 hover:bg-red-600 hover:text-white">
          <FaHeadphones className="w-12 h-12 mb-2" />
          <div>HeadPhones</div>
        </div>
        <div className="flex flex-col items-center justify-center w-40 h-40 border rounded-lg font-poppin transition-colors duration-300 hover:bg-red-600 hover:text-white">
          <FaGamepad className="w-12 h-12 mb-2" />
          <div>Gaming</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
