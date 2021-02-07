import React from 'react';
import './assets/Page7.css';
import d from'./assets/images/Group 501.png';
import a from'./assets/images/Group 500.png';
import b from'./assets/images/Group 499.png';
import c from './assets/images/Group 610.png';

function Page7() {
    return (
        <div>
            <h1 id="Page7"> Our Leadership</h1>
            <p id="text7">Convallis turpis erat tempus,<br />viverra  elequat. Nullam viverriea nam auctor<br /> sit epsum
                malesuida<br /> a ,duis volutpat</p>

        <div id="picards7">
            <img src={a} alt="succesa" id="succesa" />
            <img src={b} alt="succesb" id="succesb" />
            <img src={c} alt="succesc" id="succesc" />
            <img src={d} alt="succesd" id="succesd" />
        </div>
        </div>
    )
}

export default Page7
