import React from "react";

const CheckOut = () => {
  return (
    <div className="flex justify-center items-start p-8">
      <div className="flex justify-between gap-[173px]">
        <div className="w-[527px] h-auto bg-white ml-[135px]">
          <div className="max-w-lg p-8">
            <h1 className="text-2xl font-bold mb-6">Billing Details</h1>
            <form>
              <div className="mb-4">
                <label
                  className="block text-[16px] font-normal leading-[24px] text-[#000000] mb-2 font-poppins"
                  htmlFor="first-name"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full h-[50px] rounded-tl-md bg-[#F5F5F5] p-3 border border-gray-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[16px] font-normal leading-[24px] text-[#000000] mb-2 font-poppins"
                  htmlFor="company-name"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="w-full h-[50px] rounded-tl-md bg-[#F5F5F5] p-3 border border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[16px] font-normal leading-[24px] text-[#000000] mb-2 font-poppins"
                  htmlFor="street-address"
                >
                  Street Address*
                </label>
                <input
                  type="text"
                  id="street-address"
                  className="w-full h-[50px] rounded-tl-md bg-[#F5F5F5] p-3 border border-gray-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[16px] font-normal leading-[24px] text-[#000000] mb-2 font-poppins"
                  htmlFor="apartment"
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  className="w-full h-[50px] rounded-tl-md bg-[#F5F5F5] p-3 border border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[16px] font-normal leading-[24px] text-[#000000] mb-2 font-poppins"
                  htmlFor="city"
                >
                  Town/City*
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full h-[50px] rounded-tl-md bg-[#F5F5F5] p-3 border border-gray-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[16px] font-normal leading-[24px] text-[#000000] mb-2 font-poppins"
                  htmlFor="phone-number"
                >
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phone-number"
                  className="w-full h-[50px] rounded-tl-md bg-[#F5F5F5] p-3 border border-gray-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-[16px] font-normal leading-[24px] text-[#000000] mb-2 font-poppins"
                  htmlFor="email"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-[50px] rounded-tl-md bg-[#F5F5F5] p-3 border border-gray-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-red-600 bg-[#F5F5F5]"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Save this information for faster check-out next time
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="w-[527px] h-auto bg-white mr-[135px]">
          <div className="p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img
                    src="path-to-lcd-monitor.jpg"
                    alt="LCD Monitor"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg">LCD Monitor</span>
                </div>
                <span className="text-lg">$650</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img
                    src="path-to-gamepad.jpg"
                    alt="Gamepad"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg">HI Gamepad</span>
                </div>
                <span className="text-lg">$1100</span>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg">Subtotal:</span>
                <span className="text-lg">$1750</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg">Shipping:</span>
                <span className="text-lg">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">$1750</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment-method"
                  id="bank"
                  className="form-radio h-5 w-5 text-red-600 mr-2"
                />
                <label htmlFor="bank" className="text-lg">
                  Bank
                </label>
                <div className="flex ml-4">
                  <img
                    src="path-to-bank-logo1.jpg"
                    alt="Bank"
                    className="w-8 h-8 mr-2"
                  />
                  <img
                    src="path-to-bank-logo2.jpg"
                    alt="Bank"
                    className="w-8 h-8 mr-2"
                  />
                  <img
                    src="path-to-bank-logo3.jpg"
                    alt="Bank"
                    className="w-8 h-8 mr-2"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  id="cash"
                  className="form-radio h-5 w-5 text-red-600 mr-2"
                />
                <label htmlFor="cash" className="text-lg">
                  Cash on delivery
                </label>
              </div>
            </div>

            {/* <div className="mb-4 flex">
              <div className="w-[300px] h-[56px]">
                <input type="text" placeholder="Coupon Code" className=" rounded-tl-md bg-[#F5F5F5] p-3 border border-gray-300" />
                
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-tr-md">Apply Coupon</button>
            </div> */}

            <div className="flex gap-4 w-[527px] h-[56px]">
              <div className="">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-[300px] h-[56px] p-[16px_24px] border-l border-t border-b border-solid  bg-[#F5F5F5]"
                />
              </div>
              <button className="w-[211px] h-[56px] px-12 py-4 bg-[#DB4444] text-white">
                Apply Coupon
              </button>
            </div>

            <button className="w-full bg-red-600 text-white px-4 py-2 rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
