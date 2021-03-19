import React from "react";
import "./styles/Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { motion } from "framer-motion";

const Header = () => {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <motion.div exit={{opacity:0}} animate={{opacity: 1}}  transition={{duration:.3}} initial={{opacity:0}} className='header'>
      <Link className='logo__container' to='/'>
        <GraphicEqIcon className='header__logo' />
        <h2>Marcketarc</h2>
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>
              Hello {user ? user.email : "Guest"}
            </span>
            <span className='header__optionLineTwo'>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>Orders</span>
        </div>

        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;
