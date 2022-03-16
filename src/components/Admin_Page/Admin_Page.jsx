import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import { getAdminOrdersFunction } from "../../redux/action/admin_actions";

import { Admin_Item } from "./Admin_Item";
export const Admin_Page = () => {
  const dispatch = useDispatch();
  const { adminOrders } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(getAdminOrdersFunction());
  }, [dispatch]);
  console.log(adminOrders);
  return (
    <div className="admin_Page_Column">
      <div className="admin_Page_Header">
        {adminOrders.length >= 1 ? (
          adminOrders.map((el, i) => (
            <Admin_Item
              key={i}
              id={el.id}
              name={el.name}
              address={el.address}
              items={el.items}
            />
          ))
        ) : (
          <div>Orders are absent</div>
        )}
      </div>
    </div>
  );
};
