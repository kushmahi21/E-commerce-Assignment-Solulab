import Aboutimg1 from "../../img/aboutimg1.png";
import Tom from "../../img/tom.png";
import Emma from "../../img/emma.png";
import Will from "../../img/will.png";
import {
  FaStore,
  FaShoppingBag,
  FaDollarSign,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";

import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { Breadcrumb } from "react-bootstrap";
import { HiHome } from "react-icons/hi";

const AboutPage = () => {
  return (
    <div className="">
    <div className="mt-20 max-w-6xl mx-auto">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/AboutPage">About Page</Breadcrumb.Item>
      </Breadcrumb>
      </div>

      <div className="flex flex-row bg-white  mt-11 max-w-[83.5rem] ml-auto justify-between">
        <div className="mb-6 mt-[137px] w-5/12 " >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-[26px]">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-gray-700 leading-[26px]">
            Exclusive has more than 1 million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer goods to services.
          </p>
        </div>
        <div className="w-6/12">
          <img
            src={Aboutimg1}
            alt="Two women shopping"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* information card */}

      <div className="flex justify-evenly items-center mb-8 mt-[140px] max-w-6xl mx-auto">
        <div className="group w-[270px] h-[230px] p-6 border rounded-lg flex flex-col items-center justify-center text-gray-800 hover:bg-red-500 ">
          <div className="mb-6 p-3 items-center bg-black rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)] group-hover:shadow-[0px_0px_0_8px_rgba(255,251,251,0.4)] group-hover:!bg-white ">
            <FaStore className="text-3xl mb-1 text-white group-hover:!text-black group-hover:!border group-hover:!border-black group-hover:!rounded-full group-!hover:p-1 group-hover:!w-[30px] group-hover:!h-[30px]" />
          </div>
          <p className="text-2xl font-bold group-hover:text-white">10.5k</p>
          <p className="group-hover:text-white">Sellers active on our site</p>
        </div>

        <div className="group w-[270px] h-[230px] p-6 border rounded-lg flex flex-col items-center justify-center text-gray-800 hover:bg-red-500">
          <div className="mb-6 p-3 bg-black rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)] group-hover:shadow-[0px_0px_0_8px_rgba(255,251,251,0.4)] group-hover:!bg-white">
            <FaDollarSign className="text-3xl mb-1 text-white group-hover:!text-black" />
          </div>
          <p className="text-2xl font-bold group-hover:text-white">33k</p>
          <p className="group-hover:text-white">Monthly Product Sale</p>
        </div>

        <div className="group w-[270px] h-[230px] p-6 border rounded-lg flex flex-col items-center justify-center text-gray-800 hover:bg-red-500">
          <div className="mb-6 p-3 bg-black rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)] group-hover:shadow-[0px_0px_0_8px_rgba(255,251,251,0.4)] group-hover:!bg-white">
            <FaShoppingBag className="text-3xl mb-1 text-white group-hover:!text-black" />
          </div>
          <p className="text-2xl font-bold group-hover:text-white">45.5k</p>
          <p className="group-hover:text-white">Customers active on our site</p>
        </div>

        <div className="group w-[270px] h-[230px] p-6 border rounded-lg flex flex-col items-center justify-center text-gray-800 hover:bg-red-500">
          <div className="mb-6 p-3 bg-black rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)] group-hover:shadow-[0px_0px_0_8px_rgba(255,251,251,0.4)] group-hover:!bg-white">
            <FaSackDollar className="text-3xl mb-1 text-white group-hover:!text-black" />
          </div>
          <p className="text-2xl font-bold group-hover:text-white">25k</p>
          <p className="group-hover:text-white">
            Annual gross sale on our site
          </p>
        </div>
      </div>
      
      {/* Profile Card */}
      <div className="flex flex-row justify-evenly mx-auto max-w-6xl my-[140px]  gap-4 ">
        <div className="flex flex-col items-center justify-center w-[370px] h-[430px] gap-8">
          <div>
            <img
              src={Tom}
              alt="Tom Cruise"
              className="w-[370px] h-[430px] bg-[#F5F5F5]"
            />
          </div>
          <div className="text-center mr-[220px]">
            <p className="text-2xl font-medium font-inter leading-[30px] tracking-[0.04em] text-left text-black">
              Tom Cruise
            </p>
            <p className="font-poppins text-base font-normal leading-6 text-left text-black">
              Founder & Chairman
            </p>
            <div className="gap-4 mt-4 flex flex-row items-center">
              <SlSocialTwitter className="w-[27.06px] h-[24px]" />
              <SlSocialInstagram className="w-[18px] h-[18px]" />
              <SlSocialLinkedin className="w-[17.5px] h-[17.5px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-[370px] h-[430px] gap-8">
          <div>
            <img
              src={Emma}
              alt="Emma Watson"
              className="w-[370px] h-[430px] bg-[#F5F5F5]"
            />
          </div>
          <div className="text-center mr-[183px]">
            <p className="text-2xl font-medium font-inter leading-[30px] tracking-[0.04em] text-left text-black">
              Emma Watson
            </p>
            <p className="font-poppins text-base font-normal leading-6 text-left text-black">
              Managing Director
            </p>
            <div className="gap-4 mt-4 flex flex-row items-center">
              <SlSocialTwitter className="w-[27.06px] h-[24px]" />
              <SlSocialInstagram className="w-[18px] h-[18px]" />
              <SlSocialLinkedin className="w-[17.5px] h-[17.5px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-[370px] h-[430px] gap-8">
          <div>
            <img
              src={Will}
              alt="Will Smith"
              className="w-[370px] h-[430px] bg-[#F5F5F5]"
            />
          </div>
          <div className="text-center mr-[220px]">
            <p className="text-2xl font-medium font-inter leading-[30px] tracking-[0.04em] text-left text-black">
              Will Smith
            </p>
            <p className="font-poppins text-base font-normal leading-6 text-left text-black">
              Product Designer
            </p>
            <div className="gap-4 mt-4 flex flex-row items-center">
              <SlSocialTwitter className="w-[27.06px] h-[24px]" />
              <SlSocialInstagram className="w-[18px] h-[18px]" />
              <SlSocialLinkedin className="w-[17.5px] h-[17.5px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Last part */}

      <div className="flex justify-between py-[8.75rem] mx-auto max-w-6xl">
        <div className="text-center flex flex-col items-center ">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <FaShippingFast className="text-4xl  text-white  " />
          </div>

          <h3 className="mb-2 text-lg font-bold">FREE AND FAST DELIVERY</h3>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <FaHeadset className="text-4xl  text-white" />
          </div>
          <h3 className="mb-2 text-lg font-bold">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <GoShieldCheck className="text-4xl text-white" />
          </div>
          <h3 className="mb-2 text-lg font-bold">MONEY BACK GUARANTEE</h3>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;



