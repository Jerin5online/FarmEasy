import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { editofficeAPI } from '../../Services/AllAPI';


function Editoffice({office}) {

  const [show, setShow] = useState(false);

  const [editOffice , setEditOffice] = useState({
    id:office.id,
    name:office.name,
    location:office.location,
    contact_number:office.contact_number,
    email:office.email
  })

  const [preview, setPreiew] = useState("")


  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  

  const handleUpdateNews = async () => {
    const { id, name, location ,contact_number,email } = editOffice
    if (!id || !name || !location || !contact_number || !email) {
      Swal.fire({
        title: "Incomplete Form !",
        text: "Please fill in the form",
        icon: "error",
      });
    }
    else {
      const reqBody = new FormData()
      reqBody.append("id", id)
      reqBody.append("name", name)
      reqBody.append("location", location)
      reqBody.append("contact_number", contact_number)
      reqBody.append("email", email)



      const token = sessionStorage.getItem("token")
      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Token ${token}`
        }
        const result = await editofficeAPI(id, reqBody, reqHeader)
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "News Update Successfully",
            text: "Please fill in the form",
            icon: "success",
          });
          handleClose()
          setEditOffice(result.data)

        }
        else {
          console.log(result.response.data);
        }

      }
      else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`,
        };
        const result = await editofficeAPI(id, reqBody, reqHeader)
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "News Update Successfully",
            text: "Please fill in the form",
            icon: "success",
          });
          handleClose()
          setEditOffice(result.data)
          setTimeout(() => {
            window.location.reload();
          }, 60);
        }
        else {
          console.log(result.response.data);
        }
      }
    }
  }
         
  return (
    <>
       <Button variant="primary" onClick={handleShow}>
      <i class="fa-solid fa-pen text-white"/> 
      </Button>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
        <div className='mb-3 w-100'>
          <input type="text" className='form-control' placeholder='name' value={editOffice.name}  onChange={e=>setEditOffice({...editOffice,name:e.target.value})} />
         </div>

         <div className='mb-3 w-100'>
          <input type="text" className='form-control' placeholder='location ' value={editOffice.location}  onChange={e=>setEditOffice({...editOffice,location:e.target.value})}/>
         </div>
         <div className='mb-3 w-100'>
          <input type="text" className='form-control' placeholder='contact number ' value={editOffice.contact_number}  onChange={e=>setEditOffice({...editOffice,contact_number:e.target.value})} />
         </div>
    
         <div className='mb-3 w-100'>
          <input type="email" className='form-control' placeholder='email' value={editOffice.email}  onChange={e=>setEditOffice({...editOffice,email:e.target.value})} />
         </div>
    
    

    
        
    

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateNews}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editoffice
