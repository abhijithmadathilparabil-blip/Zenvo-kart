import React, { useContext, useEffect, useState } from 'react';
import { Mycontext } from './Mycontext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import Wishlist from './Wishlist';

function Shopproducts() {

  const { products, setProducts, like, setLike, cart, setCart, adddetails } = useContext(Mycontext);
  const nav = useNavigate();

  const CombinedData = [...new Map([...products, ...adddetails].map(item => [item.id, item])).values()]
  const [filteredData, setFilteredData] = useState(CombinedData)

  const [searchquery, setSearchQuery] = useState("")


  function handlesearch(e) {
  const query = e.target.value;
  setSearchQuery(query);

  if (query.trim() === "") {
    setFilteredData(CombinedData);
    return;
  }

  const filterData = CombinedData.filter(prods =>
    prods.productname.toLowerCase().includes(query.toLowerCase()) ||
    prods.category.toLowerCase().includes(query.toLowerCase()) ||
    prods.price.toString().includes(query) ||
    prods.quantity.toString().includes(query)
  );

  setFilteredData(filterData);
}

  function handleLike(CombinedData) {
    if (like.includes(CombinedData)) {
      setLike(like.filter(item => item !== CombinedData))
    } else {
      setLike([...like, CombinedData])
    }
  }

  console.log("likes", like);

  function handleCart(CombinedData) {
    if (cart.includes(CombinedData)) {
      setCart(cart.filter(item => item !== CombinedData))
    } else {
      setCart([...cart, CombinedData])
    }
  }

  console.log("addtocart", cart)



  const categories = [...new Set(CombinedData.map(prod => prod.category))]

  console.log("category:", categories);

  function handleselect(e) {
    const query = e.target.value
    nav(`/shop/${query}`)

  }







  return (
    <div className='fluid'>
      <Navbar expand="lg" style={{ padding: '10px 20px', backgroundColor: "lightgray", position: "sticky", top: "0", zIndex: "1000" }}>
        <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <h3>
            <span style={{ color: 'black' }}>ZENVO</span>
            <span style={{ color: 'orange' }}>&nbsp;Kart</span>
          </h3>
          <img
            src="./photos/icons.png"
            alt=""
            style={{ width: '80px', height: '60px', marginLeft: '10px', mixBlendMode: "multiply", backgroundColor: "lightgray", filter: "brightness(1.1)", borderRadius: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex" style={{ flex: 1, justifyContent: 'center' }}>
            <FormControl
              type="search"
              placeholder=" Search for products"
              className="me-2"
              aria-label="Search"
              onChange={handlesearch}
              style={{
                backgroundColor: "white",
                border: "none",
                height: "65%",
                width: "223%",
                marginLeft: "3%"
              }}
            />
          </Form>

          <Form.Select
            onChange={handleselect}
            style={{
              width: "17%",
              marginRight: "10px",
              height: "20%",
              boxShadow: "2px white",
              marginLeft: "4%"
            }}
          >
            <option value="">Product Categories</option>
            {
              categories.map(cate =>
                <option value={cate}>{cate}</option>
              )
            }

          </Form.Select>
          <Nav>
            <Button
              onClick={() => nav("/profile")}
              variant="outline-primary"
              style={{ marginLeft: '15px' }}
            >
              🚹 Profile
            </Button>
            <Button
              onClick={() => nav('/cart')}
              variant="outline-warning"
              style={{ marginLeft: '15px', color: "black", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
            >
              🛒 Cart
            </Button>
            <Button
              onClick={() => nav('/wishlist')}
              variant="outline-success"
              style={{ marginLeft: '15px' }}>

              ❤️ like
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar><br />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "17px", justifyContent: "center" }}>
        {filteredData.map((prod, index) =>
          <Link
            to={`/productdetails/${prod.id}`}
            key={prod.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >

            <div key={index} style={{ width: '270px', height: "440px", border: "1px solid #ddd", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: '10px', padding: '10px', marginLeft: '1px', textAlign: "center", fontFamily: "serif" }}>
              <img src={prod.image} alt={prod.productname} style={{ width: "250px", height: "250px", objectFit: 'cover', alignContent: "center" }} /><br /><br />
              <h5 style={{ fontWeight: "400", fontFamily: "serif" }}>{prod.productname}</h5>
              <p style={{ color: "green", height: "3px", fontSize: "19px", fontWeight: "200" }}>Price ₹:{prod.price}</p><br />
              <p style={{ color: "red" }}>Stock : {prod.quantity}</p>
              <button
                onClick={(e) => {e.preventDefault(); handleLike(prod)}}
                style={{ width: '110px', height: '30px', backgroundColor: "lightgrey", color: 'black', borderRadius: '20px' }}
              >
                {like.includes(prod) ? 'unlike ❤️' : 'like ❤️'}
              </button>
              &nbsp;&nbsp;
              <button
                onClick={(e) => {e.preventDefault(); handleCart(prod)}}
                style={{ margin: '0px', height: '30px', width: '110px', backgroundColor: 'lightgrey', color: 'black', borderRadius: '20px' }}
              >
                {cart.includes(prod) ? 'added 🛒' : 'add to cart 🛒'}
              </button>
            </div>
          </Link>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Shopproducts;