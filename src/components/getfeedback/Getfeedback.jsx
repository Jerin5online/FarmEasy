import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { DeleteFeedbackAPI, getfeedbackAPI } from '../../Services/AllAPI';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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

// delete feedback
const handlefeebackDelete = async (id)=>{
  const token = sessionStorage.getItem("token")
  const reqHeader ={
    "Content-Type": "application/json",
    "Authorization": `Token ${token}` 
   }
   const result = await DeleteFeedbackAPI (id,reqHeader)
   console.log(result);
   if(result.status === 204){
    // window.location.reload()

    alert('deleted')
    getfeedback()
    
   
   }
   else{
    console.log(result.response.data);
   }
}


  return (
    <div className='feedbackbg'>
      <h3 style={{textAlign:"center",marginTop:"2em",fontFamily:"serif"}}>USER FEEDBACKS</h3>
      <Link style={{textAlign:"center" , justifyContent:"center" , textDecoration:"none"}} to={'/products'}><h5>/back</h5></Link>

       {feedback?.length>0?
       feedback.map((item)=>(<div style={{ display: 'flex', justifyContent: 'center' }}>
       <Card style={{ width: '60%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
       <div className="col border-right ">
       <ListGroup.Item>User : {item.username} </ListGroup.Item>
              <div className="d-flex flex-column align-items-center text-center ms-5">
                <img className="rounded-circle" style={{marginLeft:"700px" }}  width="70px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
              </div>
            </div>
         <ListGroup className="list-group-flush">
             <ListGroup.Item>ID : {item.id} </ListGroup.Item>
             <ListGroup.Item>Order : {item.order}</ListGroup.Item>
             <ListGroup.Item>Crop Name : {item.crop_names}</ListGroup.Item>
             <ListGroup.Item>Content :<span style={{color:"red"}}>{item.content}</span> </ListGroup.Item>
             <ListGroup.Item>Date Posted : {item.date_posted} </ListGroup.Item>
             {/* <Button onClick={()=>handlefeebackDelete(item.id)}  className='ms-2' variant="primary" >
        <i class="fa-solid fa-trash text-danger" />
      </Button> */}
         </ListGroup>
     </Card>
 </div>))
      :null  
      }

    </div>
  )
}

export default Getfeedback
