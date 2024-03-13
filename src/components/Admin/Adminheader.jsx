import React from 'react'
import './adminheader.css'
import { Link } from 'react-router-dom'

function Adminheader() {
  return (
    <div>
      <div className='adminheader ms-3 mt-3 Card shadow mb-3 d-flex align-items-center  flex-column'>
         <div className='mt-5 text-light'>
          
            <Link className='link' to={'/addnews'}><h5 className='mb-3'><i class="fa-solid fa-newspaper"></i> Add News</h5></Link>
            <Link className='link' to={'/addcrop'}><h5 className='mb-3'><i class="fa-solid fa-tree"></i> Add Crops</h5></Link>
            <Link className='link' to={'/disease'}><h5 className='mb-3'><i class="fa-solid fa-arrow-right-from-bracket me-2"></i>Disease Solutions </h5></Link>
            <Link className='link' to={'/'}><h5 className='mb-3'><i class="fa-solid fa-arrow-right-from-bracket me-2"></i>Disease Solutions </h5></Link>

            <Link className='link' to={'/disease'}><h5 className='mb-3'><i class="fa-solid fa-arrow-right-from-bracket me-2"></i>Disease Solutions </h5></Link>

            {/* <Link className='link' to={'/bookings'}><h5 className='mb-3'><i class="fa-solid fa-address-book me-2"></i> User Bookings</h5></Link>
            <Link className='link' to={'/userlist'}><h5 className='mb-3'><i class="fa-solid fa-user me-2"></i> Users</h5></Link>  */}
            {/* <Link className='link' to={'/'}><h5 className='mb-3'><i class="fa-solid fa-right-from-bracket me-2"></i>Back To HpmePage</h5></Link> */}

         </div>
      </div>
    </div>
  )
}

export default Adminheader
