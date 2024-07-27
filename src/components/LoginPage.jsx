import Sideimg from "../img/SideImage.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen text-gray-900 flex py-12 ">
      <div className=" flex flex-1">
        <div className="flex-1  text-center hidden lg:flex lg:w-7/12">
          <div
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${Sideimg})`,
            }}
          ></div>
        </div>
        <div className="lg:w-5/12  p-6 sm:p-12">
          <div className="mt-12 flex flex-col max-w-xs mx-auto">
            <h1 className="text-4xl xl:text-3xl font-inter tracking-wide font-medium">
              Create an account
            </h1>
            <div className="w-full flex-1 mt-2">
              <div className="">
                <div className=" inline-block font-poppin text-black tracking-wide font-normal ">
                  Enter your details below
                </div>
              </div>
              <div className="my-4">
                <input
                  className="w-full mb-7  py-4 border-b font-poppin border-black placeholder-gray-500 text-sm focus:outline-none"
                  type="name"
                  placeholder="Name"
                />
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
                <button className="mt-11 mb-4 tracking-wide font-poppin font-semibold bg-[#DB4444] text-gray-100 w-full py-4 rounded-[4px] ">
                  Create Account
                </button>

                <button className="w-full max-w-xs font-bold border border-black rounded-lg py-3  text-gray-800 flex items-center justify-center ">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with Google</span>
                </button>

                <p className="mt-6 text-xs text-black text-center font-poppin">
                  Already have Account?
                  <Link
                    to="/LoginPage"
                    className="text-xs border-b text-black hover:text-blue-500 pl-1 font-poppin"
                  >
                    Log IN
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
