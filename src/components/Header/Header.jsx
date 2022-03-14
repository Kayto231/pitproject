import "../../index.scss";

import React from "react";

const Header = () => {
  return (
    <div className="navBar__column">
      <nav>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <ul className="last__Ul">
          <li>
            <a href="#">Sign in</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
