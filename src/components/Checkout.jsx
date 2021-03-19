import React from "react";
import "./styles/Checkout.scss";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { motion } from "framer-motion";


const Checkout = () => {
  const [{ basket, user },dispatch] = useStateValue();
  
  return (
    <motion.div exit={{opacity:0}} animate={{opacity:1}} transition={{duration:.3}} initial={{opacity:0}} className='checkout'>
      <div className='checkout__top'>
        <div className='checkout__left'>
          <img
            className='checkout__ad'
            src='https://static.vecteezy.com/system/resources/previews/000/286/760/non_2x/vector-merry-christmas-sale-banner-template.jpg'
            alt=''
          />

          <div>
             <h5>Hi {user?.email  ? user?.email : "Guest"}</h5>
            <h2 className='checkout__title'>Your shopping Basket</h2>
          </div>
        </div>
        <div className='checkout__right'>
          <Subtotal />
        </div>
      </div>
      <div className='checkout__items'>
        {basket.map((e) => {
          return (
            <CheckoutProduct
              id={e.id}
              title={e.title}
              price={e.price}
              rating={e.rating}
              imgSource={e.imgSource}
            />
            
          );
        })}
         
      </div>
    </motion.div>
  );
};

export default Checkout;
