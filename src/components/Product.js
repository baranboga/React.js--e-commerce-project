import React, { useEffect, useState } from 'react'
import { checkToken } from '../requests/login';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { getProducts, productType } from '../requests/product';
import { useSelector } from 'react-redux';
import { selectKeyword } from '../requests/slice';


export default function Product() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  let key = useSelector(selectKeyword);
  const param = useParams();
  const [keyy, setkey] = useState()





  useEffect(() => {
    let token = localStorage.getItem('token');

    if (token == null) {
      navigate('/login');
    }
    else {
      checkToken(token).then((data) => {
        if (data) {
          getProducts(token).then((request) => setProducts(request))


        }
        else {
          navigate('/login');

        }
      })

    }

  })




  return (


    <div className='container row'>
      <div className='col-12'>



        <div className='row mt-3 mb-5'>
          <div className='col-12 '>
            <div className='col-6 d-flex  justify-content-end align-items-center ' style={{ borderRadius: '5px', backgroundColor: '#0c2a2f' }}>
              <h1 className='mx-3' style={{ color: "white" }}>COURSES</h1>
            </div>

          </div>
        </div>

        <div className='row'>

          <div className='col-1'>
          </div>

          <div className='col-10 d-flex justify-content-center  '>
            <div className='row'>


              {
                products.filter((item) => {


                  return (item.name.toLowerCase().includes(param.param ? param.param : ""))

                }).map((product, index) => {

                  return (

                    <div key={index} className="col-3 card d-flex text-center align-items-center mx-4 mb-4" style={{ width: "18rem" }}>
                      <img src={product.image} className="card-img-top" alt={product.name} />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">{product.price} TL</p>
                        <Link to={`/productDetail/${product.id}`} className="btn " style={{ color: "white", backgroundColor: '#0c2a2f' }}>Detail</Link>
                      </div>
                    </div>


                  )
                })

              }
            </div>
          </div>
        </div>
        <div className='col-1'>
        </div>
      </div>
    </div>

  )
}
