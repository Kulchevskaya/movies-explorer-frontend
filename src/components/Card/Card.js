import React from 'react';
import { useRouteMatch } from "react-router-dom";

function Card(props) {
  const moviesMatch = useRouteMatch("/movies");
  const savedMoviesMatch = useRouteMatch("/saved-movies");

  const movieURL = `https://api.nomoreparties.co${props.movie.image.url}`;
  const savedMovieURL = props.movie.image;

  function savedMoviesIds() {
    if (moviesMatch) {
      return props.savedMovies.map((item) => {
      return item.movieId;
      })
    }
  }

  const sameMovieId = () => savedMoviesIds().some((id) => {
    return props.movie.id === id;
    }
  )
  const isMovieSaved = () => {
    if (moviesMatch && sameMovieId()) {
      return true
    } else if (savedMoviesMatch) {
      return true
    }
  }

  function moviePicture() {
    if (moviesMatch) {
      return movieURL
    } else if (savedMoviesMatch) {
      return savedMovieURL
    }
  }

  function movieTrailer() {
    if (moviesMatch) {
      return props.movie.trailerLink;
    } else if (savedMoviesMatch) {
      return props.movie.trailer;
    }
  }
  function movieDuration() {
    const duration = props.movie.duration;
    if (duration < 60) {
      return `${duration}м`
    } else {
      const hours = Math.floor(duration / 60);
      const minutes = duration - hours * 60;
      return `${hours}ч ${minutes}м`
    }
  }
  function deleteMovie() {
    if (moviesMatch) {
      props.savedMovies.forEach((item) => {
        if (item.movieId === props.movie.id) {
          props.deleteMovie(item._id)
        }
      })
    } else if (savedMoviesMatch) {
        props.deleteMovie(props.movie._id)
    }
  }

  return (
    <li className="cards__item">
      <a href={movieTrailer()} target="blank">
        <img className="cards__image" src={moviePicture()} alt={props.movie.nameRU}/>
      </a>
      <div className="cards__box">
        <h2 className="cards__text">{props.movie.nameRU}</h2>
        {moviesMatch ? 
          <button className={isMovieSaved() ? "cards__like cards__like_active" : "cards__like"} 
          onClick={isMovieSaved() ? () => deleteMovie() : () => props.saveMovie(props.movie)}
          type="button"></button>
          :
          <button className="cards__dislike" onClick={() => deleteMovie()} type="button"></button>
        }
      </div>
      <hr className="cards__line" />
      <p className="cards__time">{movieDuration()}</p>
    </li>
  );
}

export default Card;