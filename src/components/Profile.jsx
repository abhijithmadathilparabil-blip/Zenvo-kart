import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Mycontext } from './Mycontext';
import Footer from './Footer';

function Profile() {
  const { user, detailss, setDetails, loginuser = [] } = useContext(Mycontext);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [cuaddr, setCuaddr] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleAddressSubmit = () => {
    const newAddress = { cuaddr, pincode, landmark };
    setDetails([...detailss, newAddress]);
    setCuaddr('');
    setPincode('');
    setLandmark('');
    setShowAddressForm(false);
  };

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

      <div className="row mt-4">
        <aside className="col-md-3" >
          <div className="list-group" >
            <a href="#myAccount" className="list-group-item list-group-item-action">My Account</a>
            <a href="#addressInfo" className="list-group-item list-group-item-action" onClick={() => setShowAddressForm(true)}>Address Information</a>
          </div>
        </aside>

        <main className="col-md-9">
          <section id="myAccount" className="mb-4">
            {loginuser.length === 0 ? (
              <div className="p-4 border rounded">
                <h2 className="text-primary">My Account</h2>
                <h3>No user logged in.</h3>
              </div>
            ) : (
              loginuser.map((item, index) => (
                <div key={index} className="p-4 border rounded">
                  <h2 className="text-primary">My Account</h2>
                  <h3>Welcome, <span className="text-warning">{item.Name}</span>!</h3>
                  <p>Email: {item.Email}</p>
                </div>
              ))
            )}
          </section>

          <section id="addressInfo" className="mb-4">
            {showAddressForm && (
              <div className="p-4 border rounded">
                <h2 className="text-primary">Add New Address</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleAddressSubmit(); }}>
                  <div className="mb-3">
                    <label htmlFor="currentAddress">Current Address</label>
                    <textarea
                      style={{height:"30px"}}
                      id="currentAddress"
                      className="form-control"
                      rows="2"
                      value={cuaddr}
                      onChange={e => setCuaddr(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="landmark">Landmark</label>
                    <textarea
                      style={{height:"30px"}}
                      type="text"
                      className="form-control"
                      id="landmark"
                      value={landmark}
                      onChange={e => setLandmark(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pincode">Pincode</label>
                    <textarea
                      style={{height:"30px"}}
                      type="number"
                      className="form-control"
                      id="pincode"
                      value={pincode}
                      onChange={e => setPincode(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">Submit</button>
                </form>
              </div>
            )}

            {detailss.map((address, index) => (
              <div key={index} className="p-4 border rounded mt-3">
                <h2 className="text-primary">Address Information</h2>
                <p>Current Address: {address.cuaddr}</p>
                <p>Landmark: {address.landmark}</p>
                <p>Pincode: {address.pincode}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile