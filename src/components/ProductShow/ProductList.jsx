import { useEffect } from "react";
import { fetchProduct } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductListUI from "./ProductListUI";


const ProductList = () => {

const dispatch = useDispatch();
const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const status = useSelector((state) => state.products.status);

  if (status === "loading..") {
    return <div>loading..</div>;
  }


  return (
    
    <ProductListUI product={product}/>
  );
};

export default ProductList;
