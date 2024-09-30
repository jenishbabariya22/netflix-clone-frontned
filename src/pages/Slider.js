import { useState } from "react";
import "../App.css";

const images = [
  "https://images.flickreel.com/wp-content/uploads/2016/06/fantasticfour.jpg",
  "https://www.cinemastance.com/wp-content/uploads/2016/01/5th_wave-wide-gun-wallpaper.jpg",
  "https://daveexaminesmovies.files.wordpress.com/2016/10/watchmen-4fe378ef443bd.jpg",
  "https://i.pinimg.com/originals/b0/02/4e/b0024ec3106e6783a2a860b9b1a00c8f.jpg",
  "https://grandgames.net/puzzle/f1200/spider-man.jpg"
];

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const moveRight = () => {
    setSliderIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const moveLeft = () => {
    setSliderIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="slider-container">
      <button className="slider-button left-button" onClick={moveLeft}>
        &#60;
      </button>
      <div className="slider-wrapper">
        <div
          className="slider"
          style={{
            transform: `translateX(-${sliderIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out"
          }}
        >
          {images.map((image, index) => (
            <div className="slider-item" key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="slider-button right-button" onClick={moveRight}>
        &#62;
      </button>
    </div>
  );
}
