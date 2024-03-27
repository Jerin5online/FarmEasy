import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getfeedbackAPI } from '../../Services/AllAPI';
import { Link } from 'react-router-dom';

function Getfeedback() {

const[feedback,setFeedback] = useState("")
const [isToken, setIsToken] = useState(false);



useEffect(() => {
  const getfeedback = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      };
      const result = await getfeedbackAPI(reqHeader);
      setFeedback(result.data);
    }
  };

  getfeedback();
}, []);

useEffect(() => {
  if (sessionStorage.getItem("token")) {
    setIsToken(true);
  }
}, []);

  return (
    <div className='feedbackbg'>
      <h3 style={{textAlign:"center",marginTop:"2em",fontFamily:"serif"}}>USER FEEDBACKS</h3>
      <Link style={{textAlign:"center" , justifyContent:"center" , textDecoration:"none"}} to={'/products'}><h5>/back</h5></Link>

       {feedback?.length>0?
       feedback.map((item)=>(<div style={{ display: 'flex', justifyContent: 'center' }}>
       <Card style={{ width: '60%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
         <ListGroup className="list-group-flush">
             <ListGroup.Item>ID : {item.id} </ListGroup.Item>
             <ListGroup.Item>Order : {item.order}</ListGroup.Item>
             <ListGroup.Item>Username : {item.username} </ListGroup.Item>
             <ListGroup.Item>Crop Name : {item.crop_names}</ListGroup.Item>
             <ListGroup.Item>Content :{item.content} </ListGroup.Item>
             <ListGroup.Item>Date Posted : {item.date_posted} </ListGroup.Item>
         </ListGroup>
     </Card>
 </div>))
      :null  
      }

    </div>
  )
}

export default Getfeedback
