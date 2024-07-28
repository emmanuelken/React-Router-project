import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../MovieDetail.css'

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.title === title);

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="movie-detail">
      {movie ? (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <div className="trailer">
          <iframe width="560" height="315" src={movie.trailerURL} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <button onClick={goBack}>Back to Home</button>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDetail;
