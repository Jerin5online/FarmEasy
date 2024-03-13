
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import "./About.css"
import MyHeader from '../myHeader/MyHeader';
import Footer from '../footer/Footer';
import { cropsinfoAPI } from '../../Services/AllAPI';
import { Link } from 'react-router-dom';


const About = () => {

  const [cropsInfo, setCropsInfo] = useState([])
  const [search,setSearch] =useState("")
  console.log(search);
  const [istoken,setIstoken] = useState(false)

  const getcropinfo = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {

        "Content-Type": "application/json",
        "Authorization": `Token ${token}`

      }
      const result = await cropsinfoAPI(reqHeader)
      console.log(result);
      setCropsInfo(result.data)
    }
  }
  useEffect(() => {
    getcropinfo()
  }, [])

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setIstoken(true)
    }
  },[])
  return (
    <>
      <MyHeader />
      <div class="container mt-5">
        <h1 style={{ fontFamily: "serif" }}>Crop Information</h1>
        <div class="input-group mb-5" style={{alignItems:"center",justifyContent:"center"}}>
        <form class="d-flex">
          <input onChange={(e)=>setSearch(e.target.value)} class="form-control me-sm-2 border border-dark" type="search" placeholder="Search for a crop..."/>
        </form>
    </div>
       {cropsInfo?.length>0?
       cropsInfo.filter((item)=>{
        return search.toLowerCase()===''?item:item.name.toLowerCase().includes(search)
       })
       .map((item)=>( <div className="row">
       
        <Card style={{ width: '97%', }}>
         <Card.Body>
           <Card.Title><span className="aboutfont">Name :</span> {item.name} </Card.Title>
           <Card.Title><span className="aboutfont">Description :</span>{item.description} </Card.Title>
           <Card.Title><span className="aboutfont">Climate :</span>{item.climate} </Card.Title>
           <Card.Title><span className="aboutfont">Growth Period :</span> {item.growth_period} </Card.Title>
           <Card.Title><span className="aboutfont">Harvestinng Time :</span>{item.harvesting_time} </Card.Title>
           <Card.Title><span className="aboutfont">Techniques :</span> {item.techniques} </Card.Title>


         </Card.Body>
       </Card>
     </div>)):<div>
             {istoken?<p style={{marginBottom:"500px" ,fontSize:"50px"}} className=' text-danger  text-center'>sorry! no such Crops currently available</p> : <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} />
                <p className='mt-5' style={{textDecoration:"ActiveBorder"}}>please login to view more class<Link style={{textDecoration:"none", color:"purple"}} to={'/login'}> LOGIN</Link></p></div>}
            </div>}
      </div>
      <Footer />

    </>
  )
}

export default About