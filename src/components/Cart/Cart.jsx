import React, { useEffect, useState } from 'react';
import MyHeader from '../myHeader/MyHeader';
import "./Cart.css";
import { getCartproducts, postcartAPI } from '../../Services/AllAPI';
import Swal from 'sweetalert2';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

function Cart() {

  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [orderdetails, setOrderDetails] = useState([])
  const [isToken, setIsToken] = useState(false);


  const [addressdetails, setAddressDetails] = useState({
    address: ""
  })
  console.log(addressdetails);

  const [token, setToken] = useState("");

  const getcartsProducts = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      };

      const result = await getCartproducts(reqHeader);
      console.log(result);
      setCart(result.data.items);
      calculateTotalAmount(result.data.items);
    }
  };

  const calculateTotalAmount = (cartItems) => {
    let total = 0;
    cartItems.forEach(item => {
      total += (item.price * item.quantity);
    });
    setTotalAmount(total);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      // Remove the item from the cart if its quantity becomes zero
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    calculateTotalAmount(updatedCart);
  };


  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    calculateTotalAmount(updatedCart);
  };

  useEffect(() => {
    getcartsProducts();
  }, []);



  useEffect(() => {
    const tokenFromSession = sessionStorage.getItem("token");
    setToken(tokenFromSession || "");
  }, []);

  const hanndlepayment = async (e) => {
    e.preventDefault();

    const { address } = addressdetails;

    if (!address )  {
      Swal.fire({
        title: "🚫",
        icon: "info",
        text: "Please mention your address"
      });
    } else {
      const reqBody = {
        address
      };
      if (token) {
        const reqHeader = {
          "Authorization": `Token ${token}`
        };
        try {
          const result = await postcartAPI(reqBody, reqHeader);
          console.log(result.data);
          setOrderDetails(result.data)

          if (result.status === 201) {
            // Clear the form fields after successful addition
            setAddressDetails({
              address: ""
            });
          } else {
            console.log(result.data);

          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(true);
    }
  }, []);
  

  return (
    <>
      <div>
        <MyHeader />

       <div className='bgcart'>
         { isToken && ( <section className=" gradient-custom">
            <div className="container py-5">
              <div className="row d-flex justify-content-center my-4">
                <div className="col-md-8">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Cart - {cart.length} items</h5>
                    </div>
                    {cart?.length > 0 ?
                      cart.map((item, index) => (
                        <div key={index} className="card-body">
                          <div className="row">
                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                              <p><strong>{item.name}</strong></p>
                              <p>Quantity: {item.quantity} </p>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                              <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                <button className="btn btn-primary px-3 me-2" onClick={() => handleDecreaseQuantity(index)}>
                                  <i className="fas fa-minus"></i>
                                </button>
                                <div className="form-outline">
                                  <input id="form1" min="0" name="quantity" value={item.quantity} type="number" className="form-control" readOnly />
                                </div>
                                <button className="btn btn-primary px-3 ms-2" onClick={() => handleIncreaseQuantity(index)}>
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              <p className="text-start text-md-center">
                                <strong>{item.price}</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                      :
                      <h1>No Crops in the cart</h1>
                    }
                  </div>
                  <div className="card mb-4 mb-lg-0">
                    <div className="card-body">
                      <p><strong>We accept</strong></p>
                      <img className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa" />
                      <img className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express" />
                      <img className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard" />
  
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="cards mb-4">
                    <div className="card-header py-3 ">
                      <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="c ">
                      <ul className="list-group list-group-flush">
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center ">
                          Products
                          <span>
                            {cart.reduce((total, item) => total + item.quantity, 0)}
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Shipping
                          <span>Gratis</span>
                        </li>
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <strong>Total amount</strong>
                            <strong>
                              <p className="mb-0">(including VAT)</p>
                            </strong>
                          </div>
                          <span><strong>{totalAmount.toFixed(2)}</strong></span>
                        </li>
                      </ul>
                      <form action="" className=''>
                        <div class="input-group mt-3">
                          <textarea type="text" class="form-control" value={addressdetails.address} onChange={(e) => setAddressDetails({ ...addressdetails, address: e.target.value })} placeholder="Enter Your Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        </div>
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={hanndlepayment}>
                          Go to payment
                        </button>
                      </form>
  
  
  
                      {orderdetails?.data && (
  <div className="row">
    {orderdetails.data.crop_details.every(crop => crop.name && crop.quantity && crop.price) && (
      <Card style={{ width: '97%', marginTop: "30px" }}>
        <Card.Body>
          <Card.Title style={{ fontFamily: "serif", fontSize: "1.5em " }} className='text-danger'><span className="aboutfont">Your Order ID:</span> {orderdetails.data.id}</Card.Title>
          <Card.Title><span className="aboutfont">Crop Details:</span></Card.Title>
          {orderdetails.data.crop_details.map((crop, index) => (
            <div key={index}>
              {crop.name && crop.quantity && crop.price && (
                <>
                  <p><strong>Name:</strong> {crop.name}</p>
                  <p><strong>Quantity:</strong> {crop.quantity}</p>
                  <p><strong>Price:</strong> {crop.price}</p>
                </>
              )}
            </div>
          ))}
          <Card.Title><span className="aboutfont">Address:</span> {orderdetails.data.address}</Card.Title>
          <Card.Title><span className="aboutfont">Total:</span> {orderdetails.data.total}</Card.Title>
          <Card.Title><span className="aboutfont">Order Date:</span> {orderdetails.data.order_date}</Card.Title>
          <Card.Title><span className="aboutfont">Estimated Date:</span> {orderdetails.data.estimated_date}</Card.Title>
          <Card.Title style={{ fontFamily: "serif", fontSize: "1.5em ", color: "red" }}><span className="aboutfont text-danger">Username:</span> {orderdetails.data.username}</Card.Title>
          <Card.Title className='text-success'><span className="aboutfont text-black">Status:</span> {orderdetails.data.status}</Card.Title>
          <button type="button" className="btn btn-primary btn-lg btn-block">
            <Link style={{ textDecoration: "none" }} to={'/orderpage'}> Go to Payment</Link>
          </button>
        </Card.Body>
      </Card>
    )}
  </div>
)}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>)}:<div>
              {isToken ?
                <p style={{ marginBottom: "500px", fontSize: "50px"  }} className=' text-danger text-center'></p> :
                <div className='d-flex justify-content-center align-items-center flex-column mb-5' style={{marginTop:"70px"}}>
                  <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'}  />
                  <p className='mt-5' style={{ textDecoration: "ActiveBorder" }}>PLEASE<Link style={{ textDecoration: "none", color: "purple" }} to={'/login'}> LOGIN</Link></p>
                </div>
              }
            </div>
       </div>
       <Footer/>
      </div>

    </>

  )
}

export default Cart;








