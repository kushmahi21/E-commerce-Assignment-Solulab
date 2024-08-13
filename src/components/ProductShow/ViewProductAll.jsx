import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/ProductSlice";
import Card2nd from "../Card/Card2nd";
import { Breadcrumb } from "react-bootstrap";
import { HiHome } from "react-icons/hi";


const ViewProductAll = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
  const status = useSelector((state) => state.products.status);

  const [visibleProducts, setVisibleProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      setVisibleProducts(products.slice(0, ITEMS_PER_PAGE));
    }
  }, [products]);

  const fetchMoreData = () => {
    if (visibleProducts.length >= products.length) {
      setHasMore(false);
      return;
    }

    setVisibleProducts((prev) =>
      prev.concat(products.slice(prev.length, prev.length + ITEMS_PER_PAGE))
    );
  };

  if (status === "loading..") {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <div className="mt-20 ml-36">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/ViewProoductAll">Product Page</Breadcrumb.Item>
      </Breadcrumb>
      </div>
    <div className="max-w-7xl mx-auto h-auto my-12 gap-6">
      <div className="flex items-center mb-6">
        <div className="flex items-center">
          <div className="w-5 h-10 bg-red-600 mr-3"></div>
          <div className="text-red-600 font-bold font-poppin text-xl">
            All Products
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-4xl font-semibold font-inter leading-[48px] tracking-[0.04em] text-left text-black">
          Browse All Products
        </p>
      </div>
          <p className="flex justify-center">
            <b>Yay! You have seen it all</b>
          </p>
        <Card2nd product={visibleProducts} />
    </div>
   </div>
  );
};

export default ViewProductAll;