import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../Card/Card";
import Timer from "../timer";
import { useNavigate } from "react-router-dom";

const ProductListUI = ({ product }) => {
  const navigate = useNavigate();

  const CustomArrowLeft = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute -top-[4.5rem] right-[175px] z-10 p-2 bg-gray-200 rounded-full"
      >
        <FaArrowLeft className="w-6 h-6" />
      </button>
    );
  };

  const CustomArrowRight = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute -top-[4.5rem] right-[120px] z-10 p-2 bg-gray-200 rounded-full"
      >
        <FaArrowRight className="w-6 h-6" />
      </button>
    );
  };

  const handleViewAll = () => {
    navigate("/ViewProoductAll");
  };
  return (
    <div className="mx-auto max-w-6xl mt-24 border-b">
      <div className="flex items-center mb-6">
        <div className="flex items-center">
        <div className="w-5 h-10 bg-red-600 mr-3"></div>
          <div className="text-red-600 font-bold font-poppin text-xl">
            Today's
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-6xl mb-6">
        <div className="flex gap-12 items-end p-2">
          <h2 className="text-2xl font-semibold font-inter tracking-wide">
            Flash Sales
          </h2>
          <Timer />
        </div>
      </div>

      <Card
        product={product}
        CustomArrowLeft={CustomArrowLeft}
        CustomArrowRight={CustomArrowRight}
      />

      <div className="flex justify-center mt-11 mb-4">
        <button
          className="tracking-wide font-poppin font-semibold bg-[#DB4444] text-gray-100 py-4 px-8 rounded-[4px]"
          onClick={handleViewAll}
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductListUI;
