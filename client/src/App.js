import React, { createContext, useReducer } from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import SignOut from './components/LogOut';
import Error404 from "./components/Error404";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <>
      <UserContext.Provider value={{state, dispatch}}>

        <Navbar/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/signup">
            <Signup/>
          </Route>

          <Route exact path="/signout">
            <SignOut/>
          </Route>

          <Route path="*">
            <Error404/>
          </Route>
        </Switch>

      </UserContext.Provider>
    </>
  );
}

export default App;
// export { UserContext };