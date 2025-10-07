import React, { useContext } from "react";
import { Mycontext } from "./Mycontext";
import Footer from "./Footer";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Wishlist() {
  const {like,setLike,cart,setCart} = useContext(Mycontext);
  console.log("Liked items:", like);

   function handleremove(prdt){
        setLike(like.filter(item=>item!==prdt))

    }
    function handlecart(prod){
        if(cart.includes(prod)){
            setCart(cart.filter(item=>item!==prod))
        }else{
            setCart([...cart,prod])
        }
    }




  return (
    <div>
     <Navbar expand="lg" className="homenav" style={{ backgroundColor: 'lightgray', height: "80px", top: "-10px" }}>
        <Container>
          <img src="/photos/icons.png" alt='logo' style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px' }} />
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "30px", fontFamily: "initial" }}>ZENVO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: 'auto', gap: '20px', marginRight: '20px', fontSize: '22px', }}>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/home">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <h2 style={{fontSize:"28px",color:"red"}}><span style={{color:"black"}}>WishListed</span> Items....</h2>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {
            like.map(product=>
                <div  style={{
                width: "250px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "10px",
              }}
            >
                    
                    <img src={product.image} alt="product"  style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }}/>
                    <h4 style={{ marginTop: "10px",fontFamily:"sans-serif" }}>{product.productname}</h4>
                    <h6  style={{ color: "#e91e63",fontFamily:"sans-serif" }}>Price ₹{product.price}</h6>
                    <button  style={{width: '110px', height: '30px', backgroundColor: "lightgrey", color: 'black', borderRadius: '20px' }} onClick={()=>handleremove(product)}>Remove</button>
                     <button style={{width: '117px', height: '30px', backgroundColor: "lightgrey", color: 'black', borderRadius: '20px' }} onClick={()=>handlecart(product)}>
                    {
                        cart.includes(product)?"Added🛒":"Add to Cart"
                    }
                    </button>
                </div>
            )
        }
 
    </div>
    <Footer/>
    </div>
  )
}

export default Wishlist;
