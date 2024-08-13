import Frame from "../../img/Frame1.png";

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto flex">
      <aside className="w-2/12 py-10 pr-4 border-r-[0.5px] border-r-black border-opacity-30">
        <ul className="">
          <li className="my-2">
            <a href="#women-shopping">Woman's Fashion </a>
          </li>
          <li className="my-2">
            <a href="#men-shopping">Men's Fashion </a>
          </li>
          <li className="my-2">
            <a href="#electronics">Electronics</a>
          </li>
          <li className="my-2">
            <a href="#home-appliances">Home & Lifestyle</a>
          </li>
          <li className="my-2">
            <a href="#books">Medicine</a>
          </li>
          <li className="my-2">
            <a href="#toys">Sports & Outdoor</a>
          </li>
          <li className="my-2">
            <a href="#toys">Baby's & Toys</a>
          </li>
          <li className="my-2">
            <a href="#toys">Groceries & Pets</a>
          </li>
          <li className="my-2">
            <a href="#toys">Health & Beauty</a>
          </li>
        </ul>
      </aside>
      <div className="w-9/12 h-2/6 px-11 py-14">
        <div className="relative w-full h-64 py-10 bg-gray-300 flex items-center justify-center">
          <img src={Frame} />
          {/* <span className="text-2xl">Image Slider</span> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
