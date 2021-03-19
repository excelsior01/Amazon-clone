import React from "react";
import "./styles/CheckoutProduct.scss";
import {useStateValue} from "./StateProvider";


const CheckoutProduct = ({ id,title, price, imgSource, rating }) => {
  const [{basket},dispatch] = useStateValue();

  const removeFromBasket = () =>{
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      
    });
  }



  return (
    <div className='checkout__products'>
      <img src={imgSource} alt='' />
      <div className='desc'>
        <div className='checkproduct__info'>
          <p>{title}</p>
          <p className='checkproduct__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='checkproduct__rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
