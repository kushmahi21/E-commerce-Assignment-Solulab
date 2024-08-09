import { useEffect } from "react";
import { fetchProduct } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";


const BestSell = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const status = useSelector((state) => state.products.status);

  if (status === "loading..") {
    return <div>loading..</div>;
  }

  const handleViewAll = () => {
    navigate("/ViewProoductAll");
  };

  const Fur = product.filter((item) => item.category === "electronics")
  

  
  return (
    <div className="relative w-[1170px] h-[518px] ml-[135px] mt-[70px]">
      <div className="flex items-center mb-6">
        <div className="flex items-center">
        <div className="w-5 h-10 bg-red-600 mr-3"></div>
          <div className="text-red-600 font-semibold font-poppin text-base">
            This Month
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-4xl font-semibold font-inter leading-[48px] tracking-[0.04em] text-left text-black">
          Best Selling Products
        </p>
      </div>

      <Card product={Fur}/>


      <div className="absolute top-4 right-4 flex space-x-2">
        <button className="w-auto h-auto px-12 py-4 rounded-[4px] bg-[#DB4444] text-[16px] font-medium font-poppins leading-[24px] text-left " onClick={handleViewAll}>
          View All
        </button>
      </div>
    </div>
  );
};

export default BestSell;
