import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://seeklogo.com/images/C/cello-logo-56FCB51057-seeklogo.com.png"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://yt3.googleusercontent.com/ytc/APkrFKbkkC4xKvLwsUNPXxNHqReJzRn3ZDVC48WX0w6N=s900-c-k-c0x00ffffff-no-rj"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/jpeg;base64,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"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.pinimg.com/originals/6a/a8/96/6aa896eea16dc87bcc526ede4bd0ec24.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://admin.itsnicethat.com/images/yIFOPikJXOwYu2zE9uGw6yWkufQ=/214516/format-webp%7Cwidth-1440/7-Papier-Logo-Ragged-Edge.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
