import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from './Mycontext'

function Register() {
    const { user, setUser } = useContext(Mycontext)
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const nav = useNavigate()

    function alreadyRegistered() {
        return user.find(item => item.Email === Email);
    }

    function handleRegister(e) {
        e.preventDefault();
        if (!Name || !Email || !password || !confirmpassword) {
            alert("All fields are required!")
            return
        }
        if (alreadyRegistered()) {
            alert("Email already registered!")
            nav('/login')
            return
        }
        if (password !== confirmpassword) {
            alert("Password & confirm password must be same!")
            return
        }
        const userdata = { Name, Email, password ,confirmpassword}
        setUser([...user, userdata])
        alert("Registration Successful")
        nav('/login')
    }

    return (
        <div>
            <div style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url('/photos/loginbk.jpg')"
            }}>
                <Card style={{ width: "1100px", height: "650px", marginTop: "10px", borderRadius: "10px" }}>
                    <div style={{ width: "550px", height: "650px", backgroundColor: "white", textAlign: "center" }}>
                        <h3 style={{ fontWeight: "bold", marginTop: "50px" }}>REGISTER</h3><br />
                        <form onSubmit={handleRegister}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    value={Name}
                                    onChange={e => setName(e.target.value)}
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
                            <div style={{ marginBottom: '28px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={confirmpassword}
                                    onChange={e => setConfirmpassword(e.target.value)}
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
                                }}>
                                Register
                            </button>
                            <div style={{ marginTop: '18px', textAlign: 'center', fontSize: '15px' }}>
                                Already have an account? <a href="/login" style={{ color: '#0a0909ff', textDecoration: 'none', fontWeight: 'bold' }}>login</a>
                            </div>
                        </form>
                    </div>
                </Card>
                <div style={{ position: "absolute", width: "550px", height: "650px", marginLeft: "550px", marginTop: "9px" }}>
                    <img style={{ width: "550px", height: "650px" }} src="https://images.pexels.com/photos/6603475/pexels-photo-6603475.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register