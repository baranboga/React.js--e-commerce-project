import React, { useEffect, useState } from 'react'
import { checkToken } from '../requests/login';
import { getProductById } from '../requests/product';
import { useNavigate, useParams } from 'react-router';
import Product from './Product';
import BasketDetail from './BasketDetail';
import { useDispatch, useSelector } from 'react-redux';
import { incrementWithValue, selectCount, selecttoplam, topla, buy} from '../requests/slice';

export default function Basket() {

  
  const param = useParams();
  let navigate= useNavigate();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const toplam = useSelector(selecttoplam);
  const [productsbuy,setProductsbuy]=useState({});
  

  

 useEffect(()=>{

 
  Deneme()

  setTimeout(() => {
    dispatch(topla())
  }, 200);
  
  

 },[])



  
  const Deneme =()=>{

    let token=localStorage.getItem('token');
    
    if(token ==null){
      navigate('/login');
    }
    else{
      checkToken(token).then((data)=>{
          if(data){
          getProductById(token,Number(param.id)).then((res)=>{
          
            dispatch(incrementWithValue(res))
            
            
            
          })
          }
          else{
          navigate('/login');
  
          }
      })
  
    }


    
  }


  
  return (
    
     
<div className='container row' >
<div className='col-12'>
          <div className='row mt-3'>
        <div className='col-12 '>
          <div  className='col-6 d-flex  justify-content-end align-items-center ' style={{borderRadius:'5px',backgroundColor:'#0c2a2f'}}>
          <h1 className='mx-3' style={{color:"white"}}>Card</h1>
          </div>
          
        </div>
      </div>

      <div className='row'>
      
      {
        count.map((a, index) => {
          return (<BasketDetail key={index} urun={a} />)
        })
      }
      
      <div className='row d-flex mt-5 '>
        <div className='d-flex justify-content-center'>
      <h2  className=''>{"Toplam:" + toplam}</h2>
      </div>
      </div>
      <div className='row d-flex mt-1 justify-content-center'>
      <button className="btn btn-light ms-1" style={{ backgroundColor: "#0c2a2f", color: "white" ,width:"300px"}} onClick={() => {
        dispatch(buy())
        navigate('/registered')
      }}>Buy</button>
      </div>
      </div>
    </div>
    </div>

  )
    }