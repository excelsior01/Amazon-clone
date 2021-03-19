import React, { useState } from "react";
import "./styles/Product.scss";
import { useStateValue } from "./StateProvider";

function Product({ id, title, imgSource, price, rating, desc }) {
  const [{ basket }, dispatch] = useStateValue();
  const [isActive, setActive] = useState(false);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        imgSource: imgSource,
        price: price,
        rating: rating,
        desc: desc
      },
    });
  };

  const revealDetails = () => {
    setActive(!isActive);
  };

  const hideDetails = () => {
    setActive(!isActive);
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img onMouseDown={revealDetails} src={imgSource} alt='' />

      <button className=' btn btn-border-3' onClick={addToBasket}>
        Add to Basket
      </button>

      <div
        onMouseUp={hideDetails}
        id='item__desc__details'
        className={
          isActive ? "product__display display__active" : "product__display"
        }
      >
        {desc}
      </div>
    </div>
  );
}

export default Product;
