import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:good,w_1920/legacy_dam/en-us/S001525875/MXP6944-stationery-hero-full-001?cb=41cb9d0b5567420aef65a030be1e6885864434d5)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[crimson] font-[600] capitalize outline-4 outline-dotted outine-[white]`}  style={{  }}
        >
          Welcome to Papier Factory <br/> Your one-stop shop for all your stationery
          needs!
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[white]">
        We have a wide selection of products to help you stay organized and
          productive, including pens, pencils, notebooks, paper, and much more.
          Whether you're a student, working professional, or simply someone who
          loves to write, we have the perfect stationery for you. <br /> Shop
          today and see why we're the best place to buy stationery online!
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Buy Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
