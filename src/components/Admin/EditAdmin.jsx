import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditAdmin = () => {
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

//  const[editadmin,setEditadmin] = useState({
//  username:

//  })


            
  return (
    <>
       

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
 <div className='mb-3 w-100'>
   <input type="text" className='form-control' placeholder='Admin username ' />
</div>
    
<div className='mb-3 w-100'>
<input type="text" className='form-control' placeholder='Admin password'    />
</div>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditAdmin
