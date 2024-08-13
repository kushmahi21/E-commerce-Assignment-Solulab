import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoPersonOutline, IoBagOutline, IoCloseOutline, IoStarOutline, IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const User = () => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const shouldShowUserProfile = !(
        location.pathname === "/LoginPage" || location.pathname === "/Signup"
      );

    return (
        
        <div>
        {shouldShowUserProfile && (
            <div className="relative ml-4 mt-1 z-10 group">
                <button onClick={toggleDropdown} className="hover:bg-red-600 rounded-full">
                    <CgProfile className="h-7 w-7 px-1 py-1 text-black group-hover:text-white" />
                </button> 
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-custom-gradient border border-gray-300 rounded-md shadow-lg">
                        <Link
                            to="/Account"
                            className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                        >
                            <IoPersonOutline className="mr-2 h-5 w-5" />
                            Manage My Account
                        </Link>
                        <Link
                            to="/Cart"
                            className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                        >
                            <IoBagOutline className="mr-2 h-5 w-5" />
                            My Order
                        </Link>
                        <Link
                            to="/ContactPage"
                            className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                        >
                            <IoCloseOutline className="mr-2 h-5 w-5" />
                            My Cancellations
                        </Link>
                        <Link
                            to="/ProductDetails/${id}"
                            className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                        >
                            <IoStarOutline className="mr-2 h-5 w-5" />
                            My Reviews
                        </Link>
                        <Link
                            to="/Logout"
                            className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                        >
                            <IoLogOutOutline className="mr-2 h-5 w-5" />
                            Logout
                        </Link>
                    </div>
                )}
            </div>
        )}
        </div>
        
    );
};

export default User;
