import React from 'react';
import { useRouteMatch } from "react-router-dom";

function SearchForm(props) {
  const checkboxInput = document.querySelector('.SearchForm__checkbox');
  const moviesMatch = useRouteMatch("/movies");
  const savedMoviesMatch = useRouteMatch("/saved-movies");
  const initialData = { movie: '', };
  const [data, setData] = React.useState(initialData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData(data => ({
      ...data,
      [name]: value,
    }));
  }
  
  function resetForm() {
    setData(initialData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (moviesMatch) {
      handleSearchMovies(data.movie);
    } else if (savedMoviesMatch) {
      handleSearchSavedMovies(data.movie)
    }
    resetForm();
  }

  function handleSearchSavedMovies(name) {
    const valueFromInput = name.toLowerCase().split(' ').join('');
    const currentMovies = [];
    props.savedMovies.forEach((movie) => {
      const oneStringName = movie.nameRU.toLowerCase().split(' ').join('');
      const regexp = new RegExp(valueFromInput, 'igm');
      const match = regexp.test(oneStringName);
      if (match) {
        currentMovies.push(movie);
      }
    })
    console.log(currentMovies)
    props.searchMovie(currentMovies);
  }
  const handleSearchMovies = (name) => {
    const valueFromInput = name.toLowerCase().split(' ').join('');
    const currentMovies = [];
    if (checkbox()) {
      props.allMovies.forEach((movie) => {
        if (movie.duration > 40) {
          return
        } else {
          const oneStringName = movie.nameRU.toLowerCase().split(' ').join('');
          const regexp = new RegExp(valueFromInput, 'igm');
          const match = regexp.test(oneStringName);
          if (match) {
            currentMovies.push(movie);
          }
          props.searchMovie(currentMovies);
        }
      })
    } else {
      props.allMovies.forEach((movie) => {
        const oneStringName = movie.nameRU.toLowerCase().split(' ').join('');
        const regexp = new RegExp(valueFromInput, 'igm');
        const match = regexp.test(oneStringName);
        if (match) {
          currentMovies.push(movie);
        }
      })
      props.searchMovie(currentMovies);
    }
  }

  function checkbox() {
    if (checkboxInput.checked) {
      return true;
    } else {
      return false;
    }
  }
  function checkboxStatus() {
    if (checkboxInput.checked) {
      props.setCheckboxOn()
    } else {
      props.setCheckboxOff()
    }
  }
    
               

  return (
    <form className="SearchForm" method="POST" name="search-form" noValidate onSubmit={handleSubmit}>
      <div className="SearchForm__container">
      <label>    
        <input className="SearchForm__item SearchForm-item_type_search-input" name="movie" id="movie" placeholder="Фильм"
            type="text" required autoComplete="off" minLength="2"
            value={data.movie || ''} onChange={handleChange} />
          <span className="SearchForm__error-text" id="query-error"></span> 
        </label>
        <button type="submit" className="SearchForm__submit-button SearchForm__submit-button_type_query">Найти</button>
      </div>
      <div className="SearchForm__container">
        <input className="SearchForm__checkbox" onChange={() => checkboxStatus()} name="shorts" id="shorts" type="checkbox" />
        <label className="SearchForm__label" htmlFor="shorts">Короткометражки</label> 
      </div>
    </form>
  )
}

export default SearchForm;
