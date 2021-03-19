import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { Link } from "react-router-dom";
import "./styles/Slider.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft onClick={prevSlide} className='left-arrow' />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <a href={slide.url}>
                <img src={slide.image} alt='image' />
              </a>
            )}
          </div>
        );
      })}

      <FaArrowAltCircleRight onClick={nextSlide} className='right-arrow' />
    </section>
  );
};

export default Slider;
