import React from 'react'
import MyHeader from '../myHeader/MyHeader'
import Card from 'react-bootstrap/Card';

function ImageHealth() {
  return (
    < >
      <MyHeader/>
      <h1 style={{textAlign:"center", marginTop:"20px"}}>here is the images health assesment</h1>

      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
  <div className="row">
    <div className="col text-center">
      {/* <h1>helloo</h1> */}
      <Card style={{ width: '18rem' }}>
      <label htmlFor="imagess" className=''>
       <input id='imagess' type="file" style={{ display: "none" }} onChange={(e) => setClassDetails({ ...classdetails, classImage: e.target.files[0] })} />
       <img src="https://endlessicons.com/wp-content/uploads/2012/12/add-icon-614x460.png" alt="no image" width={'100%'} />
       </label>
        {/* <Card.Img variant="top" src="https://endlessicons.com/wp-content/uploads/2012/12/add-icon-614x460.png" /> */}
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  </div>
</section>

    </>
  )
}

export default ImageHealth
