import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Carousel } from 'react-bootstrap';
import React from 'react';
import '../App.css';
import Footer from './Footer';
import { Link, Navigate, useNavigate } from 'react-router-dom';



function Homepage() {

  
  const nav = useNavigate();

  const Clickproduct = () => {
    alert("Please login first")
    nav("/login")
  }


  return (
    <>
    <div className='top-text' style={{textAlign:'center',backgroundColor:'White',padding:'10px',fontSize:'20px',fontWeight:'bold'}}>
      <p style={{fontSize:"Smaller"}}>UPTO 50% + FREE TOWELS/BEDSHEET + EXTRA 10% OFF</p>
    </div>
      <Navbar expand="lg" className="homenav" style={{backgroundColor: 'lightgray',height:"80px",top:"-10px"}}>
        <Container>
          <img src="./photos/icons.png" alt='logo' style={{width:'50px', height:'50px', borderRadius:'50%', marginRight:'20px'}}/>
          <Navbar.Brand href="#home" style={{fontWeight:"bold",fontSize:"30px",fontFamily:"initial"}}>ZENVO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  style={{marginLeft:'auto',gap:'20px', marginRight:'20px',fontSize:'22px',}}>
              

             
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/admin">Admin login</Nav.Link>
              <Nav.Link as={Link} to="/login">Login/Sign Up</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      < div className='Container-fluid' style={{ width: '100%', height: '200px', objectFit: 'cover' }} >

        <Carousel style={{width:'100%',objectFit:'cover',top:'-10px'}}>
          <Carousel.Item>
            <img
              className="block1"
              src="https://images.pexels.com/photos/3288100/pexels-photo-3288100.png"
              alt="bedshhet of 1"
              style={{ height: '700px',width:'100%',objectFit: 'cover' }}/>
            <Carousel.Caption>
              <h3 style={{fontSize:"30px"}}>Zenvo Bedsheet</h3>
              <p style={{fontSize:"25px",fontFamily:"initial"}}>Luxury you can sleep on</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="block2"
              src="https://images.pexels.com/photos/1768513/pexels-photo-1768513.jpeg"
              alt="Second slide"
              style={{ height: '700px',width:'100%',objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3 style={{fontSize:"30px"}}>Zenvo Pillows & Pillow Covers</h3>
              <p style={{fontSize:"25px",fontFamily:"initial"}}>Comfort starts where you lay your head</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="block3"
              src="https://images.pexels.com/photos/3555619/pexels-photo-3555619.jpeg"
              alt="Third slide"
              style={{ height: '700px',width:'100%',objectFit: 'cover' }}/>
            
            <Carousel.Caption>
              <h3>Zenvo Bedsheet</h3>
              <p>A good day starts with a good night’s sleep  wrapped in comfort.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="block4"
              src="https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg"
              alt="forth slide"
              style={{ height: '700px',width:'100%',objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>ZENVO BATHTOWELS</h3>
              <p>Luxury you can feel after every shower.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

         <div className='Container-fluid mt-10 d-flex flex-wrap gap-5 left-0' 
         style={{padding:'20px',backgroundColor:'lightgrey',contentAlign:"center",borderRadius:"10px",justifyContent:"center",
         alignItems:"center",boxShadow: "7 10px 10px rgba(17, 2, 2, 0.1)",marginTop:"-10px"}}>


                <Card className="product-card"
                 onClick={Clickproduct}
                 style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOm7dlTAtoNQGXeJqszK5yaUQwms0-H_0Kg&s"
                         style={{ width: '', height: '200px', objectFit: 'cover' }} />
                        <Card.Title>BOMBAY DYEING BEDSHEET</Card.Title>
                        <Card.Text>
                            Luxury you can sleep on
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="product-card"
                onClick={Clickproduct}
                 style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://tse1.mm.bing.net/th/id/OIP.is9aoWguaoGPwaU_LzLOXAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                        style={{ width: "", height: '200px', objectFit: 'cover' }} />
                        <Card.Title>BOUTIQUE BEDSHEET</Card.Title>
                        <Card.Text>
                            Slip into softness, wake up in happiness
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="product-card"
                onClick={Clickproduct}
                 style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://m.media-amazon.com/images/I/71pzt5ocMYL._AC_SL1500_.jpg" 
                        style={{ width: '', height: '200px', objectFit: 'cover' }} />
                        <Card.Title>PILLOW COVERS</Card.Title>
                        <Card.Text>
                            Dream better with the right pillow
                        </Card.Text>
                    </Card.Body>
                </Card>

                 <Card className="product-card"
                 onClick={Clickproduct}
                  style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg" 
                        style={{ width: '', height: '200px', objectFit: 'cover' }} />
                        <Card.Title>BATH TOWEL</Card.Title>
                        <Card.Text>
                         Wrap yourself in comfort   
                        </Card.Text>
                    </Card.Body>
                </Card>

                 <Card className="product-card"
                 onClick={Clickproduct}
                  style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://www.arrabi.in/cdn/shop/products/3_50140748-0d3f-47c3-9e81-0a653c9f8708.jpg?v=1653046311&width=1445" 
                        style={{ width: '', height: '200px', objectFit: 'cover' }} />
                        <Card.Title>MY TRIDENT BEDSHEETS</Card.Title>
                        <Card.Text>
                            Wake up to freshness
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="product-card"
                onClick={Clickproduct}
                 style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://m.media-amazon.com/images/I/810njYc3IcL._AC_SL1500_.jpg"
                        style={{ width: '', height: '200px', objectFit: 'cover' }} />
                        <Card.Title>PILLOWS</Card.Title>
                        <Card.Text>
                            Head down, dreams up
                        </Card.Text>
                    </Card.Body>
                </Card>

                 <Card className="product-card"
                 onClick={Clickproduct}
                  style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://th.bing.com/th/id/OIP.r5lBOzitg6EZds3aGYijNgHaHJ?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                        style={{ width: '', height: '200px', objectFit: 'cover' }} />
                        <Card.Title>HANDKERCHIEF</Card.Title>
                        <Card.Text>
                            Carry comfort in your pocket
                        </Card.Text>
                    </Card.Body>
                </Card>

                  <Card className="product-card"
                  onClick={Clickproduct}
                   style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://i5.walmartimages.com/seo/RUIKASI-Dark-Gray-Queen-Comforter-Set-Soft-and-Fluffy-Bedding-3-Pieces-Set-Pintuck-Bed-Set-with-Comforter-Pillowcases_6fcfe5f9-253d-4aaf-b0ca-ba815487c40d.61ac5177018709b1a4e22de88e0fada5.jpeg"
                        style={{ width: '', height: '200px', objectFit: 'cover' }} />
                        <Card.Title>COMFERTER</Card.Title>
                        <Card.Text>
                            Wrap yourself in warmth
                        </Card.Text>
                    </Card.Body>
                </Card>

                 <Card className="product-card"
                 onClick={Clickproduct}
                  style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://m.media-amazon.com/images/I/71berPNTFnL._SL1280_.jpg"
                        style={{ width: '', height: '200px', objectFit: 'cover' }} />
                        <Card.Title>DOHAR</Card.Title>
                        <Card.Text>
                            A dohar for every dream
                        </Card.Text>
                    </Card.Body>
                </Card>

                 <Card className="product-card"
                 onClick={Clickproduct}
                  style={{ width:"20%",height:"300px",textAlign:"center", contentAlign:"center",boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <Card.Body>
                        <Card.Img variant='top' src="https://cdn.mos.cms.futurecdn.net/79GgGurzCjJUozxmP6d7iX.jpg"
                        style={{ width: '', height: '200px', objectFit: 'cover' }} />
                        <Card.Title>EMMA BED MATRESS</Card.Title>
                        <Card.Text>
                            Engineered for perfect sleep
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>   
            <Footer/>
        </div>
    </>
  );
}

export default Homepage;