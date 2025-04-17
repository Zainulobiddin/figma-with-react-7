import React from "react";
import './card.css'
import './cardMedia.css'
import Explore from "../button/button";
import { Btn } from "../button/button";
import discount from "@/assets/discount.svg";
import heartImg from "@/assets/heartImg.svg";
import office from "@/assets/office.svg";

let about = "Nokia Essential Wireless Headphones 120CM BLACK";


const Card = () => {
    const cards = [
      {
        id: 1,
        discount: `${discount}`,
        heart: `${heartImg}`,
        office: `${office}`,
        number: "₦600,000",
        about: about,
      },
    ];

    return (
        <div>
            {
                cards.map((el) =>{
                    return <div key={el.id} className="card">
                        <div className="img">
                            <img src={el.discount} alt="" />
                            <img src={el.heart} alt="" />
                        </div>
                        <img src={el.office} alt="" />
                        <div className="img">
                            <button className="Audio">Audio Devices</button>
                            <h3>{el.number}</h3>
                        </div>
                        <p  className="about">{el.about}</p>
                        <div className="buttons">
                            <Btn text="Add to Cart" />
                            <Explore text="Buy Now" pY="14" pX="57"/>
                        </div>

                    </div>


                })
            }
        </div>
    )


}
         

export default Card;
