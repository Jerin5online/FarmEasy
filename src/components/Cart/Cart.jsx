import React, { useEffect, useState } from 'react';
import MyHeader from '../myHeader/MyHeader';
import "./Cart.css";
import { getCartproducts } from '../../Services/AllAPI';
import Footer from '../footer/Footer';

function Cart() {

  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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
      setCart(updatedCart);
      calculateTotalAmount(updatedCart);
    }
  };

  useEffect(() => {
    getcartsProducts();
  }, []);

  return (
    <>
      <div>
        <MyHeader />

        <section className="h-100 gradient-custom">
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
                              <button className="btn btn-primary px-3 ms-2" onClick={() => { }}>
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
              <div className="col-md-4">
                <div className="cards mb-4">
                  <div className="card-header py-3">
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

                    <button type="button" className="btn btn-primary btn-lg btn-block mt-4">
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      </div>
    <Footer/>
    </>
  
  )
}

export default Cart;
