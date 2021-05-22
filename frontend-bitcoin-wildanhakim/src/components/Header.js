import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="Navigation Flex Justify-even">
        <li>
          <NavLink to="/">Harga Bitcoin Hari Ini</NavLink>
        </li>
        <li>
          <NavLink to="/rptobtc">Konversi Rupiah ke BTC</NavLink>
        </li>
        <li>
          <NavLink to="/btctorp">Konversi BTC ke Rupiah</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
