import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={`${styles.normalFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1 ? "text-[green]" : "text-black "
              } font-[500] px-6 cursor-pointer}`}
            >
              {i.title}{" "}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
