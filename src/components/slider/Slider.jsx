import { useState } from "react";
import "./slider.scss";

function Slider(props) {
  const [imgIndex, setImgIndex] = useState(null);

  function changeSlide(direction) {
    if (direction === "left") 
      setImgIndex(imgIndex > 0 ? imgIndex - 1 : props.images.length - 1)
    else 
      setImgIndex(imgIndex < props.images.length - 1 ? imgIndex + 1 : 0)
  }

  return (
    <div className="slider">
      {imgIndex !== null && (<div className="fullSlider">
        <div className="arrow">
          <img src="/arrow.png" alt="" onClick={() => changeSlide("left")}/>
        </div>
        <div className="imgContainer">
          <img src={props.images[imgIndex]} alt="" />
        </div>
        <div className="arrow">
          <img src="/arrow.png" className="right" alt="" onClick={() => changeSlide("right")}/>
        </div>
        <div className="close" onClick={() => setImgIndex(null)}>X</div>
      </div>)}
      <div className="bigImage">
        <img src={props.images[0]} alt="" onClick={() => setImgIndex(0)}/>
      </div>
      <div className="smallImages">
        {props.images.slice(1).map((image, index) => (
          <img key={index} src={image} alt="" onClick={() => setImgIndex(index + 1)} />
        ))}
      </div>
    </div>
  )
}

export default Slider;