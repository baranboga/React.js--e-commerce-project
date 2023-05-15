import React, { useEffect, useState } from 'react'
import { checkToken } from '../requests/login';
import { Navigate, useNavigate } from 'react-router-dom';
import { getProducts, productType } from '../requests/product';


export default function Home() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);


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


    <>

<section class="testimonial" >
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block">
                    <ol class="carousel-indicators tabs">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-6 d-flex justify-content-center align-items-center">
                    <div id="carouselExampleIndicators" data-interval="false" class="carousel slide" data-ride="carousel">
                        <h1>CONTINUE LEARNING</h1><br/>
                        <h2> ANYWHERE IN THE WORLD</h2><br/>
                        <h2 > IF YOU HAVE INTERNET</h2>
                        
                        <ol class="carousel-indicators indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>


  )
}