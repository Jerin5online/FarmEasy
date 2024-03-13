import React from 'react'
import "./Addnews.css";
import { Link } from 'react-router-dom';
import MyHeader from '../components/myHeader/MyHeader';
import Footer from '../components/footer/Footer';
import News from '../components/newsAndUpdates/News';


const Addnews = () => {
  return (
              <>
    <div id='newsbg' className='d-flex align-items-center justify-content-center'>
      <div  class="card">
<Link className='text-decoration-none' to={'/adminhome'}><i class="fa-solid fa-arrow-left"></i> Back  to home</Link>
  <span class="title">ADD NEWS</span>
  <form class="form">
    <div class="group">
    <textarea placeholder="" id="comment" name="Title" rows="5" required=""></textarea>
    <label for="comment">Title</label>
</div>
<div class="group">

    <textarea placeholder="" id="comment" name="Content" rows="5" required=""></textarea>
    <label for="comment">Content</label>
    
</div>
    <button type="submit">Submit</button>
  </form>
</div>

    </div>
    <News/>
    </>
  )
}

export default Addnews
