import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from "./moviesData"


import "./index.css"

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: movies,
      cartCount: 0
    }
  }



  handleIncStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) {
      return;
    }

    movies[mid].stars += 0.5;

    this.setState({
      movies: movies

    })
  }

  handleDecstar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].stars <= 0) {
      return;
    }


    movies[mid].stars -= 0.5;

    this.setState({
      movies: movies

    })

  }

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies
    })
  }

  handleAddtocart = (movie) => {
    let { movies,cartCount } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].cart = !movies[movieId].cart;

    if(movies[movieId].cart){
      cartCount += 1;
    }
    else{
      cartCount -= 1;
    }

    this.setState({
      movies,
      cartCount
    })

    console.log(cartCount);
  }

  render() {
    const { movies,cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList movies={movies}
                           addStars={this.handleIncStar }
                           decStars={this.handleDecstar }
                           toggleFav={this.handleToggleFav}
                           toggleCart={this.handleAddtocart}
        />
      </>

    );
  }
}

export default App;
