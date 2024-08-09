import { CiHeart } from "react-icons/ci";
import { PiEyeThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Card2nd = ({ product }) => {
  const navigate = useNavigate();

  const sendPro = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {product.map((item, i) => (
        <div key={i} className="flex flex-col justify-between rounded-lg overflow-hidden w-[270px] border border-gray-200 shadow-sm">
          <div className="relative flex justify-center h-[250px] items-center bg-neutral-100 group">
            <img src={item.image} alt={item.title} className="h-[180px] mix-blend-multiply" />
            <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
              <button className="bg-white p-1 rounded-full shadow-md">
                <CiHeart className="w-6 h-6 " />
              </button>
              <button className="bg-white p-1 rounded-full shadow-md" onClick={() => sendPro(item.id)}>
                <PiEyeThin className="w-6 h-6" />
              </button>
            </div>
            <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:!opacity-100 transition-opacity duration-300">
              Add to Cart
            </button>
          </div>
          <div className="my-4 p-4">
            <h2 className="text-[1.5rem] leading-6 font-medium font-poppin text-black">
              {item.title}
            </h2>
            <p className="text-gray-700 gap-3 mt-2">
              <span className="font-poppin text-base font-medium text-red-600">
                ${item.price}
              </span>
              <span className="font-poppin text-base font-medium opacity-50 line-through text-gray-500 ml-2">
                $360
              </span>
            </p>
            <div className="my-1 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              <span className="font-poppin text-sm font-semibold opacity-50 text-gray-600 mt-1">
                (65)
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2nd;
