import React from "react";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img src={require("../../images/logo2.png")} height={108} width={192} />
          <br />
          <p>The home and elements needeed to create beatiful products.</p>
        </ul>

        

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Papier Factory</span>
        <span>All rights reserved</span>
      </div>
      </div>

      
    </div>
  );
};

export default Footer;
