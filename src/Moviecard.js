import { Component } from "react";

class MovieCard extends Component {
   
   
    

    render() {


        
        const {title,plot,price,poster,rating,stars,fav,cart} = this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        
                        <img alt="Poster" src={poster}/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>

                            <div className="star-dis">
                                <img  alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" className="str-btn" onClick={()=> {this.props.decStars(this.props.movies)}}/>
                                <img  alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                <img  alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" className="str-btn" onClick={() => {this.props.addStars(this.props.movies)}}/>
                                <span>{stars}</span>
                            </div>

                            {fav ? <button className="unfavourite-btn" onClick={() => {this.props.handleFav(this.props.movies)}}>Un-favourite</button> :<button className="favourite-btn"onClick={() => {this.props.handleFav(this.props.movies)}}>Favourite</button>}

                            {cart ?<button className="Removecart-btn" onClick={()=>{this.props.toggleCart(this.props.movies)}}>Remove from cart</button>:<button className="cart-btn" onClick={()=>{this.props.toggleCart(this.props.movies)}}>Add to cart</button>}
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;