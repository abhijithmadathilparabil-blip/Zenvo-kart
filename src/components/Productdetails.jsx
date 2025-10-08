import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col ,Button} from 'react-bootstrap';
import { Mycontext } from "./Mycontext";



function Productdetails() {

     const {products, cart, setCart, like, setLike,totalPrice} = useContext(Mycontext);
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);

    function handlecart(pdt) {
        if (cart.includes(pdt)) {
            setCart(cart.filter(item => item !== pdt))
        }
        else {
            setCart([...cart, pdt])

        }
    }
    console.log("Cart", cart);

    function handlelike(pp) {
        if (like.includes(pp)) {
            setLike(like.filter(item => item != pp))
        }
        else {
            setLike([...like, pp])
        }
    }

    if (!products) return <p>Product not found.</p>;





  return (
    <div>
         <Navbar expand="lg" className="homenav" style={{ backgroundColor: 'lightgray', height: "80px", top: "-10px" }}>
        <Container>
          <img src="/photos/icons.png" alt='logo' style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px' }} />
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "30px", fontFamily: "initial" }}>ZENVO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: 'auto', gap: '20px', marginRight: '20px', fontSize: '22px', }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
                <div className="card p-4 text-center bg-light" style={{ fontFamily: "sans-serif" }}>

                    
                    <Row>
                        <Col>
                            <h2 style={{ marginLeft: "60%" }} >{product.productnamename}</h2>
                        </Col>
                        <Col md={4}>
                            <button style={{ width: "20%", fontSize: "44px", marginTop: "9px", alignItems: "center", marginLeft: "44%", backgroundColor: "white", border: "none", color: "white", border: "none" }} onClick={() => handlelike(product)} 
                            title={like.includes(product) ? "Liked" : "Unliked"}>
                                {
                                    
                                    like.includes(product) ? "❤️" : "🤍" 
                                }
                            </button>
                        </Col>
                    </Row>
                      <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{product.productname}</h2>
      <img
        src={product.image}
        alt={product.productname}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <h3>Price: ₹{product.price}</h3>
      <p>Stock: {product.quantity}</p>
      <p>Category: {product.category}</p>
    </div>
    <Row className="align-items-center">
                        <Col md={6}>
                            <Button style={{ width: "25%", marginTop: "6px", alignItems: "center", marginLeft: "89%", backgroundColor: "black", boxShadow: "1px 2px 1px gray", color: "white", border: "none" }} onClick={() => handlecart(product)}>
                                {
                                    cart.includes(product) ? "Added🛒" : "Add to Cart🛒"
                                }
                            </Button>
                        </Col>
                        <Col md={6}>

                            
                        </Col>
                    </Row>
    </div>
  


                    
     </Container>
     </div>


  );
}    


export default Productdetails
