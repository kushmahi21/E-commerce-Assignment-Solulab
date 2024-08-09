import { useState } from "react";
import { Link } from "react-router-dom";
import Mon from "../../img/monitor.png";
import Joy from "../../img/joy.png";
import { Breadcrumb } from "react-bootstrap";
import { HiHome } from "react-icons/hi";

const Cart = () => {
  // return (
  //   <div className="max-w-7xl mx-auto h-[52.5rem] mt-[11.313rem] mb-[11.313rem] border border-black">
  //     <div className=" h-[436px] gap-6 border border-black">
  //       <div className="bg-white shadow-[0px_1px_13px_0px_#0000000D] rounded-[4px] p-4">
  //         <div className="bg-white rounded-tl-[4px] flex flex-col">
  //           <div className="font-poppin font-normal text-base">
  //             <div className="flex justify-between py-2">
  //               <div className="text-left">Product</div>
  //               <div className="text-left">Price</div>
  //               <div className="text-left">Quantity</div>
  //               <div className="text-left">Subtotal</div>
  //             </div>
  //           </div>
  //           <div>
  //             <div className="border-t flex justify-between items-center mt-10">
  //               <img src={Mon} alt="LCD Monitor" className="w-12 h-12" />
  //               <div className="ml-4 flex-1">LCD Monitor</div>
  //               <div className="flex flex-row gap-[365px]">
  //               <div>$650</div>
  //               <div>
  //                 <input
  //                   type="number"
  //                   min="1"
  //                   max="10"
  //                   defaultValue="1"
  //                   className="w-12 border rounded text-center"
  //                 />
  //               </div>
  //               <div>$650</div>
  //               </div>
  //             </div>
  //             <div className="border-t flex justify-between items-center py-4 mt-10">
  //               <img src={Joy} alt="H1 Gamepad" className="w-16 h-16" />
  //               <div className="ml-4 flex-1">H1 Gamepad</div>
  //               <div>$550</div>
  //               <div>
  //                 <input
  //                   type="number"
  //                   min="1"
  //                   max="10"
  //                   defaultValue="2"
  //                   className="w-12 border rounded text-center"
  //                 />
  //               </div>
  //               <div>$1100</div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="flex justify-between mt-6">
  //         <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
  //           Return To Shop
  //         </button>
  //         <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
  //           Update Cart
  //         </button>
  //       </div>
  //     </div>

  //     <div className=" h-[20.25rem] flex justify-between mt-20 border border-black">
  //       <div className="flex gap-4">
  //         <input
  //           type="text"
  //           placeholder="Coupon Code"
  //           className="border  border-black rounded px-4 py-2 w-full md:w-[235px] h-[56px] text-base font-normal leading-[24px] text-left font-poppins opacity-50 text-black"
  //         />
  //         <button className="w-52 h-14 tracking-wide font-poppin font-semibold bg-[#DB4444] text-gray-100 py-4 px-8 rounded-[4px]">
  //           Apply Coupon
  //         </button>
  //       </div>
  //       <div className="w-[470px] max-h-80 border-2 border-black">
  //         <div className="flex flex-col gap-16">
  //           <h3 className="font-medium font-poppin text-xl text-black">
  //             Cart Total
  //           </h3>

  //           <div className="flex justify-between border-b border-opacity-40">
  //             <p className="font-normal font-poppin text-base text-black">
  //               Subtotal:
  //             </p>
  //             <span className="font-normal font-poppin text-base text-black">
  //               $1750
  //             </span>
  //           </div>
  //           <div className="flex justify-between border-b border-opacity-40">
  //             <p className="font-normal font-poppin text-base text-black">
  //               Shipping:
  //             </p>
  //             <span className="font-normal font-poppin text-base text-black">
  //               Free
  //             </span>
  //           </div>
  //           <div className="flex justify-between">
  //             <p className="font-normal font-poppin text-base text-black">
  //               Total:
  //             </p>
  //             <span className="font-normal font-poppin text-base text-black">
  //               $1750
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  // );

  return (
    <div>
      <div className="mt-20 ml-36">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome} className="font-poppin font-normal text-base">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="" className="font-poppin font-normal text-base">Cart Page</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="max-w-7xl mx-auto my-36">
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead className="shadow-2xl">
              <tr className="shadow-[0px_1px_13px_0px_#0000000D] rounded-[4px]">
                <th className="px-5 py-3 text-left text-base font-normal font-poppin text-black">
                  Product
                </th>
                <th className="px-5 py-3  text-left text-base font-normal font-poppin text-black">
                  Price
                </th>
                <th className="px-5 py-3 text-left text-base font-normal font-poppin text-black">
                  Quantity
                </th>
                <th className="px-5 py-3 text-left text-base font-normal font-poppin text-black">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="shadow-[0px_1px_13px_0px_#0000000D] rounded-[4px]">
              <tr>
                <td className="px-5 py-5  bg-white ">
                  <div className="flex items-center ">
                    <img
                      src={Mon}
                      alt="Gaming Monitor"
                      className="w-10 h-10 object-cover mr-4"
                    />
                    <span className="text-base font-normal font-poppin text-black">
                      LCD Monitor
                    </span>
                  </div>
                </td>
                <td className="px-5 py-5 bg-white">
                  <span className="text-base font-normal font-poppin text-black">
                    $650
                  </span>
                </td>
                <td className="px-5 py-5 bg-white text-base">
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      defaultValue="1"
                      className="w-12 border rounded text-center"
                    />
                  </div>
                </td>
                <td className="px-5 py-5  bg-white">
                  <span className="text-base font-normal font-poppin text-black">
                    $650
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5   bg-white">
                  <div className="flex items-center">
                    <img
                      src={Joy}
                      alt="Gamepad"
                      className="w-10 h-10 object-cover mr-4"
                    />
                    <span className="text-base font-normal font-poppin text-black">
                      H1 Gamepad
                    </span>
                  </div>
                </td>
                <td className="px-5 py-5 bg-white">
                  <span className="text-base font-normal font-poppin text-black">
                    $550
                  </span>
                </td>
                <td className="px-5 py-5  border-gray-200 bg-white text-base">
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      defaultValue="1"
                      className="w-12 border-[0.094rem] border-black-opacity-40 rounded text-center"
                    />
                  </div>
                </td>
                <td className="px-5 py-5 bg-white">
                  <span className="text-base font-normal font-poppin text-black">
                    $1100
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-8">
            <Link
              to="/"
              className="border border-black py-3 px-12 rounded text-base font-medium font-poppin text-black"
            >
              Return To Shop
            </Link>
            <button className="bg-white border border-black py-3 px-12 rounded text-base font-medium font-poppin text-black">
              Update Cart
            </button>
          </div>

          <div className="grid grid-cols-2 gap-16 mt-16">
            <div className="items-center">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-64 p-3 border rounded mr-4 text-base font-normal font-poppin text-black"
              />
              <button className="bg-[#DB4444] text-white py-3 px-8 rounded text-base font-medium font-poppin">
                Apply Coupon
              </button>
            </div>
            <div className="border border-black p-8 rounded">
              <h3 className="mb-8 text-xl font-medium font-poppin text-black">
                Cart Total
              </h3>
              <div className="flex justify-between mb-4">
                <span className="text-base font-normal font-poppin text-black">
                  Subtotal:
                </span>
                <span className="text-base font-normal font-poppin text-black">
                  $1750
                </span>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="flex justify-between mb-4">
                <span className="text-base font-normal font-poppin text-black">
                  Shipping:
                </span>
                <span className="text-base font-normal font-poppin text-black">
                  Free
                </span>
              </div>
              <hr className="border-gray-300 mb-4" />
              <div className="flex justify-between mb-4">
                <span className="text-base font-normal font-poppin text-black">
                  Total:
                </span>
                <span className="text-base font-normal font-poppin text-black">
                  $1750
                </span>
              </div>
              <div>
                <button className="px-12 py-4 ml-[5.563rem] mr-32 bg-[#DB4444] text-white rounded text-base font-medium font-poppin">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
