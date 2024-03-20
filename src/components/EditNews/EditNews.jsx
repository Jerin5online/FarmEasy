import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditNews({news}) {

  const [show, setShow] = useState(false);

  const [editNews , setEditNews] = useState({
              id:news.id,
              title:news.title,
              content:news.content,      
  })

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
          
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
                        <input type="text" className='form-control' placeholder='Project Title ' value={editNews.title} onChange={e=>setEditNews({...editNews,title:e.target.value})} />
                     </div>
    
                     <div className='mb-3 w-100' >
                        <textarea  style={{height:"270px"}} type="text" className='form-control' placeholder='Project Language' value={editNews.content} onChange={e=>setEditNews({...editNews,content:e.target.value})}   />
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

export default EditNews
