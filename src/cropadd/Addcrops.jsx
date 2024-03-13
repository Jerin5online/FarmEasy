import React from 'react'
import "./Addcrops.css"
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import News from '../components/newsAndUpdates/News'

const Addcrops = () => {
  return (
    <>
    <div id='cropbg' className='d-flex align-items-center justify-content-center' >
    <div  className='card '>
    <Link className='text-decoration-none' to={'/adminhome'}><i class="fa-solid fa-arrow-left"></i> Back  to home</Link>

  <div class="card-headerr mt-2">
    <div class="text-header">ADD CROPS</div>
  </div>
  <div class="card-body">
    <form action="#">
      <div class="form-group">
        <label for="username">Name</label>
        <input required="" class="form-control" name="username" id="username" type="text"/>
      </div>
      <div class="form-group">
        <label for="text">description</label>
        <input required="" class="form-control" name="email" id="email" type="textare"/>
      </div>
      <div class="form-group">
        <label for="password">Climate</label>
        <input required="" class="form-control" name="password" id="password" type="text"/>
      </div>
      <div class="form-group">
        <label for="confirm-password">Growth Period</label>
        <input required="" class="form-control" name="confirm-password" id="confirm-password" type="password"/>
      </div>
      <div class="form-group">
        <label for="confirm-password">Harvesting Period</label>
        <input required="" class="form-control" name="confirm-password" id="confirm-password" type="password"/>
      </div>
      <div class="form-group">
        <label for="confirm-password">techniques</label>
        <input required="" class="form-control" name="confirm-password" id="confirm-password" type="password"/>
      </div>
     <input type="submit" class="btn1" value="submit"/>    </form>
  </div>
</div>

    
    </div>
    </>
  )
}

export default Addcrops
