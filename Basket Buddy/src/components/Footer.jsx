import React from "react";
import { logo } from "../assets";
import { category, socialmedia } from "../constant/data";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-[100%] pl-8 md:pl-32 pt-4 md:pt-10">
      <div className="">
        <h2 className="text-[18px] md:text-[24px] font-medium">Categories</h2>
        <div className="mt-4 md:mt-8 mb-6 w-[100%]">
          <ul className="flex flex-col flex-wrap h-[300px] md:h-[200px] w-[200px] md:w-full gap-x-5 md:gap-x-0 text-[12px] md:text-[14px] text-[#575757]">
            {category.map((item, id) => (
              <li
                key={id}
                className="my-2 cursor-pointer"
                onClick={() => window.open(item.link)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="h-[2px] bg-[#97969690] w-[94%] rounded-lg my-8"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-32 mb-10 mt-12">
        <div className="">
          <img src={logo} alt="logo" />
          <div className="flex flex-row gap-4 mt-6">
            {socialmedia.map((socialmed, id) => (
              <div
                className="text-[20px] text-slate-600"
                key={id}
                onClick={() => window.open(socialmed.link)}
              >
                {socialmed.icon}
              </div>
            ))}
          </div>
          <p className="mt-5">&#169; NGK Tech Solutions.pvt</p>
        </div>
        <div className="flex flex-row gap-12 md:gap-x-32 mb-10 mt-6 md:mt-0">
          <div className="mt-8">
            <ul className="gap-4">
              <li className="mb-2">Home</li>
              <li className="mb-2">Delivery Areas</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Customer Support</li>
              <li className="mb-2">Press</li>
            </ul>
          </div>
          <div className="mt-8">
            <ul>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of Use</li>
              <li className="mb-2">Responsible Disclosure Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <p className="mb-2">Contact Us</p>
            <div className="mb-2">
              <p>Email: support@ngktechsolutions.com</p>
              <p>Phone: +91 7871577057</p>
              <p>Address: 57 North Street, New City, Kanchipuram , Tamilnadu-631501.</p>
            </div>
      
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
