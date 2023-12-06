import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../REDUX/Slice/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);

  const dispatch = useDispatch()
 const[total,setTotal]=useState(0)
 const navigate=useNavigate()

 const getTotal=()=>{
 
  if(cartArray.length>0){
    setTotal( cartArray?.map(item=>item?.price).reduce((p1,p2)=>p1+p2))
  }
    else{
      setTotal(0)
    }
 }

 const checkout=()=>{
  dispatch(emptyCart())
  alert('THANK YOU....Your Order is Successfully Placed')
  navigate('/')
  
 }

 useEffect(()=>{
    getTotal()
 },[cartArray])

  return (
    <div className='container' style={{ marginTop: '150px' }}>
       {
        cartArray?.length > 0 ?
        
        <div className='row w-100'>
       <div className='col-lg-6 m-2'>
       <table className='table border shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {cartArray?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail} style={{ height: '100px', width: '100px' }} alt="no image" /></td>
                    <td>{item.price}</td>
                    <td><Button onClick={() => dispatch(removeFromCart(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash-can" ></i></Button></td>
                  </tr>
                ))
}
              </tbody>
            </table>
        </div>
        <div className='col-lg-5 mt-2 d-flex justify-content-center align-items-center flex-column'>
         <div className='border shadow p-5'>
            <h2 className='fw-bold text-primary text-center'> SUMMARY</h2>
            <h4>Total Number of Products : <span className='text-danger fs-3'>{cartArray.length}</span></h4>
            <h4>Total Price :  <span className='text-danger fs-3' >₹{total}</span></h4> 
            <button onClick={checkout} className='btn btn-success rounded mt-3 ' style={{marginLeft:'110px'}}>Checkout</button>
         </div>
        </div>
       </div>
      :
      <div style={{ height: '60vh' }} className='d-flex flex-column justify-content-center align-items-center'>
      <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" style={{ height: '300px' }} alt="" />
      <h4>Your Cart is Empty</h4>
      <button className='btn btn-success rounded'><Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>BACK TO HOME</Link></button>
    </div>  
      }
   </div>
  )
}

      export default Cart