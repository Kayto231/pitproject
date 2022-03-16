import React from "react";

export const Order_Item = ({ title, img, format, price }) => {
  return (
    <div className="page_Item_Column">
      <div className="page_Order_Header">
        <div className="page_Order_description">
          <span>{title}</span>
          <span>{price} grn</span>
        </div>
        <img src={`./images/coffee${img}.${format}`} alt="coffee" />
      </div>
    </div>
  );
};
