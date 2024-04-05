import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';
import { paymentAPI } from '../../Services/AllAPI';
import Swal from 'sweetalert2';


function Orderproduct() {

  const [orderData, setOrderData] = useState({
    orderid: "",
    username: "",
    card_number: "",
    cvv: "",
    expiry_date: ""


  })
  const [token, setToken] = useState("");


  console.log(orderData);
  const navigate = useNavigate();

  //payment

  useEffect(() => {
    const tokenFromSession = sessionStorage.getItem("token");
    setToken(tokenFromSession || "");
  }, []);


  const handlePayment = async (e) => {
    e.preventDefault()
    const { orderid, username, card_number, cvv, expiry_date } = orderData;

    if (!orderid || !username || !card_number || !cvv || !expiry_date) {

      Swal.fire({
        title: "Incomplete Form !",
        text: "Please fill in the form",
        icon: "error",
      });
    }
    else {
      const reqBody = {
        orderid,
        username,
        card_number,
        cvv,
        expiry_date

      };
      if (token) {
        const reqHeader = {
          "Authorization": `Token ${token}`
        };
        try {
          const result = await paymentAPI(reqBody, reqHeader);
          console.log(result.data.data);
          Swal.fire({
            title: "Payment successfull !",
            text: (result.data.data.orderid),
            icon: "success"
          });

          if (result.status === 201) {
            // Clear the form fields after successful addition
            setOrderData({
              orderid: "",
              username: "",
              card_number: "",
              cvv: "",
              expiry_date: ""
            });
            // navigate('/')
          }
          else {
            console.log(result.data);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    // Set isLoggedIn state to true upon successful registration
  };

  return (
    <>


      <MDBContainer
        className="py-5"
        fluid
        style={{ backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)", height: "817px" }}
      >
        <MDBRow className=" d-flex justify-content-center mt-5">
          <MDBCol md="10" lg="8" xl="5">
            <MDBCard className="rounded-3">



              <MDBCardBody className="p-4">
                <div className="text-center mb-4">
                  <h3>Settings</h3>
                  <h6>Payment</h6>
                </div>
                <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                <div className="d-flex flex-row align-items-center mb-4 pb-1">

                  <div className="flex-fill mx-3">
                    <div className="form-outline">
                      <MDBInput
                        label="order id"
                        id="form1"
                        type="text"
                        size="lg"

                        value={orderData.orderid} onChange={(e) => setOrderData({ ...orderData, orderid: e.target.value })}

                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                  />
                  <div className="flex-fill mx-3">
                    <div className="form-outline">
                      <MDBInput
                        label="username"
                        id="form2"
                        type="text"
                        size="lg"

                        value={orderData.username} onChange={(e) => setOrderData({ ...orderData, username: e.target.value })}

                      />
                    </div>
                  </div>
                </div>
                <div className="flex-fill mx-3 mt-2">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      size="lg"

                      value={orderData.card_number} onChange={(e) => setOrderData({ ...orderData, card_number: e.target.value })}

                    />
                  </div>
                </div>

                <div className="flex-fill mx-3 mt-2">
                  <div className="form-outline">
                    <MDBInput
                      label="CVV"
                      id="form1"
                      type="text"
                      size="lg"

                      value={orderData.cvv} onChange={(e) => setOrderData({ ...orderData, cvv: e.target.value })}

                    />
                  </div>

                </div>
                <div className="flex-fill mx-3 mt-2">
                  <div className="form-outline">
                    <MDBInput
                      label="expiry date"
                      id="form1"
                      type="text"
                      size="lg"

                      value={orderData.expiry_date} onChange={(e) => setOrderData({ ...orderData, expiry_date: e.target.value })}

                    />
                  </div>

                </div>



                <div className="d-flex flex-row align-items-center mb-4 pb-1">


                </div>
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                </div>
                <MDBBtn type='submit' onClick={handlePayment} color="success" size="lg" block>
                  Proceed payment
                </MDBBtn>
              </MDBCardBody>


            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </>
  )
}

export default Orderproduct
