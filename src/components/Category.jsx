import React, { useContext } from 'react'
import { Mycontext } from './Mycontext'
import { useParams } from 'react-router-dom'
import Footer from './Footer'

function Category() {
  const { products, like, setLike, cart, setCart } = useContext(Mycontext)
  const { cat } = useParams()

  const prodts = products.filter(pr => pr.category === cat)
  console.log("prodts", prodts, cat);

  function handleLike(prod) {
    if (like.includes(prod)) {
      setLike(like.filter(item => item !== prod))
    } else {
      setLike([...like, prod])
    }
  }

  function handleCart(prod) {
    if (cart.includes(prod)) {
      setCart(cart.filter(item => item !== prod))
    } else {
      setCart([...cart, prod])
    }
  }

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "17px", justifyContent: "center" }}>
        {prodts.map((prod, index) =>
          <div key={index} style={{ width: '270px', height: "440px", border: "1px solid #ddd", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: '10px', padding: '10px', marginLeft: '1px', textAlign: "center", fontFamily: "serif" }}>
            <img src={prod.image} alt={prod.productname} style={{ width: "250px", height: "250px", objectFit: 'cover', alignContent: "center" }} /><br /><br />
            <h5 style={{ fontWeight: "400", fontFamily: "serif" }}>{prod.productname}</h5>
            <p style={{ color: "green", height: "3px", fontSize: "19px", fontWeight: "200" }}>Price ₹:{prod.price}</p><br />
            <p style={{ color: "red" }}>Stock : {prod.quantity}</p>
            <button
              onClick={() => handleLike(prod)}
              style={{ width: '110px', height: '30px', backgroundColor: "lightgrey", color: 'black', borderRadius: '20px' }}
            >
              {like.includes(prod) ? 'unlike ❤️' : 'like ❤️'}
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => handleCart(prod)}
              style={{ margin: '0px', height: '30px', width: '110px', backgroundColor: 'lightgrey', color: 'black', borderRadius: '20px' }}
            >
              {cart.includes(prod) ? 'added 🛒' : 'add to cart 🛒'}
            </button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Category