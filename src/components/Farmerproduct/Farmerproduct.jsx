import React, { useEffect, useState } from 'react';
import MyHeader from '../myHeader/MyHeader';
import "./Farmerproducts.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { productsAPI, addtoCartAPI } from '../../Services/AllAPI'; // Import addtoCartAPI
import { BASE_URL } from '../../Services/BaseURL';
import { Link } from 'react-router-dom';
import Addproduct from '../Addproducts/Addproduct';
import Footer from '../footer/Footer';
import { Button } from 'react-bootstrap';
import { addProductResponseContext } from '../../contexts/ContextShare';

function Farmerproduct() {
  const [products, setProducts] = useState([]);
  const [isToken, setIsToken] = useState(false)
  const token = sessionStorage.getItem("token");


  const getProducts = async () => {
    if("token"){
      
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      };

      const result = await productsAPI(reqHeader);
      console.log(result);
      if (result.status === 200) {
        setProducts(result.data.data);
      }
    }
    else{
      alert('please login')
    }
  };

  useEffect(() => {
    getProducts();
  }, [token]);

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
     setIsToken(true)
    }
  },[])

  const addToCart = async (item) => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      };
      const reqBody = {
        crop_name: item.data.crop_name,
        quantity: item.data.quantity
      };
      const result = await addtoCartAPI(reqBody,reqHeader);
      
      console.log(result.data);
    }
   // console.log(`${BASE_URL}${products[0].image}`)
  };
  return (
    <>
      <MyHeader />
      <h1 className='text-center mt-5 mb-4'>PRODUCTS</h1>
      <Card.Body className='me-5 mb-5' style={{justifyContent:"end",display:"flex"}}>
      <Link to={'/feedbackview'}><button type="button" class="btn btn-outline-danger">USER FEEDBACKs</button>               
 </Link>
       </Card.Body>
     
      <div className="row">
        {products?.length > 0 ?
          products.map((item, index) => (
            <div className="col-md-3" key={index}>
              <Card style={{ width: '18rem', height: '45rem' }}>
                <img style={{ height: '13rem' }} src={`${BASE_URL}${item.data.image}`} alt={item.data.crop_name} />
                <Card.Body>
                  <Card.Text> CROP NAME: {item.data.crop_name} </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>CROP TYPE: {item.data.crop_type} </ListGroup.Item>
                  <ListGroup.Item>DESCRIPTION: {item.data.description} </ListGroup.Item>
                  <ListGroup.Item>QUANTITY: {item.data.quantity} </ListGroup.Item>
                  <ListGroup.Item>POSTED BY: {item.data.posted_by} </ListGroup.Item>
                  <ListGroup.Item>PRICE: <button className='price'>₹ {item.data.price}</button></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <button  onClick={() => addToCart(item)} className='text-decoration-none p-2 btn text-info'>ADD TO CART</button>
                </Card.Body>
              </Card>
            </div>
          )) :
          <div>
             {isToken?<p style={{marginBottom:"500px" ,fontSize:"50px"}} className=' text-danger  text-center'>sorry! no such Crops currently available</p> : <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} />
                <p className='mt-5' style={{textDecoration:"ActiveBorder"}}>PLEASE<Link style={{textDecoration:"none", color:"purple"}} to={'/login'}> LOGIN</Link></p></div>}
            </div>
        }
      </div>
      <Footer/>
    </>
  );
}

export default Farmerproduct;
