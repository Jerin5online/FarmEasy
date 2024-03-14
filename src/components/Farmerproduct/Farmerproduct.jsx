import React, { useEffect, useState } from 'react';
import MyHeader from '../myHeader/MyHeader';
import "./Farmerproducts.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { productsAPI } from '../../Services/AllAPI';
import { BASE_URL } from '../../Services/BaseURL';

function Farmerproduct() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
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
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <MyHeader />
      <h1 className='container'>PRODUCTS</h1>
      <div className="row">
        {products?.length > 0 ?
          products.map((item, index) => (
            <div className="col-md-3"  key={index}>
              <Card style={{ width: '18rem' }}>
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
                  <Card.Link href="#" className='text-decoration-none'>BUY NOW</Card.Link>
                </Card.Body>
              </Card>
            </div>
          )) :
          <p>no products</p>
        }
      </div>
    </>
  );
}

export default Farmerproduct;
