import { Component } from "react";

class MovieCard extends Component {
   
   
    
   /*  addStars = ()=> {
        //first form of setstate
        // this.setState({
        //     stars : this.state.stars +0.5
        // })

        //second form of setstate  

        this.setState((prevState)=>{
            return{
                stars: prevState.stars +0.5
            }
        })
    }

     subStars = () =>{
        if(this.state.stars <= 0){
            return;
          }

        this.setState((prevState)=>{
            return{
                
               stars: prevState.stars -0.5
            }
        })
    }

    handleFav = () => {
        this.setState({
            fav :! this.state.fav
        })
        
    }

    handleCart = () =>{
        this.setState({
            cart : !this.state.cart
        })
    }
 */
    render() {
        
        const {title,plot,price,rating,stars,fav,cart} = this.props.movies;
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
                                <img  alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" className="str-btn" onClick={()=> {this.props.decStars(this.props.movies)}}/>
                                <img  alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                <img  alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" className="str-btn" onClick={() => {this.props.addStars(this.props.movies)}}/>
                                <span>{stars}</span>
                            </div>

                            {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> :<button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}

                            {cart ?<button className="Removecart-btn" onClick={this.handleCart}>Remove from cart</button>:<button className="cart-btn"onClick={this.handleCart}>Add to cart</button>}
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;