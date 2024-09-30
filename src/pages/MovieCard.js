import React from 'react';
import '../MovieCard.css'; // Import the CSS for styling

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title.slice(0, 19)}</h3>
        <p className="movie-description">{movie.description}</p>
        <button className="watch-button" style={{ marginTop: "20px" }}>Watch Now</button>
      </div>
    </div>
  );
};

export default MovieCard;
