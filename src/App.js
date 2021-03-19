import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Shopping from "./components/Shopping";
import Login from "./components/Login";
import React, { useEffect } from "react";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/Firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./components/Order";
import Footers from "./components/Footers.jsx";
import { AnimatePresence } from "framer-motion";

const promise = loadStripe(
  "pk_test_51HfXmBKWrh9SDsTInoZ0Xt5fS2Vr05hAGkUMRrTD7CjNFNrVDJROeYK22jvxfm5OY4oQdKqPuekk6n8rdRcly4TN00Sxy4Lhgj"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //this code will only run once when the app component load ... onAuthStateChange() is a like an event listener
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in or was already logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <AnimatePresence>
          <Switch >
            <Route path='/orders'>
              <Header />
              <Order />
              <Footers />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Header />
              <Checkout />
              <Footers />
            </Route>
            <Route path='/payment'>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              <Footers />
            </Route>
            <Route path='/'>
              <Header />
              <Shopping />
              <Footers />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
