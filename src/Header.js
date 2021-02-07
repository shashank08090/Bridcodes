import React from 'react';
import './assets/Hero.css';
import Space from './assets/images/Space.png';
import './assets/Header.css';


function Header() {
    
    return (
        <div id="main">
            <div className="Header2">
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



            </div> </div>
            )}

            export default Header;
