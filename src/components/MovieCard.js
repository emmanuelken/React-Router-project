// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.title}`}>
        <img src={movie.posterURL} alt={movie.title} className="movie-card-img" />
        <h3>{movie.title}</h3>
      </Link>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
