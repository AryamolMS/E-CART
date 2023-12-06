import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const wishlist=useSelector((state)=>state.wislistReducer)//state represents store
  console.log(wishlist);
  
  const cart=useSelector((state)=>state.cartReducer)
  console.log(cart);


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand ><Link to={'/'}  style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-cart-shopping fa-bounce me-3"></i>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/wishlist'} style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-heart me-2" style={{color:"red"}}></i> Wishlist <Badge bg="secondary" className='rounded'>{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'} style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-cart-shopping me-2" style={{color:"yellow"}}></i>Cart <Badge bg="secondary" className='rounded'>{cart.length}</Badge></Link></Nav.Link>      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header