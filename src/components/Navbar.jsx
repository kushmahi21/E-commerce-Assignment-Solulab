import { IoSearch, IoCartOutline,IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const shouldShowCartAndWishlist = !(
    location.pathname === "/LoginPage" || location.pathname === "/Signup"
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
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
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li className="hover:border-b border-black">
              <Link to="/ContactPage" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li className="hover:border-b border-black">
              <Link to="/AboutPage" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li className="hover:border-b border-black">
              <Link to="/Signup" className="text-gray-700 hover:text-blue-500">
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

         
          <div className="relative ml-4 mt-1 z-10 group">
            <button onClick={toggleDropdown} className=" hover:bg-red-600 rounded-full">
              <IoPersonOutline className="h-7 w-7 px-1 py-1 text-black   group-hover:text-white" />
            </button> 
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 h-44 bg-black bg-opacity-5 border rounded-md shadow-lg">
                <Link
                  to="/Profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Account Profile
                </Link>
                <Link
                  to="/Dashboard"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  to="/Orders"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Orders
                </Link>
                <Link
                  to="/Logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
