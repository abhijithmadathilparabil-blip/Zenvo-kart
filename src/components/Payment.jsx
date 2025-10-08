import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from './Mycontext';
import Footer from './Footer';


function Payment() {
    const { totalPrice, cart, setCart, count, setCount } = useContext(Mycontext)

    const nav = useNavigate()
    const [cn, setCn] = useState("")
    const [cno, setCno] = useState("")
    const [exd, setExd] = useState("")
    const [cvv, setCvv] = useState("")
    const [phno, setPhno] = useState("")
    const [payment, setPayment] = useState("")
    const [paymentType, setPaymentType] = useState("")

    function Handlepayment(e) {
        if (cvv.length == 3 && new Date(exd) > new Date()) {
            const pv = { cn, cno, cvv, exd }
            setPayment([...payment, pv])
            alert(`₹${totalPrice + totalPrice * 1 / 10} Payment Successful`)
            setCn("")
            setCno("")
            setCvv("")
            setExd("")
            nav('/displaypro')
            setCart([])



        }
        else {
            alert("Payment Failed!Enter valid cvv no or Exp")
        }
    }
    console.log("Total Prie:", totalPrice);

    function upipayment() {
        const pv = { phno }
        setPayment([...payment, pv])
        alert(`${totalPrice + totalPrice * 1 / 10} Payment successfull`)
        nav('/shop')
        setCart([])
    }

    console.log("Paymentinfo", payment);

    return (
        <div>
            <Navbar expand="lg" className="homenav" style={{ backgroundColor: 'lightgray', height: "80px", top: "-10px" }}>
                <Container>
                    <img src="/photos/icons.png" alt='logo' style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px' }} />
                    <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "30px", fontFamily: "initial" }}>ZENVO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ marginLeft: 'auto', gap: '20px', marginRight: '20px', fontSize: '22px', }}>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/cart">Order Summary</Nav.Link>
                            <Nav.Link href="/wishlist">Wishlist</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Card style={{ width: "1000px", height: "650px", marginTop: "15px", marginLeft: "260px", borderRadius: "10px" }}>
                <h1 style={{ fontFamily: "sans-serif", fontWeight: "bold", marginTop: "30px", fontSize: "35px" }}>Payment Info..</h1>
                <h3 style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginLeft: "-690px",
                    marginTop: "80px",
                    color: "grey"
                }}>Payment Method:-</h3>

                <div style={{ marginLeft: "69px" }}>
                    <form style={{ textAlign: "initial" }}>
                        <p style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "grey" }}>
                            Please select your payment method
                        </p>

                        <input type="radio" id="debit" name="payment" value="dc" onChange={(e) => setPaymentType(e.target.value)} />&nbsp;
                        <label htmlFor="debit" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Debit Card</label>
                        <br />

                        <input type="radio" id="credit" name="payment" value="cc" onChange={(e) => setPaymentType(e.target.value)} />&nbsp;
                        <label htmlFor="credit" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Credit Card</label>
                        <br />

                        <input type="radio" id="upi" name="payment" value="up" onChange={(e) => setPaymentType(e.target.value)} />&nbsp;
                        <label htmlFor="upi" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Upi Payment</label>
                        <br />

                        <input type="radio" id="cod" name="payment" value="cod" onChange={(e) => setPaymentType(e.target.value)} />&nbsp;
                        <label htmlFor="cod" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Cash On Delivery</label>
                        <br />
                    </form><br />

                    {(paymentType == 'dc' || paymentType == 'cc') && (
                        <div style={{ fontWeight: "bold" }}>
                            Cardholder Name: <br /><input style={{ border: "none", borderBottom: "1px solid blue", width: "45%" }} type="text" value={cn} onChange={e => setCn(e.target.value)} /><br />
                            Card Number: <br /><input style={{ border: "none", borderBottom: "1px solid blue", width: "45%" }} type="number" value={cno} onChange={e => setCno(e.target.value)} /><br />
                            Expiry Date : <br /><input style={{ border: "none", borderBottom: "1px solid blue", width: "45%" }} type="date" value={exd} onChange={e => setExd(e.target.value)} /><br />
                            CVV: <br /> <input style={{ border: "none", borderBottom: "1px solid blue", width: "45%" }} type="number" value={cvv} onChange={e => setCvv(e.target.value)} /> <br />

                            <button style={{ justifyItems: "center", marginTop: "2%", padding: "4px 28px", color: "white", backgroundColor: "black" }} onClick={() => Handlepayment()}>Pay ₹<span style={{ color: "red" }}> {totalPrice + totalPrice * 1 / 10}</span></button>
                        </div>


                    )
                    }
                    {(paymentType == 'up') && (
                        <div>
                            upi Id/Phone no: <br /><input minLength={10} type="text" value={phno} onChange={e => setPhno(e.target.value)} /><br />
                            <button style={{ justifyItems: "center", marginTop: "2%", padding: "4px 28px", color: "white", backgroundColor: "black" }} onClick={() => upipayment()}> Pay₹<span style={{ color: "red" }}> {totalPrice + totalPrice * 1 / 10}</span></button>
                        </div>
                    )

                    }
                    {(paymentType == 'cod') && (
                        <div>
                            <button style={{ justifyItems: "center", marginTop: "2%", padding: "4px 28px", color: "white", backgroundColor: "black" }} onClick={() => alert("Order Confirmed")}>submit</button>
                        </div>

                    )}



                </div>
            </Card>
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Payment
