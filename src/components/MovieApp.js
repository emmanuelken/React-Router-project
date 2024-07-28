import React, { useState } from 'react';
import '../App.css';
import Filter from './Filter';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MovieApp = () => {
  const [movies, setMovies] = useState([
    { title: 'Equalizer', 
      description: 'Action thriller', 
      posterURL: process.env.PUBLIC_URL + "/Equalizer.jpeg", 
      rating: 8.8,
      trailerURL: 'https://www.youtube.com/embed/VjctHUEmutw?si=nsT-Apr8L8gwPSO7'
    },

    { title: 'Vikings', 
      description: 'A Tv series', 
      posterURL: process.env.PUBLIC_URL + "/Viking.jpeg", 
      rating: 8.6,
      trailerURL: 'https://www.youtube.com/embed/9GgxinPwAGc?si=3s2nW6H-oMxaU08U'
    },
    // Add more movies as needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <h1>MY FAVORITE MOVIES</h1>
                <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
                <MovieList movies={filteredMovies} />
                <div>
                  <h2>Add a New Movie</h2>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const newMovie = {
                      title: e.target.title.value,
                      description: e.target.description.value,
                      posterURL: e.target.posterURL.value,
                      rating: e.target.rating.value,
                      trailerURL: e.target.trailerURL.value,
                    };
                    addMovie(newMovie);
                    e.target.reset();
                  }}>
                    <input type="text" name="title" placeholder="Title" required />
                    <input type="text" name="description" placeholder="Description" required />
                    <input type="text" name="posterURL" placeholder="Poster URL" required />
                    <input type="number" name="rating" placeholder="Rating" required min="0" max="10" />
                    <input type="text" name="trailerURL" placeholder="Trailer URL" required />
                    <button type="submit">Add Movie</button>
                  </form>
                </div>
              </section>
            }
          />
          <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MovieApp;
