import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../REDUX/Slice/wishlistSlice';
import { addToCart } from '../REDUX/Slice/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wislistReducer)
  console.log(wishlistArray);

  const dispatch=useDispatch()

  const handlewishlist=(items)=>{
    dispatch(addToCart(items))
    dispatch(removeFromWishlist(items.id))
  }



  return (
    <div>
      <Row className='m-5 '>
        {wishlistArray?.length > 0 ?
          wishlistArray?.map((items) => (
            <Col className=' mt-5' sm={12} md={6} lg={4} xl={3}>
              <Card className='rounded' style={{ width: '18rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                <Card.Img variant="top" src={items.thumbnail} style={{ height: "200px" }} />
                <Card.Body>
                  <Card.Title className='text-center'>{items.title.slice(0, 20)}...</Card.Title>
                  <Card.Text className='text-center'>
                    <p>{items.description.slice(0, 20)}...</p>
                    <p className='fw-bold text-center'>₹{items.price}</p>
                  </Card.Text>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Button onClick={()=>dispatch(removeFromWishlist(items.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash-can"></i></Button>
                    <Button onClick={()=>handlewishlist(items)} variant="outline-success btn rounded"><i class="fa-solid fa-cart-shopping me-2"></i></Button>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          ))
          :
          <div style={{ height: '90vh' }} className='d-flex flex-column justify-content-center align-items-center'>
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" style={{ height: '300px' }} alt="" />
            <h4>Your Wishlist is Empty</h4>
            <button className='btn btn-success rounded'><Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>BACK TO HOME</Link></button>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist