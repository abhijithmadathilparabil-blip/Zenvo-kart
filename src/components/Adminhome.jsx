import React, { useContext, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Mycontext } from './Mycontext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from './Footer';

function Adminhome() {

  const [productname, setproductname] = useState("")
  const [image, setImage] = useState("")
  const [price, setprice] = useState("")
  const [quantity, setquantity] = useState("")
  const [category, setcategory] = useState("")
  const [showselect, setShowselect] = useState(false)

  const { adddetails, setAdddetails, products, setProducts } = useContext(Mycontext)

  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const [search, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState(products)

  const nav = useNavigate();

  function toggleadd() {
    setShowselect(!showselect)
  }

  function Add() {
    const existingproduct = adddetails.find(prd =>
      prd.productname.toLowerCase() === productname.toLowerCase()
    )

    if (existingproduct && !isEditing) {
      alert("The product already Exists or edited")
      resetForm()
    } else {
      const productset = {
        id: Date.now(),
        productname,
        price,
        quantity,
        image,
        category
      }

      if (isEditing) {
        const updatedDetails = [...adddetails]
        updatedDetails[editIndex] = productset
        setAdddetails(updatedDetails)

        const updatedProductData = [...products]
        updatedProductData[editIndex] = productset
        setProducts(updatedProductData)

        setIsEditing(false)
        setEditIndex(null)
      } else {
        setAdddetails([...adddetails, productset])
        setProducts([...products, productset])
      }

      resetForm()
    }
  }

  function resetForm() {
    setproductname("")
    setprice("")
    setquantity("")
    setImage("")
    setcategory("")
  }

  function edited(pdts, index) {
    setproductname(pdts.productname)
    setprice(pdts.price)
    setquantity(pdts.quantity)
    setImage(pdts.image)
    setcategory(pdts.category)
    setIsEditing(true)
    setEditIndex(index)
  }

  function remove(rmpdt) {
    const rmdata = products.filter(item => item !== rmpdt)
    setProducts(rmdata)

    const rmadd = adddetails.filter(item => item !== rmpdt)
    setAdddetails(rmadd)

    console.log("remove", rmdata);
  }

  function handlesearch(e) {
    const query = e.target.value
    setSearchQuery(query)

    const filterData = products.filter(prod =>
      prod.productname.toLowerCase().includes(query.toLowerCase()) ||
      prod.quantity.toString().includes(query) ||
      prod.price.toString().includes(query) ||
      prod.category.toLowerCase().includes(query.toLowerCase())
    )

    setFilteredData(filterData)
  }

  return (
    <div>
      
      <Navbar expand="lg" className="homenav" style={{ backgroundColor: 'lightgray', height: "80px", top: "-10px" }}>
        <Container>
          <img src="/photos/icons.png" alt='logo' style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px' }} />
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "30px", fontFamily: "initial" }}>ZENVO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: 'auto', gap: '20px', marginRight: '20px', fontSize: '22px' }}>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop kart</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/home">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='adminbody'>
        <div className='adminbd'>
          <h2 style={{ fontSize: "23px", fontWeight: "bolder", marginTop: "5%", marginLeft: "3%", textShadow: "2px 2px 5px lightblue", fontFamily: "times" }}>
            Add <span style={{ color: 'orange' }}>Products</span> Here👉
            <button style={{ backgroundColor: "black", color: "white", width: "26px", height: "25px" }} onClick={() => toggleadd()}>+</button>
          </h2>

          {showselect && (
            <div   style={{
              backgroundColor: "white",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              width: "500px",
              margin: "20px auto",
              padding: "20px",
              textAlign: "left",
            }}
>
              <table style={{ fontSize: "19px", fontFamily: "Times" }}>
                <tbody>
                  <tr>
                    <td>Product Name: </td>
                    <td><input type="text" value={productname} onChange={(e) => setproductname(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td>Cover Image URL: </td>
                    <td><input type="text" value={image} onChange={(e) => setImage(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td>{image && <img src={image} alt="Cover" style={{ width: "180px",
                          height: "200px",
                          borderRadius: "10px",
                          marginTop: "10px"}} />}</td>
                  </tr>
                  <tr>
                    <td>Category:</td>
                    <td><input type="text" value={category} onChange={(e) => setcategory(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td><input type="text" value={price} onChange={(e) => setprice(e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td>Quantity:</td>
                    <td><input type="text" value={quantity} onChange={(e) => setquantity(e.target.value)} /></td>
                  </tr>
                   </tbody>
                   </table>
                  
                    <button onClick={Add} style={{width:"80px",height:"35px",marginTop:"20px",marginLeft:"200px", fontFamily:"sans-serif",fontWeight:"bold",borderRadius:"5px"}}>{isEditing ? "Update" : "Submit"}</button>
            </div>
          )}
        </div>

        
        <div style={{ display: "flex", gap: "4px", marginTop: "9%", flexWrap: "wrap", marginLeft: "7%" }}>
          {adddetails.map((product, index) => (
            <div key={product.id || index} style={{ width: '270px', height: "440px", border: "1px solid #ddd", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: '10px', padding: '10px', marginLeft: '1px', textAlign: "center", fontFamily: "serif", backgroundColor: "white", transition: 'transform 0.3s ease'}}>
              <h5 style={{ fontWeight: "400", fontFamily: "serif" }}>{product.productname}</h5>
              <img src={product.image} alt="" style={{ width: "250px", height: "250px", objectFit: 'cover', alignContent: "center" }} /><br/><br/>
              <p style={{ color: "green", height: "3px", fontSize: "19px", fontWeight: "200" }}>Price ₹:{product.price}</p><br/>
              <p style={{marginTop:"10px",color: "red" }}>Stock : {product.quantity}</p>
            </div>
          ))}
        </div>

      
        <div className="container mt-5 mb-4">
          <div className="row" style={{ marginLeft: "1%" }}>
            {products.map((item, index) => (
              <div className="col-6 col-md-3 mb-4" key={item.id}>
                <Link to={`/shop/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card h-70" style={{ width: '270px', height: "440px", border: "1px solid #ddd", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: '10px', padding: '10px', marginLeft: '1px', textAlign: "center", fontFamily: "serif", backgroundColor: "white", transition: 'transform 0.3s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <h5 style={{ fontWeight: "400", fontFamily: "serif" }}>{item.productname}</h5>
                      <img src={item.image} alt="" className="img-fluid" style={{ width: "250px", height: "250px", objectFit: 'cover', alignContent: "center" }} /><br/>
                      <p style={{ color: "green", height: "3px", fontSize: "19px", fontWeight: "200" }}>Price ₹:{item.price}</p>
                      <p style={{marginTop:"10px",color: "red" }}>Stock : {item.quantity}</p>
                      <div className="d-flex justify-content-between mt-3">
                        <Button onClick={(e) => { e.preventDefault(); edited(item, index) }} style={{marginTop:"-29px",width: '115px', height: '30px', backgroundColor: "lightgrey", color: 'black', borderRadius: '20px',textAlign:"center",padding:"2px",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}><b>EDIT📄🖍️</b></Button>
                        <Button onClick={(e) => { e.preventDefault(); remove(item) }} style={{marginTop:"-29px", height: '30px', width: '115px', backgroundColor: 'lightgrey', color: 'black', borderRadius: '20px',padding:"2px" ,boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}><b>DELETE👉🏻🗑️</b></Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default Adminhome
