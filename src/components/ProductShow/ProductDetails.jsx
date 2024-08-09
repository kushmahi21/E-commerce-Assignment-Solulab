import { useEffect, useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { HiHome } from "react-icons/hi";
import Card from "../Card/Card";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();
  console.log(product);

  const fetchDetails = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(res.data);
  };

  const fetchRelatedProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const filteredProducts = res.data.filter(
      (item) => item.category === product.category
    );
    setRelatedProducts(filteredProducts);
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  useEffect(() => {
    if (product.category) {
      fetchRelatedProducts();
    }
  }, [product]);

  return (
    <>
      <div className="mt-20 ml-36">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/ViewProoductAll">
            Product Page
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/ProductDetails/:id">
            {product.title}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="flex flex-col mb-[140px]">
        <div className="flex flex-row justify-evenly mt-20">
          <div className="flex flex-row justify-evenly gap-[30px]">
            <div className=" w-[170px] h-[600px] flex flex-col gap-3">
              <div className="w-[168px] h-[138px] bg-[#F5F5F5] ">
                <img
                  src={product.image}
                  alt=""
                  className="w-[121px] h-[114px] mix-blend-multiply mx-6 my-3 object-contain"
                />
              </div>
              <div className="w-[168px] h-[138px] bg-[#F5F5F5] ">
                <img
                  src={product.image}
                  alt=""
                  className="w-[121px] h-[114px] mix-blend-multiply mx-6 my-3 object-contain"
                />
              </div>
              <div className="w-[168px] h-[138px] bg-[#F5F5F5] ">
                <img
                  src={product.image}
                  alt=""
                  className="w-[121px] h-[114px] mix-blend-multiply mx-6 my-3 object-contain"
                />
              </div>
              <div className="w-[168px] h-[138px] bg-[#F5F5F5] ">
                <img
                  src={product.image}
                  alt=""
                  className="w-[121px] h-[114px] mix-blend-multiply mx-6 my-3 object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-[500px] h-[600px] bg-[#F5F5F5]">
              <img
                className="w-[446px] h-[315px] mx-7 mt-[154px] mb-[131px] mix-blend-multiply object-contain"
                src={product.image}
                alt=""
              />
            </div>
          </div>
          <div className=" w-[400px] min-h-[600px] ">
            <h4 className="font-bold font-inter tracking-wider">
              {product.title}
            </h4>
            <div className="w-[290px] h-[21px]  mt-4 flex flex-row gap-3 items-center">
              <span>⭐⭐⭐⭐</span> <span>150 reviews</span>{" "}
              <span className="text-green-400">In-stock</span>
            </div>
            <p className="mt-4 font-inter text-xl">${product.price}</p>

            <p className="mt-4 font-poppin text-sm max-h-9 overflow-hidden">
              {product.description}
            </p>
            <div className="flex mt-6 flex-col justify-evenly border-zinc-300 border-t-2">
              <div className="flex flex-row gap-3 mt-6 items-center w-[150px] h-[20px]">
                <p className="font-poppin">Colours:</p> <p>⭕</p> <p>✅</p>
              </div>
              <div className="w-[296px] h-[32px] mt-6  flex gap-6 items-center">
                <p className="font-poppin">Size:</p>
                <div className="flex flex-row justify-evenly gap-4">
                  <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded hover:bg-red-500 text-black cursor-pointer">
                    XS
                  </div>
                  <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded  hover:bg-red-500 text-black cursor-pointer">
                    S
                  </div>
                  <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded hover:bg-red-500 text-black cursor-pointer">
                    M
                  </div>
                  <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded hover:bg-red-500 text-black cursor-pointer">
                    L
                  </div>
                  <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded hover:bg-red-500 text-black cursor-pointer">
                    XL
                  </div>
                </div>
              </div>
              <div className="flex mt-6 flex-row gap-4">
                <div className="w-[165px] h-[44px] border-2 flex flex-row justify-between border-zinc-300 rounded">
                  <div className="border-r-2 flex justify-center items-center border-zinc-300 w-[41px] text-xl font-semibold hover:bg-red-500 hover:text-white cursor-pointer">
                    +
                  </div>
                  <p className="flex items-center text-xl font-semibold">2</p>
                  <div className="border-l-2 flex justify-center items-center border-zinc-300 w-[41px] text-xl font-semibold hover:bg-red-500 hover:text-white cursor-pointer">
                    -
                  </div>
                </div>
                <div className="w-[165px] h-[44px] font-poppin flex justify-center border border-zinc-300 items-center text-black hover:bg-red-500 rounded hover:text-white cursor-pointer">
                  Buy Now
                </div>
                <div className="w-[40px] h-[40px] border-2 border-zinc-300">
                  {" "}
                </div>
              </div>
              <div className="w-[399px] h-[180px] mt-10 flex flex-col gap-4 border border-black justify-center">
                <div className="flex flex-row justify-evenly items-center py-3 border-b-2 ">
                  <TbTruckDelivery className="text-3xl" />
                  <div className=" flex flex-col gap-1">
                    <h1 className="font-poppin font-semibold">Free Delivery</h1>
                    <p className="font-poppin text-sm">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 items-center  ml-4">
                  <GiReturnArrow className="text-3xl " />
                  <div className=" flex flex-col gap-1">
                    <h1 className="font-poppin font-semibold">
                      Return Delivery
                    </h1>
                    <p className="font-poppin text-sm">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="relative w-[1170px] h-[518px] ml-[135px] mt-[150px] mb-[140px]">
            <div className="flex items-center mb-[60px]">
              <div className="flex items-center">
                <div className="w-5 h-10 bg-red-600 mr-3"></div>
                <div className="text-red-600 font-semibold font-poppin text-base">
                Related Item
                </div>
              </div>
            </div>
            <Card product={relatedProducts} />
          </div>
      </div>
    </>
  );
};

export default ProductDetails;
