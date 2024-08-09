// import { useState } from "react";
// import { IoPersonOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const User = () => {

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//       };

//   return (
//     <div>
//     <div className="relative ml-4 mt-1 z-10 group">
//             <button onClick={toggleDropdown} className=" hover:bg-red-600 rounded-full">
//               <IoPersonOutline className="h-7 w-7 px-1 py-1 text-black   group-hover:text-white" />
//             </button> 
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 h-44 bg-custom-gradient bg-opacity-5 border rounded-md shadow-lg">
//                 <Link
//                   to="/Profile"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Account Profile
//                 </Link>
//                 <Link
//                   to="/Dashboard"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Dashboard
//                 </Link>
//                 <Link
//                   to="/Orders"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Orders
//                 </Link>
//                 <Link
//                   to="/Logout"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Logout
//                 </Link>
//               </div>
//             )}
//           </div>
      
//     </div>
//   )
// }

// export default User


import { useState } from "react";
import { IoPersonOutline, IoBagOutline, IoCloseOutline, IoStarOutline, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const User = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div className="relative ml-4 mt-1 z-10 group">
                <button onClick={toggleDropdown} className="hover:bg-red-600 rounded-full">
                    <IoPersonOutline className="h-7 w-7 px-1 py-1 text-black group-hover:text-white" />
                </button> 
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-custom-gradient border border-gray-300 rounded-md shadow-lg">
                        <Link
                            to="/Profile"
                            className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                        >
                            <IoPersonOutline className="mr-2 h-5 w-5" />
                            Manage My Account
                        </Link>
                        <Link
                            to="/Orders"
                            className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                        >
                            <IoBagOutline className="mr-2 h-5 w-5" />
                            My Order
                        </Link>
                        <Link
                            to="/Cancellations"
                            className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                        >
                            <IoCloseOutline className="mr-2 h-5 w-5" />
                            My Cancellations
                        </Link>
                        <Link
                            to="/Reviews"
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
        </div>
    );
};

export default User;
