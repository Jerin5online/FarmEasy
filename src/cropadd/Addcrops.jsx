import React from 'react'
import "./Addcrops.css"
import { Link } from 'react-router-dom'

const Addcrops = () => {
  return (
    <div id='cropbg' className='d-flex align-items-center justify-content-center' >
    <div  className='card '>
    <Link className='text-decoration-none' to={'/adminhome'}><i class="fa-solid fa-arrow-left"></i> Back  to home</Link>

  <div class="card-headerr mt-2">
    <div class="text-header">ADD CROPS</div>
  </div>
  <div class="card-body">
    <form action="#">
      <div class="form-group">
        <label for="username">Username:</label>
        <input required="" class="form-control" name="username" id="username" type="text"/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input required="" class="form-control" name="email" id="email" type="email"/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input required="" class="form-control" name="password" id="password" type="password"/>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input required="" class="form-control" name="confirm-password" id="confirm-password" type="password"/>
      </div>
     <input type="submit" class="btn1" value="submit"/>    </form>
  </div>
</div>

    
    </div>
  )
}

export default Addcrops
