import React from "react";
import PS from "../../img/ps5.png";
import Hat from "../../img/hat.png";
import Echo from "../../img/echo.png";
import Gucci from "../../img/gucci.png";

const Newarrival = () => {
  return (
    <div className="mx-[135px]">
      <div className="relative w-[73.125rem] h-[48rem]">
        <div className="flex items-center mb-6">
          <div className="flex items-center">
            <div className="w-5 h-10 bg-red-600 mr-3"></div>
            <div className="text-red-600 font-bold font-poppin text-xl">
              Featured
            </div>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-4xl font-semibold font-inter leading-[48px] tracking-[0.04em] text-left text-black">
            New Arrival
          </p>
        </div>

        <div className=" mt-[60px] flex gap-7">
          <div className="relative w-[35.625em] h-[37.8em] bg-black ">
            <img className="px-[1.875em] pt-[5.5625em]" src={PS} alt="" />
            <div className="absolute left-4 bottom-6 flex flex-col justify-between w-[15.125em] h-[7.625em]">
              <h1 className="text-white font-inter font-semibold text-xl ">
                PlayStation 5
              </h1>
              <p className="text-white font-poppin font-light">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="text-white font-poppin font-light">Shop Now</p>
            </div>
          </div>

          {/* WOMEN'S COLLECTION DIV */}

          <div className="flex flex-col justify-between w-[35.625em] h-[37.8em]">
            <div className=" bg-black relative">
              <img className="pl-[8.625em]" src={Hat} alt="" />
              <div className="absolute left-4 bottom-6 flex flex-col justify-between w-[15.9375em] h-[7.625em]">
                <h1 className="text-white font-inter font-semibold text-xl">
                  Women’s Collections
                </h1>
                <p className="text-white font-poppin font-light">
                  Featured woman collections that give you another vibe.
                </p>
                <p className="text-white font-poppin font-light">Shop Now</p>
              </div>
            </div>

            {/* SPEAKER DIV */}

            <div className="flex justify-between w-[35.625em] h-[17.75em]">
              <div className=" bg-black relative">
                <img className="px-[2.5em] py-[2em]" src={Echo} alt="" />
                <div className="absolute left-4 bottom-6 flex flex-col justify-between">
                  <h1 className="text-white font-inter font-semibold text-xl">
                    Speakers
                  </h1>
                  <p className="text-white font-poppin font-light">
                    Amazon wireless speakers
                  </p>
                  <p className="text-white font-poppin font-light">Shop Now</p>
                </div>
              </div>

              {/* PERFUME DIV */}

              <div className=" bg-black relative">
                <img
                  className="px-[2.1875em] pb-[2.6875em] pt-[2.375em]"
                  src={Gucci}
                  alt=""
                />
                <div className="absolute left-4 bottom-6 flex flex-col justify-between">
                  <h1 className="text-white font-inter font-semibold text-xl">
                    Perfume
                  </h1>
                  <p className="text-white font-poppin font-light">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <p className="text-white font-poppin font-light">Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarrival;
