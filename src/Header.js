import React from "react";
import "./Header.css"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
 
function Header(){
    return (
      <div className="header">
        <div className="header_logo">
          <StorefrontIcon className="header-logoImage" fontSize="large" />
          <h2>eShop</h2>
        </div>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="heater_searchIcon" />
        </div>
        <div className="header_nav">
          <div className="nav-item">
            <span className="nav_itemLineOne">Hello Guest</span>
            <span className="nav_itemLineTwo">Sing in</span>
          </div>
          <div className="nav-item">
            <span className="nav_itemLineOne">Your</span>
            <span className="nav_itemLineTwo">Shop</span>
          </div>
          <div className="nav-item">
            <ShoppingBasketIcon fontSize="large" className="itemBasket" />
            <span className="nav_itemLineTwo nav_basketCount">0</span>
          </div>
        </div>
      </div>
    );
}

export default Header;