import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProductAPI } from '../../Services/AllAPI';
import { addProductResponseContext } from '../../contexts/ContextShare';
import Swal from 'sweetalert2';

function Addproduct() {
  const {addProductResponse,setAddProductResponse}= useContext(addProductResponseContext)

  const [preview, setPreview] = useState("")
  const[token,setToken] =useState("")


    const [productDetails, setProductDetails] = useState({
        crop_name:"",
        croptype: "",
        productImage: "",
        price: "",
        quantity: "",
        description: "",
        posted_by: "",
    })

    

    console.log(productDetails);

    const handleClose1 = () => {
        setProductDetails({
          croptype: "",
          crop_name:"",
          productImage: "",
          price: "",
          quantity: "",
          description: "",
          posted_by: "",
        })
    }
    useEffect(() => {
        if (productDetails.productImage) { (setPreview(URL.createObjectURL(productDetails.productImage))) }
        else {
            setPreview("")
        }
    }, [productDetails.productImage])

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        else {
            setToken("")
        }
    }, [])

    console.log(preview);

    //  ad project
    const handleAdd = async (e) => {
        e.preventDefault()

        const { croptype,crop_name, productImage, price, quantity, description, posted_by } = productDetails

        if (!croptype || !crop_name || !productImage || !price || !quantity || !description || !posted_by) {
          Swal.fire({
            icon: "info",
            title: "Please fill the form completely"
          });        }
        else {
            // reqbody
            ///create object for form data
            const reqBody = new FormData()
            //add data to form data - append()
            reqBody.append("crop_type", croptype)

            reqBody.append("crop_name", crop_name)

            reqBody.append("image", productImage)

            reqBody.append("price", price)
            reqBody.append("quantity", quantity)
            reqBody.append("description", description)
            reqBody.append("posted_by", posted_by)


            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization":` Token ${token}`
                }

              const result = await addProductAPI(reqBody, reqHeader)
                console.log(result);
                if(result.status === 201){
                    console.log(result);
                    Swal.fire({
                      icon: "success",
                      title: "Product Added successfully"
                    });
                    handleClose()
                    setAddProductResponse(result)
                }
                else{
                    console.log(result.response.data);
                }
            }
        }
    }

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
        Add your products
      </Button>

      <Modal show={show}
                onHide={handleClose}
                backdrop="static" 
                keyboard={false}
                centered>
        <Modal.Header closeButton>
          <Modal.Title>ADD CROPS</Modal.Title>
        </Modal.Header>
        <div className='mb-3 p-2'>
        <input type="text" onChange={(e)=>setProductDetails({...productDetails,crop_name:e.target.value})}  className='form-control mt-2' placeholder='Crop Name' />
         <input type="text" onChange={(e)=>setProductDetails({...productDetails,croptype:e.target.value})}  className='form-control mt-2' placeholder='Crop Type' />
         <input type="text" onChange={(e)=>setProductDetails({...productDetails,description:e.target.value})} className='form-control mt-2' placeholder='Description'  />
         <input type="number" onChange={(e)=>setProductDetails({...productDetails,quantity:e.target.value})} className='form-control mt-2' placeholder='Quantity'  />
         <input type="text" onChange={(e)=>setProductDetails({...productDetails,posted_by:e.target.value})} className='form-control mt-2' placeholder='Posted By'  />
         <input type="text" onChange={(e)=>setProductDetails({...productDetails,price:e.target.value})} className='form-control mt-2' placeholder='Price' />
         <input type="file" onChange={(e)=>setProductDetails({...productDetails,productImage:e.target.files[0]})} className='form-control mt-2' placeholder='' />



                            </div>        

        <Modal.Footer>
        
          <Button variant="primary" type='submit' onClick={handleAdd}>
            Add Products
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproduct
