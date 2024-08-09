
const WishlistUi = () => {
  return (
    <div className="p-8 bg-gray-100">
      <section className="wishlist mb-8">
        <h2 className="text-2xl font-bold mb-4">Wishlist (4)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border p-4 bg-white shadow-lg">
            <span className="text-red-500">-25%</span>
            <img src="path/to/gucci-duffle-bag.jpg" alt="Gucci duffle bag" className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-bold">Gucci duffle bag</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-500">$960</span>
              <span className="line-through">$1160</span>
            </div>
            <button className="mt-2 px-4 py-2 bg-black text-white">Add To Cart</button>
          </div>
          <div className="border p-4 bg-white shadow-lg">
            <img src="path/to/rgb-cpu-cooler.jpg" alt="RGB liquid CPU Cooler" className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-bold">RGB liquid CPU Cooler</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-500">$1960</span>
            </div>
            <button className="mt-2 px-4 py-2 bg-black text-white">Add To Cart</button>
          </div>
          <div className="border p-4 bg-white shadow-lg">
            <img src="path/to/gp11-gamepad.jpg" alt="GP11 Shooter USB Gamepad" className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-bold">GP11 Shooter USB Gamepad</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-500">$550</span>
            </div>
            <button className="mt-2 px-4 py-2 bg-black text-white">Add To Cart</button>
          </div>
          <div className="border p-4 bg-white shadow-lg">
            <img src="path/to/quilted-jacket.jpg" alt="Quilted Satin Jacket" className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-bold">Quilted Satin Jacket</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-500">$750</span>
            </div>
            <button className="mt-2 px-4 py-2 bg-black text-white">Add To Cart</button>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-gray-800 text-white">Move All To Bag</button>
      </section>

      <section className="just-for-you mb-8">
        <h2 className="text-2xl font-bold mb-4">Just For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border p-4 bg-white shadow-lg">
            <span className="text-red-500">-25%</span>
            <img src="path/to/gaming-laptop.jpg" alt="ASUS FHD Gaming Laptop" className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-bold">ASUS FHD Gaming Laptop</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-500">$960</span>
              <span className="line-through">$1160</span>
            </div>
            <div className="text-yellow-500">65 ★</div>
            <button className="mt-2 px-4 py-2 bg-black text-white">Add To Cart</button>
          </div>
          <div className="border p-4 bg-white shadow-lg">
            <img src="path/to/lcd-monitor.jpg" alt="IPS LCD Gaming Monitor" className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-bold">IPS LCD Gaming Monitor</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-500">$1160</span>
            </div>
            <div className="text-yellow-500">65 ★</div>
            <button className="mt-2 px-4 py-2 bg-black text-white">Add To Cart</button>
          </div>
          <div className="border p-4 bg-white shadow-lg">
            <img src="path/to/havit-gamepad.jpg" alt="HAVIT HV-G92 Gamepad" className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-bold">HAVIT HV-G92 Gamepad</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-500">$560</span>
            </div>
            <div className="text-yellow-500">65 ★</div>
            <button className="mt-2 px-4 py-2 bg-black text-white">Add To Cart</button>
          </div>
          <div className="border p-4 bg-white shadow-lg">
            <img src="path/to/wired-keyboard.jpg" alt="AK-900 Wired Keyboard" className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-bold">AK-900 Wired Keyboard</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-500">$200</span>
            </div>
            <div className="text-yellow-500">65 ★</div>
            <button className="mt-2 px-4 py-2 bg-black text-white">Add To Cart</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WishlistUi