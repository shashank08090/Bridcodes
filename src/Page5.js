import React from 'react';
import './assets/Page5.css';
import Clocksign from './assets/images/Icon Artwork.png';
import Exclamation from './assets/images/X.png';

function Page5() {
    return ( 
        <div id="Page5">
            <div id="page5"><p id="topPg51">DESIGN CONCEPT</p>
                <h1 id="topPg52">The best design for your <br /> studio website</h1>
                <p id="text52">Convallis turpis erat tempus,viverra  elequat. Nullam viverriea nam auctor<br /> sit epsum
                malesuida a ,duis volutpat</p>
                <div id="page522"> {/* other half of page 5, for cards*/}

                {/* card1 */}
                <div id="exclaim1">
                    <div id="exclamation">
                <img src={Exclamation} alt="exclamation"  /> </div> <div id="internaltext11">
                <h1 id="card1" > Design Concept</h1> <p id="cardp1">Vitae nulla nunc euismod velpretium <br />
                    tellus accumansnan  nulla nunc euismod ve semper</p> </div> </div>
                    {/*card2 */}
                    <div id="clock1">
                        <div id="clocksign1">
                <img src={Clocksign} alt="clocksign" /> </div>
                <div id="internaltext12">
                <h1 id="card2">Developing websites</h1>
                <p>Vitae nulla nunc euismod velpretium <br />
                    tellus accumansnan  nulla nunc euismod ve semper</p> </div> </div>
                    {/*card3 */}
                    <div id="clock2"> 
                    <div id="clocksign2">
                <img src={Clocksign} alt="clocksign"  /> </div>
                <div id="internaltext21">
                <h1 id="card3">Developing websites</h1>
                <p>Vitae nulla nunc euismod velpretium <br />
                    tellus accumansnan  nulla nunc euismod ve semper</p> </div> </div>
                    {/*card4 */}
                    <div id="lastcard">
                        <div id="exclamation2">
                <img src={Exclamation} alt="exclamation" /> </div>
                <div id="internaltext22">
                <h1 id="card4">Design concepts</h1>
                <p>Vitae nulla nunc euismod velpretium <br />
                        tellus accumansnan  nulla nunc euismod ve semper</p> </div> </div>
                        </div>
            </div>
        </div>
    )
}

export default Page5
