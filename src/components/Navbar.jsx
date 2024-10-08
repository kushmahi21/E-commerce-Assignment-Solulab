import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import User from "./User/User";



const Navbar = () => {
  const location = useLocation();
  

  const shouldShowCartAndWishlist = !(
    location.pathname === "/LoginPage" || location.pathname === "/Signup"
  );

 

  return (
    <div className="">
    <nav className="bg-white w-full mx-auto">
      <div className="w-full h-12 flex bg-black text-white items-center">
        <span className="flex justify-center w-11/12">
          Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%!
          <a className="border-b-2 mx-3 font-bold" href="">
            ShopNow
          </a>
        </span>
        <h4>English</h4>
      </div>

      <div className="container mx-auto flex items-center justify-evenly py-4 border-b">
        <div className="flex items-center">
          <Link to="/" className="font-inter font-bold tracking-[3px] text-2xl">
            Exclusive
          </Link>
        </div>
        <div>
          <ul className="hidden space-x-8 sm:flex font-poppin font-normal text-base">
            <li className="hover:border-b border-black">
              <Link to="/" className="text-gray-700 ">
                Home
              </Link>
            </li>
            <li className="hover:border-b border-black">
              <Link to="/ContactPage" className="text-gray-700 ">
                Contact
              </Link>
            </li>
            <li className="hover:border-b border-black">
              <Link to="/AboutPage" className="text-gray-700 ">
                About
              </Link>
            </li>
            <li className="hover:border-b border-black">
              <Link to="/Signup" className="text-gray-700 ">
                Sign up
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-64 px-4 py-2 rounded-md bg-[#F5F5F5] text-xs placeholder-[#000] placeholder-opacity-50"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3">
              <IoSearch className="h-5 w-5 text-black" />
            </button>
          </div>

          {shouldShowCartAndWishlist && (
            <div className="ml-4 flex items-center space-x-4">
              <Link to="/WishlistUi">
                <FaRegHeart className="h-5 w-5 text-black" />
              </Link>

              <Link to="/Cart">
                <IoCartOutline className="h-6 w-6 text-black" />
              </Link>
            </div>
          )}

            <User/>
         
          
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
