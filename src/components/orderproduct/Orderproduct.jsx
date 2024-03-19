import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";


function Orderproduct() {
  return (
    <>
    

    <MDBContainer
      className="py-5"
      fluid
      style={{backgroundImage:"url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",height:"817px"}}
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
                      label="Crop Name"
                      id="form1"
                      type="text"
                      size="lg"
                      value=""
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
                      label="Quantity"
                      id="form2"
                      type="number"
                      size="lg"
                      value=""
                    />
                  </div>
                </div>
              </div>
              
              <MDBRow className="my-4">
              <MDBCol size="6" >
                  <MDBInput
                    label="Prices"
                    id="form5"
                    type=""
                    size="lg"
                    placeholder=""

                  />
                </MDBCol>
                <MDBCol size="6">
                  <MDBInput
                    label="Total"
                    id="form5"
                    type=""
                    size="lg"
                    placeholder=""
                  />
                </MDBCol>
              <MDBCol size="6" className='mt-3'>
                  <MDBInput
                    label="Order date"
                    id="form5"
                    type="date"
                    size="lg"
                    placeholder=""
                  />
                </MDBCol>
                <MDBCol size="6" className='mt-3'>
                  <MDBInput
                    label="Estimated date"
                    id="form5"
                    type="date"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
               
              </MDBRow>
              <MDBBtn color="success" size="lg" block>
                Add card
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
