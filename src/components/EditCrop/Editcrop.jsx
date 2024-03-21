// import React, { useContext, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { editCropResponseContext } from '../../contexts/ContextShare';
// import { EditCropAPI } from '../../Services/AllAPI';


// const Editcrop = ({ crop }) => {

//   const { editCropResponse, setEditCropResponse } = useContext(editCropResponseContext)

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   const [preview, setPreiew] = useState("")
//   const [editCrop, setEditCrop] = useState({
//     id: crop.id,
//     name: crop.name,
//     description: crop.description,
//     climate: crop.climate,
//     growthperiod: crop.growth_period,
//     harvestingtime: crop.harvesting_time,
//     techniques: crop. techniques
    
//   })
//   const handleUpdateCrop = async () => {
//     const { id, name, description, climate, growthperiod, harvestingtime, techniques } = editCrop
//     if (!id || !name || !description || !climate || !growthperiod || !harvestingtime || !techniques) {
//       Swal.fire({
//         title: "Incomplete Form !",
//         text: "Please fill in the form",
//         icon: "error",
//       });
//     }
//     else {
//       const reqBody = new FormData()
//       reqBody.append("id", id)
//       reqBody.append("name", name)
//       reqBody.append("description", description)
//       reqBody.append("climate", climate)
//       reqBody.append("growth_period", growthperiod)
//       reqBody.append("harvesting_time", harvestingtime)
//       reqBody.append("techniques", techniques)


//       const token = sessionStorage.getItem("token")
//       if (preview) {
//         const reqHeader = {
//           "Content-Type": "multipart/form-data",
//           "Authorization": `Token ${token}`
//         }
//         const result = await EditCropAPI(id, reqBody, reqHeader)
//         console.log(result);
//         if (result.status === 200) {
//           Swal.fire({
//             title: "Crop Update Successfully",
//             text: "Please fill in the form",
//             icon: "success",
//           });
//           handleClose()
//           setEditNews(result.data)

//         }
//         else {
//           console.log(result.response.data);
//         }

//       }
//       else {
//         const reqHeader = {
//           "Content-Type": "application/json",
//           "Authorization": `Token ${token}`,
//         };
//         const result = await EditCropAPI(id, reqBody, reqHeader)
//         console.log(result);
//         if (result.status === 200) {
//           Swal.fire({
//             title: "Crop Update Successfully",
//             text: "Please fill in the form",
//             icon: "success",
//           });
//           handleClose()
//           setEditCrop(result.data)
//           setTimeout(() => {
//             window.location.reload();
//           }, 60);
//         }
//         else {
//           console.log(result.response.data);
//         }
//       }
//     }
//   }
//   return (


//     <>
//       <Button variant="primary" onClick={handleShow}>
//         <i class="fa-solid fa-pen text-white" />
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>UPDATE CROP</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//           <div className='mb-3 w-100'>
//             <input type="text" className='form-control' value={editCrop.name} onChange={e => setEditCrop({ ...editCrop, name: e.target.value })} />
//           </div>

//           <div className='mb-3 w-100' >
//             <textarea style={{ height: "120px" }} type="text" className='form-control' placeholder='Project Language' value={editCrop.description} onChange={e => setEditCrop({ ...editCrop, description: e.target.value })} />
//           </div>
//           <div className='mb-3 w-100' >
//             <input type="text" className='form-control' value={editCrop.climate} onChange={e => setEditCrop({ ...editCrop, climate: e.target.value })} />
//           </div>
//           <div className='mb-3 w-100' >
//             <input type="text" className='form-control' value={editCrop.growthperiod} onChange={e => setEditCrop({ ...editCrop, growth_period: e.target.value })} />
//           </div>
//           <div className='mb-3 w-100' >
//             <input type="text" className='form-control' value={editCrop.harvestingtime} onChange={e => setEditCrop({ ...editCrop, harvesting_time: e.target.value })} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="technique1">Technique 1</label>
//             <input value={editCrop.techniques[0]} onChange={(e) => {
//               const newTechniques = [...editCrop.techniques];
//               newTechniques[0] = e.target.value;
//               setEditCrop({ ...editCrop, techniques: newTechniques });
//             }} required className="form-control" name="technique1" id="technique1" type="text" />
//           </div>
//           <div className="form-group">
//                 <label htmlFor="technique2">Technique 2</label>
//                 <input value={editCrop.techniques[1]} onChange={(e) => {
//                   const newTechniques = [...editCrop.techniques];
//                   newTechniques[1] = e.target.value;
//                   setEditCrop({ ...editCrop, techniques: newTechniques });
//                 }} required className="form-control" name="technique2" id="technique2" type="text" />
//               </div>


//         </Modal.Body>
//         <Modal.Footer>

//           <Button variant="primary" onClick={handleUpdateCrop}>
//             UPDATE
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   )
// }

// export default Editcrop

import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editCropResponseContext } from '../../contexts/ContextShare';
import { EditCropAPI } from '../../Services/AllAPI';
import Swal from 'sweetalert2';

const Editcrop = ({ crop }) => {
  const { editCropResponse, setEditCropResponse } = useContext(editCropResponseContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editCrop, setEditCrop] = useState({
    id: crop.id,
    name: crop.name,
    description: crop.description,
    climate: crop.climate,
    growthperiod: crop.growth_period,
    harvestingtime: crop.harvesting_time,
    techniques: crop.techniques.map((technique, index) => ({ id: index, value: technique })),
  });

  const handleTechniqueChange = (index, value) => {
    const updatedTechniques = [...editCrop.techniques];
    updatedTechniques[index].value = value;
    setEditCrop({ ...editCrop, techniques: updatedTechniques });
  };

  const handleAddTechnique = () => {
    const newTechnique = { id: editCrop.techniques.length, value: '' };
    setEditCrop({ ...editCrop, techniques: [...editCrop.techniques, newTechnique] });
  };

  const handleRemoveTechnique = (index) => {
    const updatedTechniques = editCrop.techniques.filter((technique) => technique.id !== index);
    setEditCrop({ ...editCrop, techniques: updatedTechniques });
  };

  const handleUpdateCrop = async () => {
    const { id, name, description, climate, growthperiod, harvestingtime, techniques } = editCrop;

    // Check if any field is empty
    if ([name, description, climate, growthperiod, harvestingtime].some((field) => !field) || techniques.some((technique) => !technique.value)) {
      Swal.fire({
        title: 'Incomplete Form!',
        text: 'Please fill in all fields',
        icon: 'error',
      });
      return;
    }

    const reqBody = {
      id,
      name,
      description,
      climate,
      growth_period: growthperiod,
      harvesting_time: harvestingtime,
      techniques: techniques.map((technique) => technique.value),
    };

    const token = sessionStorage.getItem('token');
    const reqHeader = {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    };

    const result = await EditCropAPI(id, reqBody, reqHeader);
    if (result.status === 200) {
      Swal.fire({
        title: 'Crop Updated Successfully',
        text: 'The crop has been updated successfully',
        icon: 'success',
      });
      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 60);
      // Handle updating state or any other necessary actions
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update crop',
        icon: 'error',
      });
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="fa-solid fa-pen text-white" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>UPDATE CROP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3 w-100">
            <input
              type="text"
              className="form-control"
              value={editCrop.name}
              onChange={(e) => setEditCrop({ ...editCrop, name: e.target.value })}
            />
          </div>
          <div className="mb-3 w-100">
            <textarea
              style={{ height: '120px' }}
              type="text"
              className="form-control"
              placeholder="Description"
              value={editCrop.description}
              onChange={(e) => setEditCrop({ ...editCrop, description: e.target.value })}
            />
          </div>
          <div className="mb-3 w-100">
            <input
              type="text"
              className="form-control"
              value={editCrop.climate}
              onChange={(e) => setEditCrop({ ...editCrop, climate: e.target.value })}
            />
          </div>
          <div className="mb-3 w-100">
            <input
              type="text"
              className="form-control"
              value={editCrop.growthperiod}
              onChange={(e) => setEditCrop({ ...editCrop, growthperiod: e.target.value })}
            />
                  </div>

                      <div className="mb-3 w-100">
            <input
              type="text"
              className="form-control"
              value={editCrop.harvestingtime}
              onChange={(e) => setEditCrop({ ...editCrop, harvestingtime: e.target.value })}
            />
          </div>
          {/* Techniques */}
          {editCrop.techniques.map((technique, index) => (
            <div key={technique.id} className="form-group">
              <label htmlFor={`technique${technique.id + 1}`}>{`Technique ${index + 1}`}</label>
              <div className="input-group">
                <input
                  value={technique.value}
                  onChange={(e) => handleTechniqueChange(index, e.target.value)}
                  required
                  className="form-control"
                  name={`technique${technique.id + 1}`}
                  id={`technique${technique.id + 1}`}
                  type="text"
                />
                <button className="btn btn-outline-danger mt-2" onClick={() => handleRemoveTechnique(technique.id)}>
                  Remove
                </button>
              </div>
            </div>
            
          ))}
          <button className="btn btn-outline-primary mb-3" onClick={handleAddTechnique}>
            Add Technique
          </button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdateCrop}>
            UPDATE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Editcrop;

         

