import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute.js';
import { register, login, getUserInfo, updateProfile, getAllSavedMovies, saveNewMovie, deleteMovie } from '../../utils/MainApi.js';
import apiMovies from '../../utils/MoviesApi.js';
import Page404 from '../Page404/Page404.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from "../Profile/Profile.js";
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";


function App() {
  const history = useHistory();

  // стейты по юзерам (рег, лог, инфо)
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [errorRegister, setErrorRegister] = React.useState("");
  const [errorLogin, setErrorLogin] = React.useState("");
  const [statusUpdateProfile, setStatusUpdateProfile] = React.useState("");

  // функция регистрации
  function handleRegister(data) {
    const { name, email, password } = data;
    return register(name, email, password)
      .then((res) => {
        if (!res || res.statusCode === 400) {
          setErrorRegister("Что-то пошло не так при регистрации...");
          throw new Error('Что-то пошло не так при регистрации...');
        }
        history.push('/signup');
        setErrorRegister("")
        return res;
      })
      .catch((err) => {
        setErrorRegister(err);
      });
  }

  // функция авторизации
  function handleLogin(data) {
    const { email, password } = data;
    return login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          setErrorLogin("")
          history.push('/');
        }        
      })
      .catch((err) => {
        setErrorLogin("Что-то пошло не так во время авторизации...");
        console.log(err);
      });
  }

  // проверка токена или остаемся постоянно в системе
  React.useEffect(() => {
    if (loggedIn) {
      const jwt = localStorage.getItem('jwt');
      history.push('/');
      getUserInfo(jwt)
      .then((res) => {
        if (res){
          setCurrentUser(res.user);
          setLoggedIn(true);
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  }, [loggedIn, history]);

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      tokenCheck(jwt);
    }
  }, [])

  function tokenCheck(jwt) {
    getUserInfo(jwt)
      .then((res) => {
        if (res){
          setCurrentUser(res.user);
          setLoggedIn(true);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  // редактируем профиль
  function handleEditProfile(data) {
    const { name, email } = data;
    const jwt = localStorage.getItem('jwt');
    updateProfile(name, email, jwt)
      .then((res) => {
        if (!res || res.statusCode === 400) {
          setStatusUpdateProfile("Что-то пошло не так во время обновления профиля...")
          throw new Error('Что-то пошло не так во время обновления профиля...');
        }
        setStatusUpdateProfile("Успешно!");
        setTimeout(() => {
          setStatusUpdateProfile("");
        }, 5000);
        setCurrentUser(res.user);
      })
      .catch((err) => {
        setStatusUpdateProfile(err);
        console.log(err);
      });
  }

  // Уходим в туман (деавторизация)
  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('searchedSavedMovies');
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
  }


  // Киномания
  const [movies, setMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [localMovies, setLocalMovies] = React.useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = React.useState([]);
  const [localSavedMovies, setLocalSavedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [checked, setChecked] = React.useState(false);

  // Загрузка всех фильмов
  React.useEffect(() => {
    apiMovies.getInitialFilms()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  // Загрузка сохраненных фильмов
  function getSavedMovies() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getAllSavedMovies(jwt)
        .then((res) => {
        setSavedMovies(res);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  
  React.useEffect(() => {
    getSavedMovies();
  }, []);

  // Сохранение фильма
  function saveOneMovie(movie) {
    const jwt = localStorage.getItem('jwt');
    saveNewMovie(movie, jwt)
    .then((res) => {
      getSavedMovies();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // Удаление фильма
  function deleteOneMovie(movieId) {
    const jwt = localStorage.getItem('jwt');
    deleteMovie(movieId, jwt)
      .then((res) => {
        getSavedMovies();
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  // Фильтр короткометражек (чекбокс)
  function setCheckboxOn() {
    setChecked(true);
  }
  function setCheckboxOff() {
    setChecked(false);
  }

  // Работа с локалсторедж (сохранить, достать)
  function searchMovie(data) {
    setSearchedMovies(data);
    const moviesToString = JSON.stringify(data);
    localStorage.setItem('searchedMovies', moviesToString);
  };

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('searchedMovies'));
    if (!movies) {
      setLocalMovies([])
    } else {
      setLocalMovies(movies);
    }
  }, [searchedMovies]);

  function searchSavedMovie(data) {
    setSearchedSavedMovies(data);
    const localSearchedMovies = JSON.stringify(data)
    localStorage.setItem('searchedSavedMovies', localSearchedMovies)
  }

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('searchedSavedMovies'));
    if (!movies) {
      setLocalSavedMovies(savedMovies);
    } else {
      setLocalSavedMovies(movies);
    }
  }, [searchedSavedMovies, savedMovies])


  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute path='/movies'
            checked={checked}
            setCheckboxOn={setCheckboxOn} setCheckboxOff={setCheckboxOff}
            saveMovie={saveOneMovie} deleteMovie={deleteOneMovie}
            searchMovie={searchMovie} searchedMovies={localMovies}
            movies={movies} savedMovies={savedMovies}
            loggedIn={loggedIn}
            component={Movies}
            />
          <ProtectedRoute path='/saved-movies'            
            checked={checked}
            setCheckboxOn={setCheckboxOn} setCheckboxOff={setCheckboxOff}
            deleteMovie={deleteOneMovie}
            movies={savedMovies} savedMovies={savedMovies}
            searchedSavedMovies={localSavedMovies}
            searchMovie={searchSavedMovie}
            loggedIn={loggedIn}
            component={SavedMovies}
            />
          <ProtectedRoute path='/profile'
            loggedIn={loggedIn}
            onEdit={handleEditProfile}
            error={statusUpdateProfile}
            signOut={signOut}
            component={Profile}
            />
          <Route exact path="/">
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="/signup">
            <Login onLogin={handleLogin} error={errorLogin}/>
          </Route>
          <Route path="/signin">
            <Register onRegister={handleRegister} error={errorRegister} />
          </Route>
          <Route component={Page404} />
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
