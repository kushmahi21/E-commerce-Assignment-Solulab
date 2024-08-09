const Account = () => {
  return (
    <div className="max-w-6xl mx-auto mt-[181px] mb-[140px] flex flex-row justify-between">
        <div className="w-1/4 items-center">
          <h3
            className=" font-medium font-poppin text-base text-black mb-2"
          >
            Manage My Account
          </h3>
          <ul
            className="font-poppin text-base pl-9"
          >
            <li className=" rounded hover:text-red-900 opacity-50 cursor-pointer">My Profile</li>
            <li className="opacity-50">Address Book</li>
            <li className="opacity-50">My Payment Options</li>
          </ul>
          <h3
            className="font-medium font-poppin text-base text-black mt-8 mb-2"
          >
            My Orders
          </h3>
          <ul
            className="space-y-1 font-poppin text-base pl-9"
          >
            <li className="opacity-50">My Returns</li>
            <li className="opacity-50">My Cancellations</li>
          </ul>
          <h3
            className="font-medium font-poppin text-base mt-8 mb-6"
          >
            My Wishlist
          </h3>
        </div>
      
      <div className="w-3/4 shadow-sm">
      <div className="mx-20 my-10">
      <h3 className="text-base font-medium font-poppin text-red-500 mb-8">Edit Your Profile</h3>
      <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text" placeholder="First Name"
                  className="w-full h-12 border border-gray-300 rounded px-3 py-2 bg-[#F5F5F5]"
                  
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text" placeholder="Last Name"
                  className="w-full h-12 border border-gray-300 rounded px-3 py-2 bg-[#F5F5F5]"
                  
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email" placeholder="Email"
                  className="w-full h-12 border border-gray-300 rounded px-3 py-2 bg-[#F5F5F5]"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text" placeholder="Address"
                  className="w-full h-12 border border-gray-300 rounded px-3 py-2 bg-[#F5F5F5]"  
                />
              </div>
            </div>
            <h3
              className="font-medium font-poppin text-base"
            >
              Password Changes
            </h3>
            <div>
              <label className="block text-gray-700">Current Password</label>
              <input
                type="password" placeholder="Current Password"
                className="w-full h-12 border border-gray-300 rounded px-3 py-2 bg-[#F5F5F5]"
              />
            </div>
            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                type="password" placeholder="New Password"
                className="w-full h-12 border border-gray-300 rounded px-3 py-2 bg-[#F5F5F5]"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password" placeholder="Confirm New Password"
                className="w-full h-12 border border-gray-300 rounded px-3 py-2 bg-[#F5F5F5]"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="h-14 bg-gray-200 text-gray-700 px-4 py-2 rounded "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="h-14 bg-red-500 text-white px-11 py-3 rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
      </div>
          
        </div>
    </div>
  );
};

export default Account;
