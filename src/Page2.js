import React from 'react';
import './assets/Page2.css';
import FirstImage from './assets/images/peter 8.png';
import SecondImage from './assets/images/peter-10.png';


function Page2() {
    return (
        <div id="main2">
            <div  id="top2"> <h1>Requirements gathering <br /> and analysis for references </h1>  </div>
            <div id="top12">
            <p id="text3"> Convallis turpis erat tempus,viverra elequat. Nullam viverriea nam auctor sit epsum
                malesuida a ,duis volutpat. Convallis turpis erat tempus , viverra elequet . Nullam
                viverriea nom auctor sit epsum malesuida a, duis volutpat. 

 
            </p></div> 
            <div id="twoImages1">
            <img src={FirstImage} alt="firstImage" id="FirstImage" /> </div>
            <div id="twoImages2">
            <img src={SecondImage} alt="firstImage" id="SecondImage" />
            </div>
            
        </div> 
    )
}

export default Page2
