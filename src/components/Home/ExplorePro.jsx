import Card from "../Card/Card";
import { useEffect } from "react";
import { fetchProduct } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

const ExplorePro = () => {
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

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const status = useSelector((state) => state.products.status);

  if (status === "loading..") {
    return <div>loading..</div>;
  }

  const Clothe = product.filter((item) => item.category === "men's clothing");
  const Electronic = product.filter(
    (item) => item.category === "jewelery"
  );

  const handleViewAll = () => {
    navigate("/ViewProoductAll");
  };
  
  return (
    <div className="max-w-6xl mx-auto mb-[120px]">
      <div className="flex items-center mb-6">
        <div className="flex items-center">
          <div className="w-5 h-10 bg-red-600 mr-3"></div>
          <div className="text-red-600 font-bold font-poppin text-xl">
            Our Products
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-4xl font-semibold font-inter leading-[48px] tracking-[0.04em] text-left text-black">
          Explore Our Products
        </p>
      </div>

      {/* Card Section */}

    
      <Card
        product={Clothe}
        CustomArrowLeft={CustomArrowLeft}
        CustomArrowRight={CustomArrowRight}
      />
      <Card
        product={Electronic}
      />

      <div className="flex justify-center mt-11 mb-4">
        <button className="tracking-wide font-poppin font-semibold bg-[#DB4444] text-gray-100 py-4 px-8 rounded-[4px]" 
        onClick={handleViewAll}>
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ExplorePro;

