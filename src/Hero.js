import React from 'react';
import './assets/Hero.css';
import Space from './assets/images/Space.png';
import watch from './assets/images/bg.png';

import reviewer from './assets/images/Ellipse 34.png';


function Hero() {

    return (
        <div id="main">
            <div className="Header">
                <img src={Space} alt="space" id="image"></img>
                {/*-- mobile view --*/}
                <div id="mobileviewNav">
                    <div id="HamClicked" >
                        <div id="hamLine"></div>
                        <div id="hamLine"></div>
                        <div id="hamLine"></div>
                    </div>

                    <select id="mobList" className="mobList" >

                        <option>Home</option>
                        <option>Templates</option>
                        <option>Price</option>
                        <option>Help</option>
                        <option>GetInTouch</option>

                    </select>             </div>


                {/*---- laptop view*/}
                <ul id="ulNavbar">
                    <li id="liNavbar">Home</li>
                    <li id="liNavbar">Templates</li>
                    <li id="liNavbar">Price</li>
                    <li id="liNavbar">Help</li>
                    <li id="liNavbar">GetInTouch</li>
                </ul>



            </div>

            <div id="ImgAndTxt">
                <div id="imgdivformobileview">
            <img src={watch} align="right" alt="watch" id="hero"></img> </div>

            {/* second image and text of this page goes here */}
            <div id="sechero">
                <h1 id="heroline">Convallis turpis,<br />erat tempus<br />viverra aliquet.</h1>
 
                <div id="rsection">
                    <div id="review"><p>"I now feel so much less stressed :) <br /> as i now know by the book"</p>
                        <div id="ssection">
                            <img src={reviewer} alt="reviewerPic" id="reviewer"></img>

                            <h3 >Andry Ford<br />CEO at whatever</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
