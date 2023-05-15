import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../requests/product';
import { checkToken } from '../requests/login';
import Basket from './Basket';


export default function Detail() {



    const [products,setProducts]=useState({});
    
    const param = useParams();
    let navigate= useNavigate();
    
    

    useEffect(()=>{
        let token=localStorage.getItem('token');
      
        if(token ==null){
          navigate('/login');
        }
        else{
          checkToken(token).then((data)=>{
              if(data){
              getProductById(token,Number(param.id)).then((res)=>{
                
                setProducts(res);
              
              
              })
              }
              else{
              navigate('/login');
      
              }
          })
      
        }
        
      },[])
      

  return (

    
    <div>
    
    <div className='row mt-3'>
        <div className='col-12 '>
          <div  className='col-6 d-flex  justify-content-end align-items-center ' style={{borderRadius:'5px',backgroundColor:'#0c2a2f'}}>
          <h1 className='mx-3' style={{color:"white"}}>{products.name}</h1>
          </div>
          
        </div>
      </div>

<div class="container py-4">
    
    <div class="p-1  bg-body-tertiary rounded-3 pb-5">
      <div class="container-fluid py-1">
        <h1 class="display-5 fw-bold">{products.name}</h1>
        <p class="col-md-8 fs-4">{products.description}</p>
        <button class="btn btn-primary btn-lg" style={{backgroundColor:"#0c2a2f"}} type="button" onClick={()=>{

navigate(`/basket/${products.id}`)

 }}>Add to Card</button>
      </div>
    </div>

    <div class="row align-items-md-stretch">

      <div class="col-md-6" >
      <div class="card h-50">
 
  <img src={products.image} class="card-img-bottom img-fluid" alt="..." style={{height:"700px"}}/>
</div>
      </div>
      <div class="col-md-6">
        <div class="h-50 p-5 bg-body-tertiary border rounded-3">
          <h2>{products.name}</h2>
          <p>{products.education}</p>
          
        </div>
      </div>
    </div>

    
  </div>
</div>
    
  )
}
