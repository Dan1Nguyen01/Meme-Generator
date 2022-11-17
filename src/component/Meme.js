import React from "react";
// import memesData from "../memesData";
export default function Meme() {
  //create object meme
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  //create new State
  const [allMeme, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((items) => setAllMemes(items.data.memes));
  }, []);

  // const [memeImage, setMemeImage] = React.useState(
  //   "http://i.imgflip.com/1bij.jpg"
  // );

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const randomURL = allMeme[randomNumber].url;

    // setMemeImage((prevState) => (prevState = randomURL));
    //or better way

    setMeme((prevState) => ({
      ...prevState,
      randomImage: randomURL,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="nav-meme">
      <div className="meme-main">
        <input
          type="text"
          className="input-meme-top"
          placeholder="Top text"
          name="top"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="input-meme-bottom"
          placeholder="Bottom text"
          name="bottom"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="img-button" onClick={getMemeImage}>
          Get a new meme image🖼
        </button>
      </div>
      <div className="main-meme-div">
        <img src={meme.randomImage} className="meme-img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
