import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    movieList: 20,
    addNumber: 10,
    detail: false,
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=${this.state.movieList}`
    );
    this.setState({ movies: movies, isLoading: false, detail: false });
    window.scrollTo(0, 0);

    if (!this.state.detail) {
      document.querySelector("#header").style.backgroundColor = "black";
      document.querySelector("#header").style.position = "fixed";
    }
  };

  addmore = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=${this.state.movieList}`
    );
    const { movieList, addNumber } = this.state;
    this.setState({ movies: movies, movieList: movieList + addNumber });
    if (movieList > 40) {
      document.querySelector("#addBtn").style.display = "none";
    }
  };

  componentDidMount() {
    this.getMovies();
    this.addmore();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div>
            <div className="movies">
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    posterM={movie.medium_cover_image}
                    posterL={movie.large_cover_image}
                    genres={movie.genres}
                    bg={movie.background_image}
                    runtime={movie.runtime}
                  />
                );
              })}
            </div>
            <button id="addBtn" onClick={this.addmore}>
              Add more
            </button>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
