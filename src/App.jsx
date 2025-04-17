import React from "react";
import "./App.css";
import "./media.css";
import Logo from "./components/header/logo/logo";
import Navbar from "./components/header/navbar/navbar";
import sabad from "./assets/sabad.svg";
import girlSmale from "./assets/girlSmale.svg";
import Explore from "./components/button/button";
import { Btn } from "./components/button/button";
import phone from "./assets/phone.svg";
import arrow from "./assets/arrow.svg";
import Card from "./components/cards/card";
import Footer from "./components/footer/footer";


const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Logo />
          <Navbar />
          <div className="img">
            <img className="sabad" src={sabad} alt="" />
            <img src={girlSmale} alt="" />
          </div>
        </nav>

        <div className="main">
          <div className="mainLeft">
            <p>WE’RE STILL</p>
            <h1>Filling up the spaces.</h1>
            <div className="btns">
              <Explore text="Explore Marketplace" />
              <Btn text="See Top Deals" />
            </div>
          </div>
          <img className="phone" src={phone} alt="" />
        </div>
      </header>

      <div className="middle">
        <p>Our Top Deals</p>
        <div style={{ display: "flex", gap: "8px" }}>
          <p>Explore</p>
          <img src={arrow} alt="" />
        </div>
      </div>

      <main>
        <section className="Cards">
          <Card />
          <Card />
          <Card />
        </section>
      </main>

      <div className="middle">
        <p>Best Selling Product</p>
        <div style={{ display: "flex", gap: "8px" }}>
          <p>Explore</p>
          <img src={arrow} alt="" />
        </div>
      </div>

      <main>
        <section className="Cards">
          <Card />
          <Card />
          <Card />
        </section>

        <section className="blue">
          <div className="text">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Don't miss out on our top deals! Dont worry we will not spam you.</p>
          </div>

            <div className="inpBtn">
              <input type="text" placeholder="Enter your Email Here "/>
<button className="subBtn">Subscribe</button>            </div>
        </section>
      </main>


      
      <Footer/>
     
    </div>
  );
};

export default App;
