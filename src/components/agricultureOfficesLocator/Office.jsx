import { Card } from "react-bootstrap";
import Footer from "../footer/Footer";
import MyHeader from "../myHeader/MyHeader";
import "./Office.css";
import { useEffect, useState } from "react";
import { agriofficeAPI, deleteofficeAPI } from "../../Services/AllAPI";
import { Link } from "react-router-dom";
import Editoffice from "../Editoffice/Editoffice";

const Office = () => {

  const [agrioffice, setAgriOffice] = useState({})
  const [istoken, setIstoken] = useState(false)

  const getAgriOffice = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }
      const result = await agriofficeAPI(reqHeader)
      console.log(result.data);
      setAgriOffice(result.data)
    }
  }

  useEffect(() => {
    getAgriOffice()
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIstoken(true)
    }
  }, [])

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`
    }
    const result = await deleteofficeAPI(id, reqHeader)
    console.log(result);
    if (result.status === 204) {
      // window.location.reload()

      alert('deleted')
      getAgriOffice()


    }
    else {
      console.log(result.response.data);
    }
  }

  return (
    <>
      <div className="officebg">
        {sessionStorage.getItem("admin") ? null : <MyHeader />}
        <h2 className="mt-5" style={{ fontFamily: "serif", textAlign: "center" }}>Agriculture officers locator</h2>


        <div className="container mt-5">
          {agrioffice?.length > 0 ?
            agrioffice.map((item) => (<div className="row" style={{ alignItems: "center", justifyContent: "center" , marginBottom:"100px" }}>

              <Card style={{ width: '50%', justifyContent: "center" , alignItems:"center"  }}>
                <Card.Body>
                  <Card.Title><span className="aboutfont">Name :</span> {item.name}  </Card.Title>
                  <Card.Title><span className="aboutfont">Location :</span>{item.location}</Card.Title>
                  <Card.Title><span className="aboutfont">Contact Number :</span> {item.contact_number}</Card.Title>
                  <Card.Title><span className="aboutfont">Email Id :</span> {item.email} </Card.Title>
                  {sessionStorage.getItem("user") ? null : (
                    <div className='mt-3'>
                    </div>
                  )}

                  {sessionStorage.getItem("admin") ? (
                    <div className='mt-3'>
                      <Editoffice office={item} />
                      <i className="fa-solid fa-trash ms-3 text-success" onClick={() => handleDelete(item.id)} ></i>
                    </div>
                  ) : null}
                </Card.Body>
              </Card>
            </div>)) : <div>
              {istoken ? <p style={{ marginBottom: "500px", fontSize: "50px" }} className=' text-danger  text-center'>sorry! no such Crops currently available</p> : <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} />
                <p className='mt-5' style={{ textDecoration: "ActiveBorder" }}>PLEASE<Link style={{ textDecoration: "none", color: "purple" }} to={'/login'}> LOGIN</Link></p></div>}
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Office