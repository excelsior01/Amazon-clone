import React, { useRef, useEffect } from "react";
import "./styles/Shopping.scss";
import Product from "./Product";
import gsap from "gsap";
import Slider from "./Slider";
import { SliderData } from "./SliderData";
import { motion } from "framer-motion";
import heroImg from "../assets/heroimg.jpg";
import { Link } from "react-scroll";

function Shopping() {
  let heroMsg = useRef("");
  let heroH = useRef("");
  let heroP = useRef("");

  useEffect(() => {
    gsap.from(heroMsg, 1, {
      x: 10,
    });

    gsap.from(heroH, 1, {
      opacity: 0,
      x: -20,
    });

    gsap.from(heroP, 1, {
      opacity: 0,
      x: -20,
    });
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      className='home'
    >
      <div className='home__container'>
        <img className='home__image' src={heroImg} alt='' />
        <div ref={(el) => (heroMsg = el)} className='hero__message'>
          <Link
            activeClass='active'
            to='home_row'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <h3 ref={(el) => (heroH = el)}>Marcketarc</h3>
            <p ref={(el) => (heroP = el)}>Everything you need within a click</p>
          </Link>
        </div>

        <div className='home__row' id='home_row'>
          <Product
            id='12321341'
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
            price={11.96}
            rating={5}
            imgSource='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            desc='Lean startup is a methodology for developing businesses and products that aims to shorten product development cycles and rapidly discover if a proposed business model is viable; this is achieved by adopting a combination of business-hypothesis-driven experimentation, iterative product releases, and validated learning.'
          />
          <Product
            id='49538094'
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={239.0}
            rating={4}
            imgSource='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
            desc='STYLE AND RELIABILITY: For those that love baking, the Kenwood kMix stand mixer with glass bowl offers a stylish blend of colour, retro design and classic Kenwood reliability for all your cooking
             NON-STICK BAKING: A full set of non-stick baking tools including the K-beater, balloon whisk and the dough hook, making baking bread and mixing cake batter easy and stress free'
          />
        </div>

        <div className='home__row'>
          <Product
            id='4903850'
            title='Fitbit Charge 4, Health and Fitness Tracker, Black'
            price={199.99}
            rating={5}
            imgSource='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            desc='Battery Life: Up to 7 days
            Compatibility: Compatible with iOS 12.2 or higher & Android OS 7.0 or higher
            Built-in GPS: With built-in GPS, leave your phone behind and explore the outdoors with pace and distance on your tracker and see a workout intensity map showing your route and effort in the app when you’re done'
          />
          <Product
            id='23445930'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={98.99}
            rating={5}
            imgSource='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            desc='Echo Dot is a hands-free, voice-controlled device that uses the same far-field voice recognition as Amazon Echo. Dot has a small built-in speaker - it can also connect to your speakers over Bluetooth or with the included audio cable.'
          />
          <Product
            id='3254354345'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={598.99}
            rating={3}
            imgSource='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
            desc="The Apple iPad Pro is a 12.9-inch touch screen tablet PC that is larger and offers higher resolution than Apple's other iPad models.
            Apple has positioned the iPad Pro toward business users and consumers that want a desktop PC-like device experience, offering more power, resolution and support for advanced features."
          />
        </div>

        <div className='home__row'>
          <Product
            id='90829332'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            imgSource='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
            desc="49 inch dual QHD curved gaming monitor, the equivalent of dual 27 inch QHD displays side-by-side
            120Hz refresh rate with AMD Free Sync 2 technology for crisp HDR content display, reduced input latency, low frame rate compensation
            HDR1000 Supports a peak brightness rating of 1,000 nits for true high Dynamic Range
            "
          />
        </div>
        <Slider slides={SliderData} />
      </div>
    </motion.div>
  );
}

export default Shopping;
