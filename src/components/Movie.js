import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({
  id,
  year,
  title,
  summary,
  posterM,
  posterL,
  genres,
  bg,
  runtime,
}) {
  return (
    <Link
      className="movie"
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          posterM,
          posterL,
          genres,
          bg,
          runtime,
        },
      }}
    >
      <ul>
        <li className="movie-Card__front">
          <img src={posterL} alt={title} title={title} />
        </li>
        <li className="movie-Card__back">
          <h3 className="movie__title">
            {title} <span>({year})</span>
          </h3>
          <ul className="movie__genres">
            {[genres[0], genres[1], genres[2]].map((genre, index) => {
              return <li key={index}>{genre}</li>;
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 200)}...</p>
        </li>
      </ul>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  posterM: PropTypes.string.isRequired,
  posterL: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
