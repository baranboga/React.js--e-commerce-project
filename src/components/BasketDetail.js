import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, sil, increment } from '../requests/slice';
import { FaTrash } from 'react-icons/fa';




export default function BasketDetail(props) {
  const dispatch = useDispatch();
  const [deger, setdeger] = useState(0);






  return (
    <div>
      <div className='row d-flex mt-5 ' >
        <div className='col-3'>

        </div>
        <div className='col-6 ' style={{ border: "solid 4px #0c2a2f", borderRadius: "10px" }}>
          
          <div className='row'>
            <div className='col-3'>
              <img src={props.urun.image} className='my-3' alt="" style={{ width: "125px", height: "125px" }} />
            </div>
            <div className='col-9  '>
              <div className='row'>
                <div className='col-12 d-flex justify-content-center'> 
                <p  style={{fontSize:"18px", fontWeight:"bold"}}>{props.urun.name}</p>
                </div>
              </div>
             
              <div className='row'>
              <div className='col-12 d-flex justify-content-center'> 
                <p className='pe-3' style={{fontSize:"18px", fontWeight:"bold"}}>{props.urun.price + " TL"}</p>
                
              </div>
              </div>
              <div className='row'>
              <div className='col-10 d-flex justify-content-center '> 
                <button type="button" className="btn btn-light ms-1 " style={{ backgroundColor: "#0c2a2f", color: "white",height:"40px", borderColor:"#0c2a2f" }} onClick={() => {
                  dispatch(increment(props.urun.id))
                }} >+</button>
                <p className='mt-2 mx-1' style={{}}>{props.urun.value + "#"}</p>
                <button type="button" className="btn btn-light ms-1" style={{ backgroundColor: "#0c2a2f", color: "white",height:"40px", borderColor:"#0c2a2f" }} onClick={() => {
                  dispatch(decrement(props.urun.id))
                }}>-</button>
                </div>
                <div className='col-2 d-flex justify-content-end'>
                <FaTrash style={{height:"40px", color:"black"}} />
                <button type="button" className="btn  ms-1 me-5 " style={{height:"40px"}} onClick={() => {
                  dispatch(sil(props.urun.id))
                }}><FaTrash style={{height:"40px", color:"black"}} title='Delete'/></button>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className='col-3'>

        </div>
      </div>
      {props.urun.value < 10 ? <p></p> : <p style={{ color: "red", textAlign: 'center' }}>More than 10 products cannot be added.</p>}
    </div>
  )
}
