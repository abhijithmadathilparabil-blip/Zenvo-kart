import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from "./Mycontext";
import Footer from "./Footer";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';




function Cart() {
  const {cart, setCart, setPrice, totalPrice, count,setCount, detailss} = useContext(Mycontext); 
  console.log("Cart items:", cart);

   useEffect(() => {
    const total = cart.reduce((currentp, pro) => currentp + pro.price * (pro.selectquant || 1), 0)
    setPrice(total)

    const counts=cart.reduce((item1,item2)=>item1+(parseInt(item2.selectquant) || 1),0)
    setCount(counts)

  }, [cart])

  function handeleRemove(prod)
  {
    setCart(cart.filter(item=>item!==prod))
  }

 function handlepricehike(e, pro) {
  const selectquant = parseInt(e.target.value);

  if (selectquant > pro.quantity) {
    alert('Not enough stock available');
    return;
  }

  const updateCart = cart.map(item =>
    item.Bookname === pro.Bookname
      ? { ...item, selectquant }
      : item
  );

  setCart(updateCart);
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

     <h2 style={{ color: "black" ,fontSize:"29px",marginTop:"6px"}}>My Cart</h2>
      <h3 style={{fontSize:"20px"}}><span style={{ color: "red" }}>{count}</span> items in your cart</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "75%" }}>
          {
            cart.map(prod =>
              <div style={{ width: "100%" }}>

<hr></hr>
                <table style={{ backgroundColor: "white", border: "0px solid black", borderBottom: "2px solid lightblue", width: "80%", gap: "70%px", marginLeft: "4.5%" }}>
                  <tr>
                    <td><img src={prod.image} alt="product" style={{ width: "150px", height: "200px"}} /></td>
                    <td><h4 style={{fontSize:"19px",fontWeight:"larger"}}>
                      <h5 style={{marginLeft:"10px",marginTop:"-40px"}}>Product Name:-</h5><br/>{prod.productname}</h4></td>
                    <td><h4 style={{fontSize:"19px",fontWeight:"larger"}}>
                      <h5 style={{marginLeft:"10px",marginTop:"-40px"}}>Price:-</h5><br/> ₹:{prod.price}</h4></td>
                    <td><h4 style={{fontSize:"19px",fontWeight:"larger"}}>
                      <h5 style={{marginLeft:"10px",marginTop:"-40px"}}>Stock:-</h5><br/>Left:{prod.quantity - (prod.selectquant || 1)}</h4></td>
                    <td>
                      <h5 style={{marginLeft:"10px",marginTop:"-40px"}}>Quantity:-</h5><br/>
                      <select style={{width:"70px",height:"30px",marginLeft:"12px"}} value={prod.selectquant} onChange={(e) => handlepricehike(e, prod)}> 
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="3">7</option>
                        <option value="4">8</option>
                        <option value="5">9</option>
                        <option value="6">10</option>

                      </select>
                    </td>
                    <td><h4 style={{fontSize:"19px",fontWeight:"larger"}}>
                       <h5 style={{marginLeft:"10px",marginTop:"-40px"}}>Updated price:-</h5><br/>{prod.price * (prod.selectquant || 1)}</h4></td>
                    <td><button className='buynowh' style={{marginLeft:"50px",backgroundColor: "orange", border: "none" ,height:"43px",width:"90px",marginTop:"2px" }}>
                      <Link
                        style={{ textDecoration: "none", color: "white",padding:"1px 1px" }}
                        to="/payment" 
                        state={{ price: prod.price * (prod.selectquant || 1) }}
                      >
                        Buy
                      </Link>
                    </button></td>&nbsp;&nbsp;
                    <td><button style={{marginLeft:"4px",color:'white',backgroundColor:"black",cursor:"pointer",border:"none",padding:"4px 12px",width:"90px",height:"43px"}} onClick={()=>handeleRemove(prod)}>Remove</button></td>
                  </tr>
                </table>
              </div>
            )
          }
        </div>


        <div style={{ width: "30%", padding: "20px" }}>
          <h2 style={{ color: "orange",fontSize:"29px",marginLeft:"-6%" }}>Shipping Address</h2>
          {
            detailss.map(add => (
              <div>

                <h3 style={{fontSize:"16px",fontWeight:"larger"}}>{add.cuaddr}</h3>
                <h3 style={{fontSize:"16px",fontWeight:"larger"}}>{add.landmark}</h3>
                <h3 style={{fontSize:"16px",fontWeight:"larger"}}>{add.pincode}</h3>
              </div>
            )
            )
          }
        </div>
      </div>

      <div style={{ marginLeft: "75%", width: "20%", height: "100%" }}>
        <h2 style={{fontSize:"27px",fontWeight:"larger"}}>Cart Total</h2>
        <h3 style={{fontSize:"20px",fontWeight:"larger"}}>Shipping Charge:{150}</h3>
        <h3 style={{fontSize:"20px",fontWeight:"larger"}}>Total: <span style={{ fontSize: "24px" }}>{totalPrice+150}</span> </h3>
        <Link to={"/payment"} style={{ borderRadius: "30%" }}><button  style={{ color: "white", backgroundColor: "black", padding: "8px 15px" }}> Make Payment</button></Link>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>

    </div>
  )
}
export default Cart;
