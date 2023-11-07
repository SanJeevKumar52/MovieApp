import React from "react";
import styled from "styled-components";


const Nav = styled.div`
width: 100%;
    height: 70px;
    background: linear-gradient(45deg, #ff6b6b, #ffc0cb);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;
const Title = styled.div`
font-size: 30px;
color: #fff;
font-weight: 600;
font-family: "Montserrat", sans-serif;
text-transform: uppercase;
margin-left: 20px;
&:hover{color:red}
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  
`;

// Styled component for cartIcon
const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
  
`;

// Styled component for cartCount
const CartCount = styled.span`
  background: ${(props)=> props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility :${(props)=>props.show?"visible":"hidden"}
  
`;

class Navbar extends React.Component {
    render() {
       let {cartCount} = this.props;
        return (
            <>

                <Nav>
                    <Title>Movie-App</Title>
                    <CartContainer>
                        <CartIcon alt="cart icon" src ="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"  />
                        <CartCount color="yellow" show ={true}>{cartCount}</CartCount>
                    </CartContainer>
                </Nav>

            </>
        )
    }
}

export default Navbar; 

const styles = {
    nav: {
        width: "100%",
        height: 70,
        background: "linear-gradient(45deg, #ff6b6b, #ffc0cb)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        

    },

    title:{
        fontSize:30,
        color :"#fff",
        fontWeight:600,
        fontFamily :'"Montserrat",sans-serif',
        textTransform : "uppercase",
        marginLeft :20

    }
    ,cartContainer:{
        position :"relative",
        cursor :"pointer"
    },
    cartIcon:{
        height:48,
        marginRight:20

    },

    cartCount :{
        background:"orange",
        borderRadius:"50%",
        padding:"4px 8px",
        position:"absolute",
        right: 10,
        top :-5,
        fontSize:12
    }
}