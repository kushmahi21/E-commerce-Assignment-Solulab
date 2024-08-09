{/* <div className=" bg-white shadow-[0px_1px_13px_0px_#0000000D] rounded-[4px] p-4">
<table className=" bg-white rounded-tl-[4px] flex flex-col">
  <thead className="font-poppin font-normal text-base">
    <tr className="flex justify-between">
      <th className="text-left py-2">Product</th>
      <th className="text-left py-2">Price</th>
      <th className="text-left py-2">Quantity</th>
      <th className="text-left py-2">Subtotal</th>
    </tr>
  </thead>
  <tbody>
 
    <tr className="border-t flex justify-between">
    <img src={Mon} alt="LCD Monitor" className="w-12 h-12" />
      <td className="flex items-center py-4">

        <span className="ml-4">LCD Monitor</span>
      </td>
      <td className="py-4">$650</td>
      <td className="py-4">
        <input
          type="number"
          min="1"
          max="10"
          defaultValue="1"
          className="w-12 border rounded text-center"
        />
      </td>
      <td className="py-4">$650</td>
    </tr>
    <tr className="border-t">
      <td className="flex items-center py-4">
        <img src={Joy} alt="H1 Gamepad" className="w-16 h-16" />
        <span className="ml-4">H1 Gamepad</span>
      </td>
      <td className="py-4">$550</td>
      <td className="py-4">
        <input
          type="number"
          min="1"
          max="10"
          defaultValue="2"
          className="w-12 border rounded text-center"
        />
      </td>
      <td className="py-4">$1100</td>
    </tr>
  </tbody>
</table>
</div>  */}

//const Navbar = () => {
  //   const location = useLocation();
  
  //   const shouldShowCartAndWishlist = !(
  //     location.pathname === "/LoginPage" || location.pathname === "/Signup"
  //   );
  
  //   return (
  //     <nav className="bg-white w-full mx-auto">
  //       <div className="w-full h-12 flex bg-black text-white items-center">
  //         <span className="flex justify-center w-11/12">
  //           Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%!
  //           <a className="border-b-2 mx-3 font-bold    " href="">
  //             ShopNow
  //           </a>{" "}
  //         </span>
  //         <h4>English</h4>
  //       </div>
  
  //       <div className="container mx-auto flex items-center justify-evenly py-4 border-b">
  //         <div className="flex items-center">
  //           <Link to="/" className="font-inter font-bold tracking-[3px] text-2xl">
  //             Exclusive
  //           </Link>
  //         </div>
  //         <div>
  //           <ul className="hidden space-x-8 sm:flex font-poppin font-normal text-base">
  //             <li className="hover:border-b border-black">
  //               <Link to="/" className="text-gray-700 hover:text-blue-500">
  //                 Home
  //               </Link>
  //             </li>
  //             <li className="hover:border-b border-black">
  //               <Link
  //                 to="/ContactPage"
  //                 className="text-gray-700 hover:text-blue-500"
  //               >
  //                 Contact
  //               </Link>
  //             </li>
  //             <li className="hover:border-b border-black">
  //               <Link
  //                 to="/AboutPage"
  //                 className="text-gray-700 hover:text-blue-500"
  //               >
  //                 About
  //               </Link>
  //             </li>
  //             <li className="hover:border-b border-black">
  //               <Link to="/Signup" className="text-gray-700 hover:text-blue-500">
  //                 Sign up
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  
  //         <div className="flex items-center">
  //           <div className="relative ">
  //             <input
  //               type="text"
  //               placeholder="What are you looking for?"
  //               className="w-64 px-4 py-2 rounded-md bg-[#F5F5F5] text-xs placeholder-[#000] placeholder-opacity-50"
  //             />
  
  //             <button className="absolute inset-y-0 right-0 flex items-center px-3">
  //               <IoSearch className="h-5 w-5 text-black" />
  //             </button>
  //           </div>
  
  //           {shouldShowCartAndWishlist && (
  //             <>
  //               <div className="ml-4 flex items-center space-x-4">
  //                 <Link to="/WishlistUi">
  //                   <FaRegHeart className="h-5 w-5 text-black" />
  //                 </Link>
  
  //                 <Link to="/Cart">
  //                   <IoCartOutline className="h-6 w-6 text-black" />
  //                 </Link>
  //               </div>
  //             </>
  //           )}
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // };



//   import { useEffect, useState } from "react";
// import { GiReturnArrow } from "react-icons/gi";
// import { TbTruckDelivery } from "react-icons/tb";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Breadcrumb } from "react-bootstrap";
// import { HiHome } from "react-icons/hi";
// import Card from "../Card/Card";



// const ProductDetails = () => {
//   const [product, setProduct] = useState({});
//   const { id } = useParams();
//   console.log(product);

//   const fetchDetails = async () => {
//     const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
//     setProduct(res.data);
//     // console.log(res);
//   };

//   useEffect(() => {
//     fetchDetails();
//   }, [id]);


//   const Fur = product.filter((item) => item.category === "electronics");

//   return (
//     <>
//       <div className="mt-20 ml-36">
//         <Breadcrumb aria-label="Default breadcrumb example">
//           <Breadcrumb.Item href="/" icon={HiHome}>
//             Home
//           </Breadcrumb.Item>
//           <Breadcrumb.Item href="/ViewProoductAll">
//             Product Page
//           </Breadcrumb.Item>
//           <Breadcrumb.Item href="/ProductDetails/:id">
//             {product.title}
//           </Breadcrumb.Item>
//         </Breadcrumb>
//       </div>
//       <div className="flex flex-row justify-evenly mt-20 mb-[140px]">
//         <div className="flex flex-row justify-evenly gap-[30px]">
//           <div className=" w-[170px] h-[600px] flex flex-col gap-3">
//             <div className="w-[168px] h-[138px] bg-[#F5F5F5] ">
//               <img
//                 src={product.image}
//                 alt=""
//                 className="w-[121px] h-[114px] mix-blend-multiply mx-6 my-3 object-contain"
//               />
//             </div>
//             <div className="w-[168px] h-[138px] bg-[#F5F5F5] ">
//               <img
//                 src={product.image}
//                 alt=""
//                 className="w-[121px] h-[114px] mix-blend-multiply mx-6 my-3 object-contain"
//               />
//             </div>
//             <div className="w-[168px] h-[138px] bg-[#F5F5F5] ">
//               <img
//                 src={product.image}
//                 alt=""
//                 className="w-[121px] h-[114px] mix-blend-multiply mx-6 my-3 object-contain"
//               />
//             </div>
//             <div className="w-[168px] h-[138px] bg-[#F5F5F5] ">
//               <img
//                 src={product.image}
//                 alt=""
//                 className="w-[121px] h-[114px] mix-blend-multiply mx-6 my-3 object-contain"
//               />
//             </div>
//           </div>
//           <div className="flex justify-center items-center w-[500px] h-[600px] bg-[#F5F5F5]">
//             <img
//               className="w-[446px] h-[315px] mx-7 mt-[154px] mb-[131px] mix-blend-multiply object-contain"
//               src={product.image}
//               alt=""
//             />
//           </div>
//         </div>
//         <div className=" w-[400px] min-h-[600px] ">
//           <h4 className="font-bold font-inter tracking-wider">
//             {product.title}
//           </h4>
//           <div className="w-[290px] h-[21px]  mt-4 flex flex-row gap-3 items-center">
//             <span>⭐⭐⭐⭐</span> <span>150 reviews</span>{" "}
//             <span className="text-green-400">In-stock</span>
//           </div>
//           <p className="mt-4 font-inter text-xl">${product.price}</p>

//           <p className="mt-4 font-poppin text-sm max-h-9 overflow-hidden">
//             {product.description}
//           </p>
//           <div className="flex mt-6 flex-col justify-evenly border-zinc-300 border-t-2">
//             <div className="flex flex-row gap-3 mt-6 items-center w-[150px] h-[20px]">
//               <p className="font-poppin">Colours:</p> <p>⭕</p> <p>✅</p>
//             </div>
//             <div className="w-[296px] h-[32px] mt-6  flex gap-6 items-center">
//               <p className="font-poppin">Size:</p>
//               <div className="flex flex-row justify-evenly gap-4">
//                 <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded hover:bg-red-500 text-black cursor-pointer">
//                   XS
//                 </div>
//                 <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded  hover:bg-red-500 text-black cursor-pointer">
//                   S
//                 </div>
//                 <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded hover:bg-red-500 text-black cursor-pointer">
//                   M
//                 </div>
//                 <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded hover:bg-red-500 text-black cursor-pointer">
//                   L
//                 </div>
//                 <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded hover:bg-red-500 text-black cursor-pointer">
//                   XL
//                 </div>
//               </div>
//             </div>
//             <div className="flex mt-6 flex-row gap-4">
//               <div className="w-[165px] h-[44px] border-2 flex flex-row justify-between border-zinc-300 rounded">
//                 <div className="border-r-2 flex justify-center items-center border-zinc-300 w-[41px] text-xl font-semibold hover:bg-red-500 hover:text-white cursor-pointer">
//                   +
//                 </div>
//                 <p className="flex items-center text-xl font-semibold">2</p>
//                 <div className="border-l-2 flex justify-center items-center border-zinc-300 w-[41px] text-xl font-semibold hover:bg-red-500 hover:text-white cursor-pointer">
//                   -
//                 </div>
//               </div>
//               <div className="w-[165px] h-[44px] font-poppin flex justify-center border border-zinc-300 items-center text-black hover:bg-red-500 rounded hover:text-white cursor-pointer">
//                 Buy Now
//               </div>
//               <div className="w-[40px] h-[40px] border-2 border-zinc-300">
//                 {" "}
//               </div>
//             </div>
//             <div className="w-[399px] h-[180px] mt-10 flex flex-col gap-4 border border-black justify-center">
//               <div className="flex flex-row justify-evenly items-center py-3 border-b-2 ">
//                 <TbTruckDelivery className="text-3xl" />
//                 <div className=" flex flex-col gap-1">
//                   <h1 className="font-poppin font-semibold">Free Delivery</h1>
//                   <p className="font-poppin text-sm">
//                     Enter your postal code for Delivery Availability
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-row gap-4 items-center  ml-4">
//                 <GiReturnArrow className="text-3xl " />
//                 <div className=" flex flex-col gap-1">
//                   <h1 className="font-poppin font-semibold">Return Delivery</h1>
//                   <p className="font-poppin text-sm">
//                     Free 30 Days Delivery Returns. Details
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="relative w-[1170px] h-[518px] ml-[135px] mt-[70px]">
//           <div className="flex items-center mb-6">
//             <div className="flex items-center">
//               <div className="w-5 h-10 bg-red-600 mr-3"></div>
//               <div className="text-red-600 font-semibold font-poppin text-base">
//                 This Month
//               </div>
//             </div>
//           </div>
//           <div className="mb-6">
//             <p className="text-4xl font-semibold font-inter leading-[48px] tracking-[0.04em] text-left text-black">
//               Best Selling Products
//             </p>
//           </div>
//           <Card product={Fur} />

          
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;
