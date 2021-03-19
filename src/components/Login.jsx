import React, {useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import "./styles/Login.scss";
import {auth, db} from "./Firebase";
import { motion } from "framer-motion";

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
      e.preventDefault();

      auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
              history.push('/')
             
          })
          .catch(error => alert(error.message))
  }

    
  const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/')
              
            }
        })
        .catch(error => alert(error.message))
}









  return (
    <motion.div className='login' initial={{opacity:0}} exit = {{opacity: 0 }}  transition={{duration:.3}} animate = {{opacity:1}}>
         <NavLink className='logo__container2' to='/'>
          <GraphicEqIcon className='header__logo' />
          <h2>Marketarc</h2>
        </NavLink>
      <div className='login__wrapper'>
       

        <div className='login__formContainer'>
           
          <form className="login__form" action=''>
            <h5>Email</h5>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={signIn} className="form__login_button btn btn-border-3">Sign In</button>
          </form>
          <div className="login__part2">
          <p className="formp">
            By signing-in you agree <br/> to Marketarc's Conditions of Use & Sale. <br/>
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice
          </p>

          <button onClick={register} className="form__register_button btn btn-border-4">Not registered yet? Create an Account</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
