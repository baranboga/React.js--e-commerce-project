import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Singup() {
  return (
    <div>
           <div className='row d-flex align-content-center justify-content-center mt-5' >
                <div className='row d-flex align-item-center  justify-content-center mt-5'>


                    <div className="col-6 d-flex align-item-center text-center justify-content-center">
                        <form className="text-center" >

                            <h1 className="h3 mb-3 fw-normal" style={{ color: "#3F054C" }}> <i className="fa-solid fa-right-to-bracket " style={{ color: "#0c2a2f" }}></i> Sing up</h1>

                            <div className="form-floating">
                                <input type="text"
                                    className="form-control mb-2"
                                    id="girisKullaniciAdi"
                                    placeholder="mail"
                                    required />
                                <label htmlFor="floatingInput">Username</label>
                            </div>
        
                            <div className="form-floating">
                                <input type="password"
                                    className="form-control mb-2"
                                    id="girisSifre"
                                    placeholder="Password"
                                    required />
                                <label htmlFor="floatingPassword">password</label>
                            </div>
                            <div className="form-floating">
                                <input type="password"
                                    className="form-control mb-2"
                                    id="girisSifre"
                                    placeholder="Password"
                                    required />
                                <label htmlFor="floatingPassword">password again</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: "#0c2a2f", color: "white" }} type="submit" id="btnGirisYap"   >Sing up</button>
                        </form>
                        
                    
                        
                    </div>

                </div>
                <div className="row d-flex align-item-center justify-content-center mt-3'">
                    <div className="col-6 d-flex align-item-center   justify-content-center'">
                       

                    </div>
                </div>
                <div className='row d-flex align-item-center  justify-content-center mt-3'>
                    <div className='col-6 d-flex align-item-center text-center justify-content-center'>

                    <NavLink className='nav-link mx-2 ' to={'/login'} style={{color:"black",  fontSize: '20px' }}>Login</NavLink>
                    </div>

                </div>


            </div>



    </div>
  )
}
