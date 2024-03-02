import React from "react";
import { Link } from "react-router-dom";
import { footercompanyLinks, footerSupportLinks } from "../../static/data";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        {/* Company Information */}
        <div className="col-span-1 sm:col-span-1">
          <img
            src={require("../../images/logo2.png")}
            height={108}
            width={192}
            alt="Logo"
            className="mb-6"
          />
          <p className="text-sm text-gray-400">
            The home and elements needed to create beautiful products.
          </p>
        </div>

        {/* Support Links */}
        <div className="col-span-1 sm:col-span-1">
          <h1 className="mb-6 font-semibold">Support</h1>
          <ul>
            {footerSupportLinks.map((link, index) => (
              <li key={index} className="mb-3">
                <Link
                  to={link.link}
                  className="text-gray-400 hover:text-teal-400 duration-300 text-sm leading-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright Information */}
        <div className="col-span-1 sm:col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
            <span>© {new Date().getFullYear()} Papier Factory</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
