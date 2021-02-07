import React from 'react';
import './assets/Footer.css';
import logof from './assets/images/Space.png';

function FooterPage() {
  return (
    <div id="FooterPage">

      <img src={logof} alt="logo" id="logo" />

      <div id="fotertext1">
        <div id="footerInformation">
          <p id="footerp">
            Convallis turpis erat tempus,viverra elequat.
       <br />Nullam viverriea nam auctor sit epsum
      <br />  malesuida a ,duis volutpat. Convallis



      </p> </div>

        <div id="link1">
          <ul id="footerList1" >
            <li id="liFooter1"> Pages </li> <br /> <br />
            <li id="liFooter1">Templates</li>
            <li id="liFooter1">Price</li>
            <li id="liFooter1">Help</li>
            <li id="liFooter1">Contact</li>
          </ul> </div>
        <div id="link2">
          <ul id="footerList2" >
            <li id="liFooter2">Demos</li> <br />
            <li id="liFooter2">Dark theme</li>
            <li id="liFooter2">Light Theme</li>
            <li id="liFooter2">Classic Theme</li>
          
          </ul> </div>
        <div id="link3">
          <ul id="footerList3" >
            <li id="liFooter3">Resources</li> <br />
            <li id="liFooter3">Documentation</li>
            
          </ul>
        </div>

       
      </div>
      <p id="copyrights">(c)2019-2020 All rights reserved
      <div id="lastxt">Terms of service</div></p>
    </div>
  )
}

export default FooterPage
