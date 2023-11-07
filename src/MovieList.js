import { Component } from "react";
import MovieCard from "./Moviecard";


class MovieList extends Component {


    render() {
        //const {title,plot,price,rating,stars,fav,cart} = this.state;
        const { movies,addStars, decStars,toggleFav,toggleCart } = this.props;
        console.log(this.props)
        return (
            <>
                {movies.map((movie) => <MovieCard movies={movie} 
                                                   addStars={addStars}
                                                   decStars={decStars}
                                                   handleFav={toggleFav}
                                                   toggleCart = {toggleCart}

               Key ={movie.id} />)}

            

            </>
        )
    }
}

export default MovieList;