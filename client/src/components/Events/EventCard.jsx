import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active?"unset":"mb-12"} lg:flex p-2`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://static4.depositphotos.com/1007969/335/i/450/depositphotos_3354984-stock-photo-yellow-pencil-isolated-on-white.jpg" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          Nataraj 4B Pencil Yellow Color 12 Pcs
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum
          commodi, consequatur facilis recusandae iusto. Quia at debitis
          voluptate quos voluptatem possimus! Perspiciatis error necessitatibus
          doloremque odit at assumenda mollitia. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Odio rerum commodi, consequatur facilis
          recusandae iusto. Quia at debitis voluptate quos voluptatem possimus!
          Perspiciatis error necessitatibus doloremque odit at assumenda
          mollitia.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[red] pr-3 line-through">
              $12
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-roboto">
              $9
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#008B8B]">
            Sold: 1200 Units
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
