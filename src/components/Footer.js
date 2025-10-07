import React from 'react';
import {Row, Stack } from 'react-bootstrap';

function Footer() {
  return (
    <div style={{marginTop:"-50px"}}>
      <footer>
        <div className='footer' style={{width:"100%",height:"500px",backgroundColor:"grey",marginTop:"50px",paddingTop:"30px"}}>
          <img style={{width:"350px",height:"280px",marginLeft:"-1160px",marginTop:"-90px"}} src='/photos/Zenvio (2).png' alt='logo'/>
          <Stack>
            <h4 style={{fontSize:"30px",marginLeft:"-1130px",marginTop:"-50px"}}>
              <span style={{color:"orange"}}>Home </span>
              <span style={{color:"black"}}> Essentials</span>
            </h4>
            <h3 style={{fontSize:"18px",fontFamily:"cursive",marginLeft:"-950px"}}>
              Because little things bring the biggest comfort
            </h3>

           
          </Stack>
          <div className="listitems">
            <div className="about" id="about1" style={{marginLeft:"580px",marginTop:"-250px"}}>
              <label style={{fontSize:"20px",marginLeft:"20px"}}><b>ABOUT ZENVO</b></label>
               <ul style={{listStyleType: "none", paddingLeft: "0px", marginTop: "15px"}}>
                <li style={{marginBottom: "10px"}}>WHO WE ARE</li>
                <li style={{marginBottom: "10px",marginLeft:"-55px"}}>BLOG</li>
                <li style={{marginBottom: "10px",marginLeft:"20px"}}>WORK WITH US</li>
                <li style={{marginBottom: "10px",marginLeft:"50px"}}>INVESTOR RELATION</li>
                <li style={{marginBottom: "10px",marginLeft:"13px"}}>REPORT FRAUD</li>
                <li style={{marginBottom: "10px",marginLeft:"-25px"}}>PRESS KIT</li>
                <li style={{marginBottom: "10px"}}>CONTACT US</li>
              </ul> 
            </div>


             <div className="about" id="about1" style={{marginLeft:"800px",marginTop:"-450px"}}>
              <label style={{fontSize:"20px",marginLeft:"-25px"}}><b>HELP &  FAQs</b></label>
               <ul style={{listStyleType: "none", paddingLeft: "0px", marginTop: "15px"}}>
                <li style={{marginBottom: "10px"}}>ONLINE ORDERING</li>
                <li style={{marginBottom: "10px",marginLeft:"-68px"}}>SHIPPING</li>
                <li style={{marginBottom: "10px",marginLeft:"-82px"}}>BILLING</li>
                <li style={{marginBottom: "10px",marginLeft:"39px"}}>RETURNS & EXCHANGES</li>
                <li style={{marginBottom: "10px",marginLeft:"68px"}}>INTERNATIONAL SHIPMENTS</li>
                <li style={{marginBottom: "10px",marginLeft:"px"}}>CUSTOMER SERVICE</li>
                <li style={{marginBottom: "10px",marginLeft:"-34px"}}>ORDER STATUS</li>
              </ul>
            </div>

              <div className="about" id="about2" style={{marginLeft:"1130px",marginTop:"-610px"}}>
              <label style={{fontSize:"20px"}}><b>SOCIAL LINKS</b></label><br/><br/><br/>
              <ul style={{listStyleType: "none", paddingLeft: "0"}}>
                <li className="links">
                  <img src="./photos/inked.jpg" alt="LinkedIn"/>&nbsp;&nbsp;&nbsp;
                  <img src="./photos/face.jpg" alt="Facebook"/>&nbsp;&nbsp;&nbsp;
                  <img src="./photos/insta.jpg" alt="Instagram"/>&nbsp;&nbsp;&nbsp;
                  <img src="./photos/yt.jpg" alt="YouTube"/>&nbsp;&nbsp;&nbsp;
                  <img src="./photos/twitter.jpg" alt="Twitter"/>
                </li>
              </ul><br/>
              <div className="social" style={{ marginLeft: '250px',
            marginTop:'-90px'}}>
                <img src="./photos/zomata1.jpg" alt="App Store" />
              </div>
              <div className="social2" style={{marginLeft: '90px',}}>
                <img src="./photos/googleplay.jpg" alt="Google Play" />
              </div>
            </div>
          </div>

          <Row className='text-white' style={{textAlign:"center"}}>
            <h5 style={{color:'black',marginTop:"-250px"}}>Copyright © 2024 Zenvo Kart. Built with React.</h5>
          </Row>
        </div>
      </footer>
    </div>
  )
}

export default Footer