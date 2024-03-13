import React, { useEffect, useState } from 'react'
import MyHeader from '../myHeader/MyHeader'
import "./Farmerproducts.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { productsAPI } from '../../Services/AllAPI';
import { BASE_URL } from '../../Services/BaseURL';

function Farmerproduct() {

const[products,setProducts]=useState([])

const getproducts = async()=>{
if (sessionStorage.getItem("token")) {
const token = sessionStorage.getItem("token")
const reqHeader={
 "Content-Type": "application/json",
  "Authorization": `Token ${token}`
}

const result = await productsAPI(reqHeader)
console.log(result);
if (result.status === 200) {
setProducts(result.data)    
}

}
}

useEffect(()=>{
   getproducts()
},[])




  return (
    <>
    <MyHeader/>
     <h1 className='container'>PRODUCTS</h1>
     {products?.length>0?
     products.map((item)=>(<div className='row'>
              <Card style={{ width: '18rem' }}>
              <img src={item?`${BASE_URL}/media/product_image/${item.image}`:"https://www.yogabaron.com/wp-content/uploads/2018/12/Yoga-teacher-at-front-of-yoga-class-dec9.jpg"} alt="Image 4"/>               <Card.Body>
                 <Card.Text> CROP NAME: {item.crop_name} </Card.Text>
               </Card.Body>
               <ListGroup className="list-group-flush">
                 <ListGroup.Item>CROP TYPE:{item.crop_type} </ListGroup.Item>
                 <ListGroup.Item>DESCRIPTION: {item.description} </ListGroup.Item>
                 <ListGroup.Item>QUANTITY: {item.quantity} </ListGroup.Item>
                 <ListGroup.Item>POSTED BY: {item.posted_by} </ListGroup.Item> 
                 <ListGroup.Item>PRICE:  <button className='price'>₹{item.price}</button></ListGroup.Item> 
         
               </ListGroup>
               <Card.Body>
               <Card.Link href="#" className='text-decoration-none'>BUY NOW</Card.Link>
               </Card.Body>
             </Card>
         
              </div>)):<p>no products</p>}
    </>
  )
}

export default Farmerproduct
