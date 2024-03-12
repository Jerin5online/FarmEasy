import { Card } from "react-bootstrap";
import Footer from "../footer/Footer";
import MyHeader from "../myHeader/MyHeader";
import "./Office.css";
import { useEffect, useState } from "react";
import { agriofficeAPI } from "../../Services/AllAPI";

const Office = () => {

  const [agrioffice, setAgriOffice] = useState({})

  const getAgriOffice = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      }
      const result = await agriofficeAPI(reqHeader)
      console.log(result.data.data);
      setAgriOffice(result.data.data)
    }
  }

  useEffect(() => {
    getAgriOffice()
  }, [])

  return (
    <>
      <div>
        <MyHeader />
        <h2 style={{ fontFamily: "serif", textAlign: "center" }}>Agriculture Offices Locator</h2>


        <div className="container mt-5">
          {agrioffice?.length > 0 ?
            agrioffice.map((item) => (<div className="row" style={{ alignItems: "center" }}>

              <Card style={{ width: '50%', justifyContent: "center" }}>
                <Card.Body>
                  <Card.Title><span className="aboutfont">Name :</span> {item.name}  </Card.Title>
                  <Card.Title><span className="aboutfont">Location :</span>{item.location}</Card.Title>
                  <Card.Title><span className="aboutfont">Contact Number :</span> {item.contact_number}</Card.Title>
                  <Card.Title><span className="aboutfont">Email Id :</span> {item.email} </Card.Title>



                </Card.Body>
              </Card>
            </div>)) : <p>no data</p>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Office