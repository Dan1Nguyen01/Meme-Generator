import React from "react";
import Header from "./component/Header";
import Meme from "./component/Meme";
import data from "./memesData";

export default function App() {
  return (
    <nav>
      <div>
        <Header />
        <Meme />
      </div>
    </nav>
  );
}
