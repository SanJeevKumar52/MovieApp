import { Component } from "react";

class MovieCard extends Component {
    constructor(){
        super();

        this.state ={
            title:"The Avanger ",
            plot : "Supernatural power in the movies.",
            price : 199,
            rating : 8.9
        }
    }
    render() {
        const {title,plot,price,rating} = this.state;
        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        
                        <img alt="Poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>

                            <div className="star-dis">
                                <img  alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" className="str-btn"/>
                                <img  alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                <img  alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" className="str-btn"/>
                                <span>0</span>
                            </div>

                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;