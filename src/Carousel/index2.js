import React from "react";

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App2() {
  return (
    <>
    <p id="dconcept" style={{textAlign:"center",fontSize:"25px",opacity:"0.2"}}>DESIGN CONCEPT</p>
    <h1 id="carouselh" style={{textAlign:"center",
                                marginTop:"5%",
                                fontSize:"50px",
  
  }}> The best design for your <br />studio  website</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>Name <br />Lorem Ipsum is simply dummy text of the printing and typesetting </Item>
          <Item>Name <br />Lorem Ipsum is simply dummy text of the printing and typesetting </Item>
          <Item>Lorem Ipsum is simply dummy text of the printing and typesetting </Item>
          <Item>Lorem Ipsum is simply dummy text of the printing and typesetting </Item>
          <Item>Lorem Ipsum is simply dummy text of the printing and typesetting </Item>
          <Item>Lorem Ipsum is simply dummy text of the printing and typesetting </Item>
          <Item>Lorem Ipsum is simply dummy text of the printing and typesetting </Item>
          <Item>Lorem Ipsum is simply dummy text of the printing and typesetting </Item>
        </Carousel>
      </div>
    </>
  );
}

/*const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */


export default App2;