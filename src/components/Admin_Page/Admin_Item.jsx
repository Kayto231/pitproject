import React from "react";
import "../../index.scss";

export const Admin_Item = ({ name, address, items }) => {
  console.log(name);
  return (
    <div className="admin_Item_Border">
      <div className="admin_Item_Content">
        <div className="admin_Page_Name_Recipient">
          <div className="admin_Page_Item_Name">Name: {name}</div>
          <div className="admin_Page_Item_Address">Address: {address}</div>
        </div>
        <div className="admin_Page_Items">
          {items.length >= 1 ? (
            items.map((el, i) => (
              <div className="admin_Page_Items_Description" key={i}>
                <img src={`./images/coffee${el.img}.${el.format}`} alt="" />
                <div className="admin_Page_Item_Title">
                  <span>Coffee: {el.title}</span>
                  <span>Price: {el.price}</span>
                </div>
              </div>
            ))
          ) : (
            <div>Nothing is added</div>
          )}
        </div>
      </div>
    </div>
  );
};
