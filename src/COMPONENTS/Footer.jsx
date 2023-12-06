import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div style={{width:"100%",height:"400px",}} className='d-flex justify-content-center align-items-center flex-column w-100 mt-5 bg-primary'>
      <div className='footer d-flex justify-content-evenly align-items-center w-100 mb-5'>
      <div className='website' style={{width:"400px"}}>
        <h4 className='fw-bold' style={{color:'white'}}><i class="fa-solid fa-cart-shopping me-3"></i>{' '}E-Cart</h4>
        <p style={{color:'wheat'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut repudiandae error dolorum, voluptatum, nesciunt sapiente placeat ullam soluta ea ipsam, fugit ipsum pariatur accusamus nemo a consectetur autem quibusdam maxime!</p>
        <p style={{color:'wheat'}}> sit amet consectetur, adipisicing elit</p>
      </div>
      <div className='links d-flex flex-column'>
        <h3 style={{color:'wheat'}}>Links</h3>
        <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Landing Page</Link>
        <Link to={'/home'} style={{textDecoration:"none",color:"white"}}>Home Page</Link>
        <Link to={'/wishlist'} style={{textDecoration:"none",color:"white"}}>Watch History</Link>
      </div>
      <div className='guides d-flex flex-column'>
        <h4 style={{color:'wheat'}}>Guides</h4>
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}>react</Link>
        <Link  to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}>react bootstrap</Link>
        <Link  to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}>bootswatch</Link>
      </div>
      <div className='contact'>
        <h4 style={{color:'wheat'}} className='mb-3'>contact us</h4>
        <div className='d-flex'>
          <input type="text" className='form-control' placeholder='enter your email id'/>
          <button type='button' className='btn btn-warning text-white ms-2'>Subscribe</button>
        </div>
        <div className='icons d-flex justify-content-evenly mt-3'>
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-facebook-f fa-2x"></i></Link>
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-github fa-2x"></i></Link>
       
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}> <i class="fa-brands fa-linkedin fa-2x"></i></Link>
        </div>
      </div>
      </div>
      <p className='text-light'>Copyright © 2023 E-CART <i class="fa-solid fa-cart-shopping ms-1"></i> .Built with React</p>
    </div>
  )
}

export default Footer