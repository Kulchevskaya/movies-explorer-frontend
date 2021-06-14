import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Gallery from "../Gallery/Gallery.js";
import Footer from "../Footer/Footer.js";

function Movies(props) {
  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <SearchForm 
        allMovies={props.movies}
        setCheckboxOn={props.setCheckboxOn}
        setCheckboxOff={props.setCheckboxOff}
        getFilms={(data) => props.getFilms(data)}
        searchMovie={(movies) => props.searchMovie(movies)}
      />
      <Gallery 
        movies={props.searchedMovies}
        checked={props.checked}
        searchedMovies={props.searchedMovies}
        savedMovies={props.savedMovies}
        deleteMovie={props.deleteMovie}
        saveMovie={(movie) => props.saveMovie(movie)}
        myFilm={true} 
      />
      <Footer />
    </div>
  )
}

export default Movies;
