import './App.css';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";

function App() {
return (
  <div className="App">
    <div className="header_logo">
      <StorefrontIcon />

    </div>
    <div className="header_search">

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
       <ShoppingBasketIcon fontSize='large'/>
        <span className="nav_itemLineTwo">0</span>
      </div>
    </div>
  </div>
);
 
}

export default App;
