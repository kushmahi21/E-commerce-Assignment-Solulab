import { CiHeart } from "react-icons/ci";
import { PiEyeThin } from "react-icons/pi";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Card = ({ product, CustomArrowLeft, CustomArrowRight}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: CustomArrowRight ? <CustomArrowRight /> : false,
    prevArrow: CustomArrowLeft ? <CustomArrowLeft /> : false,
  };
  const navi = useNavigate();

  const sendPro = (id) => {
    navi(`/ProductDetails/${id}`)
     
  }



  return (
    <>
      <Slider {...settings}>
        {product.map((items, i) => (
          <div key={i} className="flex flex-row justify-evenly">
            <div className="rounded-lg overflow-hidden w-[270px]">
              <div className="relative flex justify-center h-[250px] w-[270px] items-center bg-neutral-100 group">
                <img src={items.image} className="h-[180px] mix-blend-multiply" />
                <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
                  <button className="bg-white p-1 rounded-full shadow-md">
                    <CiHeart className="w-6 h-6 " />
                  </button>
                  <button className="bg-white p-1 rounded-full shadow-md hover:bg-gray-400" onClick={() => sendPro(items.id)}>
                    <PiEyeThin className="w-6 h-6" />
                  </button>
                </div>
                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:!opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button> 

              </div>
              <div className="my-4">
                <h2 className="text-[1.5rem] leading-6 font-medium font-poppin text-black">
                  {items.title}
                </h2>
                <p className="text-gray-700 gap-3 mt-2">
                  <span className="font-poppin text-base font-medium text-red-600">
                    {items.price}
                  </span>
                  <span className="font-poppin text-base font-medium opacity-50 line-through text-gray-500 ml-2">
                    $360
                  </span>
                </p>
                <div className="my-1 flex items-center gap-2">
                   {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))} 
                  <span className="font-poppin text-sm font-semibold opacity-50  text-gray-600 mt-1">
                    (65)
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Card;
