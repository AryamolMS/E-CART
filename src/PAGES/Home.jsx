import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../HOOKS/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../REDUX/Slice/wishlistSlice';
import { addToCart } from '../REDUX/Slice/cartSlice';

function Home() {
  const dispatch = useDispatch()

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  return (
    <div>
      <Row className='m-5 '>
        {data?.length > 0 ?
          data?.map((item) => (
            <Col className=' mt-5' sm={12} md={6} lg={4} xl={3}>
              <Card className='rounded' style={{ width: '18rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                <Card.Img variant="top" src={item.thumbnail} style={{ height: "200px" }} />
                <Card.Body>
                  <Card.Title className='text-center'>{item.title.slice(0, 20)}...</Card.Title>
                  <Card.Text className='text-center'>
                    <p>{item.description.slice(0, 20)}...</p>
                    <p className='fw-bold text-center'>₹{item.price}</p>
                  </Card.Text>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Button onClick={() => dispatch(addToWishlist(item))} variant="outline-danger btn rounded"><i class="fa-solid fa-heart"></i></Button>
                    <Button onClick={()=>dispatch(addToCart(item))} variant="outline-success btn rounded"><i class="fa-solid fa-cart-shopping me-2"></i></Button>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          ))

          : <p className='text-center text-danger'>nothing to display</p>
        }

      </Row>
    </div>
  )
}

export default Home