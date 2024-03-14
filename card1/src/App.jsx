import React from "react";
import Card1 from "./components/Card1";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Card1
        imgSrc="http://picsum.photos/300/200"
        imgAlt="cardImage"
        title="Title"
        cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum pariatur
        cumque repellendus recusandae amet non natus maiores porro, assumenda
        sapiente."
        button="click here"
      ></Card1>
    </div>
  );
};

export default App;
