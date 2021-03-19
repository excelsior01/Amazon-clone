import React, { Component } from "react";
import "./styles/Footer.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Instagram from "@material-ui/icons/Instagram";

export default class Footers extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0 }}
        className='footer'
      >
        <div className='section sec1'>
          <div className='footer__item'>
            <h3>Get Started</h3>
            <div>
              <Link to='/' className='footer__item_link'>
                Home
              </Link>
              <Link to='/login' className='footer__item_link'>
                Sign Up
              </Link>
            </div>
          </div>
          <div className='footer__item'>
            <h3>About Us</h3>
            <div>
              <Link to='/' className='footer__item_link'>
                Contact us
              </Link>
              <Link to='/login' className='footer__item_link'>
                Reviews
              </Link>
            </div>
          </div>
          <div className='footer__item'>
            <h3>Support</h3>
            <div>
              <Link to='/' className='footer__item_link'>
                FAQ
              </Link>
              <Link to='/login' className='footer__item_link'>
                Help Desk
              </Link>
            </div>
          </div>
          <div className='footer__item'>
            <h3>Information</h3>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                ducimus harum maiores non impedit error dicta.
              </p>
            </div>
          </div>
        </div>
        <div className='section '>
          <Link className='logo__container' to='/'>
            <GraphicEqIcon className='header__logo' />
            <h2>Marcketarc</h2>
          </Link>
          <div className='socials'>
            <a
              className='logo__container twitter'
              target='_blank'
              href='https://twitter.com/'
            >
              <TwitterIcon className='header__logo' />
            </a>
            <a
              className='logo__container facebook'
              target='_blank'
              href='https://facebook.com/'
            >
              <FacebookIcon className='header__logo' />
            </a>
            <a
              className='logo__container instagram'
              href='https://www.instagram.com/'
              target='_blank'
            >
              <InstagramIcon className='header__logo' />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
}
