import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Adminlogin() {
  const nav = useNavigate();
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function adsubmit() {
    if (Username === "admin" && password === "12345") {
      alert("Login Successful");
      nav('/adminhome');
    } else {
      alert("Username or password is incorrect");
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
            <Nav style={{ marginLeft: 'auto', gap: '20px', marginRight: '20px', fontSize: '22px' }}>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/home">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          marginTop: "-10px",
          justifyContent: "center"
        }}>
        <Card style={{ width: "1100px", height: "650px", marginTop: "10px", borderRadius: "10px" }}>
          <div style={{ width: "550px", height: "650px", backgroundColor: "white", textAlign: "center" }}>
            <h3 style={{ fontWeight: "bold", marginTop: "160px" }}>ADMIN LOGIN!</h3><br />
            <form onSubmit={(e) => { e.preventDefault(); adsubmit(); }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>User Name</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    width: '60%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #0a0a0aff',
                    fontSize: '16px'
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{
                    width: '60%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #090909ff',
                    fontSize: '16px'
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '60%',
                  padding: '12px',
                  background: '#080707ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  cursor: 'pointer'
                }}
              >
                Login
              </button>
            </form>
          </div>
        </Card>
        <div style={{ position: "absolute", width: "550px", height: "650px", marginLeft: "550px", marginTop: "11px" }}>
          <img style={{ width: "550px", height: "650px" }} src="https://images.pexels.com/photos/7128963/pexels-photo-7128963.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
