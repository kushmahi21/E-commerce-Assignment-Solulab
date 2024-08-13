import QrCode from "../img/Qrcode.png";
import Apple from "../img/apple.png";
import Play from "../img/play.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="w-full  bg-black text-white flex flex-col">
      <div className="flex flex-row text-white  max-w-6xl mx-auto py-20 gap-20">
        {/* Exclusive Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 font-inter">Exclusive</h2>
          <p className="mb-4">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="relative w-4/5">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-1 py-2 bg-black text-xs text-white border rounded-md placeholder-opacity-50 placeholder-white"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-1">
              <VscSend className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <p className="mb-2">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className="mb-2">exclusive@gmail.com</p>
          <p className="mb-2">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <ul>
            <li className="mb-2">My Account</li>
            <li className="mb-2">Login / Register</li>
            <li className="mb-2">Cart</li>
            <li className="mb-2">Wishlist</li>
            <li className="mb-2">Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Link</h2>
          <ul>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms Of Use</li>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>

        {/* Download Section */}
        <div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Download App</h2>
            <p className="mb-4 text-xs">Save $3 with App New User Only</p>
          </div>

          <div className="flex flex-row justify-evenly gap-2">
            <div className="mb-4">
              <img src={QrCode} alt="Qrcode" className="w-24 h-24" />
            </div>

            <div className="flex flex-col py-1 gap-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Play} alt="Google Play" className="w-32" />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Apple} alt="App Store" className="w-32" />
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-6 mr-9 gap-9">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="text-white hover:text-gray-400"
                size={24}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-gray-400" size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-white hover:text-gray-400"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="text-white hover:text-gray-400"
                size={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="!text-center !py-3 border-t border-t-[rgba(255,255,255,0.2)] ">
        <p className="opacity-30 text-xs">
          &copy; Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
