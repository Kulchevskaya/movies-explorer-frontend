import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Page404 from '../Page404/Page404.js';
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import Main from '../Main/Main.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Profile from "../Profile/Profile.js"
import Gallery from "../Gallery/Gallery.js"


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
          <Route path="/movies">
            <Header />
            <SearchForm />
            <Gallery />
          </Route>
          <Route path="/saved-movies">
            <Header />
            <SearchForm />
            <Gallery />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
