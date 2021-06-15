import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Gallery from "../Gallery/Gallery.js";
import Footer from "../Footer/Footer.js";

function SavedMovies(props) {

  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <SearchForm
        movies={props.movies}
        savedMovies={props.savedMovies}
        setCheckboxOn={props.setCheckboxOn}
        setCheckboxOff={props.setCheckboxOff}
        searchSavedMovies={props.searchedSavedMovies}
        searchMovie={(movies) => props.searchMovie(movies)} 
      />
      <Gallery 
        movies={props.searchedSavedMovies}
        searchedMovies={props.searchedSavedMovies}
        deleteMovie={props.deleteMovie}
        checked={props.checked}
        myFilm={true} 
      />
      <Footer />
    </div>
  )
}

export default SavedMovies;
