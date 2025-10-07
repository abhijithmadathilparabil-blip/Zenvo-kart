import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Mycontext } from './Mycontext';

function Login() {
    const nav = useNavigate();
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser, loginuser, setLoginuser } = useContext(Mycontext);


    function handleLogin(e) {
        e.preventDefault();
        const loggedUser = user.find(item => item.Email === Email && item.password === password)
        if (loggedUser) {
            const userlog = {
                Name: loggedUser.Name,
                Email: loggedUser.Email
            };
            setLoginuser([userlog]);
            alert("Login successful");
            nav('/shop');
        } else {
            alert("Login failed! Please try again")
        }
    }

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", backgroundImage: "url('/photos/regibt.jpg')"
        }}>
            <Card style={{ width: "1100px", height: "650px", marginTop: "10px", borderRadius: "10px" }}>
                <div style={{ width: "550px", height: "650px", backgroundColor: "white", textAlign: "center" }}>
                    <h3 style={{ fontWeight: "bold", marginTop: "160px" }}>welcome back!</h3>
                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={Email}
                                onChange={e => setEmail(e.target.value)}
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
                        <div style={{ marginTop: '-15px',marginLeft:"190px", textAlign: 'center', fontSize: '15px' }}>
                            <Link rel="stylesheet" as={Link} to="/forgotpass" style={{ color: '#7b7d7bff', textDecoration: 'none', fontWeight: 'bold' }}>Forgot Password</Link>
                        </div>
                        <br/>
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
                         
                        <div style={{ marginTop: '18px', textAlign: 'center', fontSize: '15px' }}>
                            Don't have an account? <Link rel="stylesheet" as={Link} to="/regi" style={{ color: '#0a0909ff', textDecoration: 'none', fontWeight: 'bold' }}>Register</Link>
                        </div>
                    </form>
                </div>
            </Card>
            <div style={{ position: "absolute", width: "550px", height: "650px", marginLeft: "550px", marginTop: "11px" }}>
                <img style={{ width: "550px", height: "650px" }} src="https://images.pexels.com/photos/12095747/pexels-photo-12095747.jpeg" alt="" />
            </div>
        </div>
    )
}

export default Login