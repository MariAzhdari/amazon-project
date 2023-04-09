import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return (
      <div className="home">
        <div className="home_container">
          <img
            src="https://media.istockphoto.com/id/1433595738/photo/close-up-shopping-trolley-on-laptop-and-small-boxes-inside.jpg?s=612x612&w=0&k=20&c=Tmc4g73pW7nWunGhHLFyyMpTYBdTwESfRKCLj04x5fc="
            alt=""
            className="home_image"
          />
        </div>
        <div className="home_row">
          <product />
          <product />
        </div>
        <div className="home_row">
          <product />
          <product />
          <product />
        </div>
        <div className="home_row">
          <product />
        </div>
      </div>
    );
}
export default Home;