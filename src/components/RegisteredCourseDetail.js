import React from 'react'

export default function RegisteredCourseDetail(props) {
  return (
    <div className="col-3 card d-flex text-center align-items-center mx-4 mb-4 ">

        <img src={props.urun.image} className="card-img-top mt-2" alt={props.urun.name} />
        <div className="card-body">
          <h5 className="card-title px-1">{props.urun.name}</h5>
          <p className="card-text px-1">{props.urun.description}</p>
          
        
          </div>
        </div>
  )
}
