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
          <Product
            id="1"
            title="WOMEN'S HANDBAGS"
            price={22}
            rating={4}
            image="https://media.istockphoto.com/id/1014076920/photo/luxury-white-leather-female-bag.jpg?s=612x612&w=0&k=20&c=ARsYnN1fqn2eQVAjT4TprPlTE6OpF3EJCY84oloASbU="
          />
          <Product
            id="2"
            title="truing shoes"
            price={102}
            rating={3}
            image="https://media.istockphoto.com/id/1337191336/photo/black-fashion-sport-shoe-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=DAsn_Qj_gjJ42BDr33CU10QO3ckCMD93KFyuP7qrvN8="
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="MC Book"
            price={1800}
            rating={5}
            image="https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Product
            id="4"
            title="Bike "
            price={1300}
            rating={3}
            image="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Product
            id="5"
            title="Toaster "
            price={220}
            rating={4}
            image="https://media.istockphoto.com/id/512747842/photo/toster-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=xnhzQmV_a-wS1XY8n0FKjVP5QLLpT5UMLAyeEGd5fQs="
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="sun glasses"
            price={340}
            rating={4}
            image="https://images.unsplash.com/photo-1567473810954-507d59716c25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuJTIwZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
    );
}
export default Home;