import React from 'react'
import { Navigate } from 'react-router-dom'
import Footer from './Footer'

function About() {
    return (
        <div>
            <div style={{ width: "1550px", height: "500px", backgroundColor: "#F0F8FF" }}>

                <img
                    style={{
                        width: '500px',
                        height: "400px",
                        marginLeft: "790px",
                        marginTop: '50px'
                    }}

                    src='https://images.pexels.com/photos/6195201/pexels-photo-6195201.jpeg'></img>

                <h1
                    style={{
                        fontStyle: "sans-serif",
                        marginLeft: "-1100px",
                        marginTop: '-280px'
                    }}>About Us</h1>


                <div style={{ marginLeft: "-520px" }}>
                    <p style={{
                        fontStyle: "sans-serif",
                        marginLeft: "-640pxpx",
                        fontSize: "17px",
                        textAlign: 'center'
                    }}>Zenvo Cart makes it easy to bring comfort and style home with quality bedsheets,
                        pillows, mattresses <br />and everyday essentials
                        all in one place.</p>
                </div>
            </div>

            <div style={{ marginLeft: "-730px", marginTop: "50px", backgroundColor: '' }}>
                <img style={{ width: "500px", height: "400px" }} src='https://images.pexels.com/photos/4992476/pexels-photo-4992476.jpeg'></img>
            </div>
            <div style={{ marginTop: "80px" }}>
                <h2 style={{
                    fontStyle: "sans-serif",
                    position: 'absolute',
                    left: "750px",
                    marginTop: "-350px",
                    color: "black"
                }}>Our Story:</h2>

                <p style={{
                    fontStyle: "sans-serif",
                    position: "absolute",
                    marginLeft: "725px",
                    fontSize: '17px',
                    marginTop: '-290px', textAlign: "center"
                }}>Zenvo Cart was created to make quality home essentials easy to find and reliable.
                    Starting with bedsheets, pillows, and towels, we’ve grown into a full home store, offering
                    everything from mattresses to blankets helping turn every house into a warm, welcoming home.</p>
            </div>

            <div style={{ marginLeft: "780px", marginTop: "50px", backgroundColor: '' }}>
                <img style={{ width: "500px", height: "400px" }} src='https://images.pexels.com/photos/6438761/pexels-photo-6438761.jpeg'></img>
            </div>

            <div style={{ marginTop: "90px" }}>
                <h2 style={{
                    fontStyle: "sans-serif",
                    position: 'absolute',
                    left: "140px",
                    marginTop: "-350px",
                    color: "black"
                }}>Our Mission:</h2>

                <p style={{
                    fontStyle: "sans-serif",
                    position: "absolute",
                    marginLeft: "140px",
                    fontSize: '17px',
                    marginTop: '-300px', textAlign: "center"
                }}>Zenvo Cart delivers comfortable, stylish, and durable home essentials with a seamless <br />
                    shopping experience you can trust.</p>
            </div>

            <div style={{ marginLeft: "-730px", marginTop: "50px", backgroundColor: '' }}>
                <img style={{ width: "500px", height: "400px" }} src='https://images.pexels.com/photos/6817180/pexels-photo-6817180.jpeg'></img>
            </div>

            <div style={{ marginTop: "80px" }}>
                <h2 style={{
                    fontStyle: "sans-serif",
                    position: 'absolute',
                    left: "750px",
                    marginTop: "-350px",
                    color: "black"
                }}>Our Promise:</h2>

                <p style={{
                    fontStyle: "sans-serif",
                    position: "absolute",
                    marginLeft: "725px",
                    fontSize: '17px',
                    marginTop: '-290px', textAlign: "center"
                }}>At Zenvo Cart, we carefully select durable and stylish
                    home essentials from bedsheets and pillows to blankets and towels and provide a simple,
                    reliable shopping experience to help make your home feel complete.</p>
            </div>


            <div style={{ marginLeft: "780px", marginTop: "50px", backgroundColor: '' }}>
                <img style={{ width: "500px", height: "400px" }} src='https://images.pexels.com/photos/16019921/pexels-photo-16019921.jpeg'></img>
            </div>

            <div style={{ marginTop: "90px" }}>
                <h2 style={{
                    fontStyle: "sans-serif",
                    position: 'absolute',
                    left: "140px",
                    marginTop: "-350px",
                    color: "black"
                }}>What Makes Us Different:</h2>

                <p style={{
                    fontStyle: "sans-serif",
                    position: "absolute",
                    marginLeft: "140px",
                    fontSize: '17px',
                    marginTop: '-300px', textAlign: "center"
                }}>Zenvo Cart offers a complete home experience with carefully selected, quality essentials from<br /> bedsheets
                    to mattresses making shopping simple, affordable, and stress-free.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About
