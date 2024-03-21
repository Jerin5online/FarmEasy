import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { editNewsResponseContext } from '../../contexts/ContextShare';
import { DeleteNewsAPI, EditNewsAPI } from '../../Services/AllAPI';

function EditNews({ news }) {

  const { editProjectResponse, setEditProjectResponse } = useContext(editNewsResponseContext)
  const [preview, setPreiew] = useState("")


  const [show, setShow] = useState(false);

  

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);


  const [editNews, setEditNews] = useState({
    id: news.id,
    title: news.title,
    content: news.content,
  })
  const handleUpdateNews = async () => {
    const { id, title, content } = editNews
    if (!id || !title || !content) {
      Swal.fire({
        title: "Incomplete Form !",
        text: "Please fill in the form",
        icon: "error",
      });
    }
    else {
      const reqBody = new FormData()
      reqBody.append("id", id)
      reqBody.append("title", title)
      reqBody.append("content", content)

      const token = sessionStorage.getItem("token")
      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Token ${token}`
        }
        const result = await EditNewsAPI(id, reqBody, reqHeader)
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "The News has been updated successfully",
            text: "Please fill in the form",
            icon: "success",
          });
          handleClose()
          setEditNews(result.data)

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
        const result = await EditNewsAPI(id, reqBody, reqHeader)
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "News Update Successfully",
            text: "Please fill in the form",
            icon: "success",
          });
          handleClose()
          setEditNews(result.data)
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
        <i class="fa-solid fa-pen text-white" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='mb-3 w-100'>
            <input type="text" className='form-control' placeholder='Project Title ' value={editNews.title} onChange={e => setEditNews({ ...editNews, title: e.target.value })} />
          </div>

          <div className='mb-3 w-100' >
            <textarea style={{ height: "270px" }} type="text" className='form-control' placeholder='Project Language' value={editNews.content} onChange={e => setEditNews({ ...editNews, content: e.target.value })} />
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateNews}>
            UPDATE
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default EditNews
