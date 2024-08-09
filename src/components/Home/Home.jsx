import Categories from "./Categories"
import HomePage from "./HomePage"
import ProductList from "../ProductShow/ProductList"
import BestSell from "./BestSell"
import Banner from "./Banner"
import ExplorePro from "./ExplorePro"
import Newarrival from "./Newarrival"
import LastHome from "./LastHome"


const Home = () => {
  return (
    <div>
      <HomePage/>
      <ProductList/>
      <Categories/>
      <BestSell/>
      <Banner/>
      <ExplorePro/>
      <Newarrival/>
      <LastHome/>
    </div>
  )
}

export default Home
