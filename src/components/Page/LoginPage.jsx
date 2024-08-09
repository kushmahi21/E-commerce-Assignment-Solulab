import Sideimg from "../../img/SideImage.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen text-gray-900 flex py-[8.75rem] ">
      <div className=" flex flex-1">
        <div className="flex-1  text-center hidden lg:flex lg:w-7/12">
          <div
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${Sideimg})`,
            }}
          ></div>
        </div>
        <div className="lg:w-5/12   sm:p-12">
          <div className="mt-32 flex flex-col max-w-xs mx-auto py-[14.25rem] ">
            <h1 className="text-4xl xl:text-3xl font-inter tracking-wide font-medium">
              Log in to Exclusive
            </h1>
            <div className="w-full flex-1">
              <div className="">
                <div className=" inline-block font-poppin text-black tracking-wide font-normal ">
                  Enter your details below
                </div>
              </div>
              <div className="my-4">
                <input
                  className="w-full mb-7  py-4 border-b font-poppin border-black placeholder-gray-500 text-sm focus:outline-none"
                  type="email"
                  placeholder="Email or Phone Number"
                />
                <input
                  className="w-full  py-4 border-b font-poppin border-black placeholder-gray-500 text-sm focus:outline-none"
                  type="password"
                  placeholder="Password"
                />
                <div className="flex flex-row justify-between">
                  <button className="mt-11 mb-4 tracking-wide font-poppin font-semibold bg-[#DB4444] text-gray-100 w-[143px] py-4 rounded-[4px] ">
                    Log In
                  </button>

                  <p className="mt-14 text-base font-normal text-[#DB4444] text-center font-poppin cursor-pointer">
                    Forget Password?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
